// ================================
// Google Sheets Loader
// Lädt Affiliate-Links aus einem Google Sheet
// ================================

class AffiliateLinksLoader {
    constructor() {
        this.linksContainer = document.getElementById('affiliate-links');
        this.loadingElement = document.getElementById('loading');
        this.errorElement = document.getElementById('error');
        this.cache = null;
        this.cacheTimestamp = null;
    }

    async init() {
        try {
            const links = await this.loadLinks();
            this.renderLinks(links);
        } catch (error) {
            console.error('Fehler beim Laden der Links:', error);
            this.showError();
        }
    }

    async loadLinks() {
        // Prüfe Cache
        const cached = this.getFromCache();
        if (cached) {
            console.log('Links aus Cache geladen');
            return cached;
        }

        // Prüfe ob Konfiguration vorhanden
        if (!CONFIG.GOOGLE_API_KEY || CONFIG.GOOGLE_API_KEY === 'DEIN_API_KEY_HIER') {
            console.warn('Keine API-Konfiguration gefunden, verwende Fallback-Daten');
            return CONFIG.FALLBACK_LINKS;
        }

        // Lade aus Google Sheets
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${CONFIG.GOOGLE_SHEET_ID}/values/${CONFIG.SHEET_NAME}?key=${CONFIG.GOOGLE_API_KEY}`;
        
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();
        const links = this.parseSheetData(data);
        
        // Speichere im Cache
        this.saveToCache(links);
        
        return links;
    }

    parseSheetData(data) {
        // Erwartetes Format der Tabelle:
        // Zeile 1: Header (Kategorie, Titel, URL, Bild-URL)
        // Zeile 2+: Daten
        
        const rows = data.values;
        if (!rows || rows.length < 2) {
            return [];
        }

        // Überspringe Header-Zeile
        const dataRows = rows.slice(1);
        
        return dataRows
            .filter(row => row[0] && row[1] && row[2]) // Mindestens Kategorie, Titel, URL
            .map(row => ({
                category: row[0]?.trim() || '',
                title: row[1]?.trim() || '',
                url: row[2]?.trim() || '#',
                image: row[3]?.trim() || 'images/placeholder.jpg'
            }));
    }

    renderLinks(links) {
        this.hideLoading();
        
        if (links.length === 0) {
            this.linksContainer.innerHTML = '<p class="no-links">Keine Empfehlungen gefunden.</p>';
            return;
        }

        // Gruppiere nach Kategorie
        const grouped = this.groupByCategory(links);
        
        let html = '';
        
        for (const [category, categoryLinks] of Object.entries(grouped)) {
            html += `
                <div class="category-header">
                    <h2>${this.escapeHtml(category)}</h2>
                </div>
            `;
            
            categoryLinks.forEach((link, index) => {
                html += this.renderLinkItem(link, index);
            });
        }
        
        this.linksContainer.innerHTML = html;
    }

    renderLinkItem(link, index) {
        return `
            <a href="${this.escapeHtml(link.url)}" 
               target="_blank" 
               rel="noopener sponsored" 
               class="affiliate-item"
               style="animation-delay: ${0.1 + (index * 0.05)}s">
                <div class="affiliate-item-image">
                    <img src="${this.escapeHtml(link.image)}" 
                         alt="${this.escapeHtml(link.title)}"
                         loading="lazy"
                         onerror="this.src='images/placeholder.jpg'">
                </div>
                <div class="affiliate-item-content">
                    <div class="affiliate-item-category">${this.escapeHtml(link.category)}</div>
                    <div class="affiliate-item-title">${this.escapeHtml(link.title)}</div>
                </div>
                <div class="affiliate-item-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                </div>
            </a>
        `;
    }

    groupByCategory(links) {
        const grouped = {};
        
        links.forEach(link => {
            const category = link.category || 'Sonstiges';
            if (!grouped[category]) {
                grouped[category] = [];
            }
            grouped[category].push(link);
        });
        
        return grouped;
    }

    // Cache-Funktionen
    getFromCache() {
        try {
            const cached = localStorage.getItem('affiliateLinks');
            const timestamp = localStorage.getItem('affiliateLinksTimestamp');
            
            if (!cached || !timestamp) return null;
            
            const age = Date.now() - parseInt(timestamp);
            const maxAge = CONFIG.CACHE_DURATION_MINUTES * 60 * 1000;
            
            if (age > maxAge) {
                localStorage.removeItem('affiliateLinks');
                localStorage.removeItem('affiliateLinksTimestamp');
                return null;
            }
            
            return JSON.parse(cached);
        } catch (e) {
            return null;
        }
    }

    saveToCache(links) {
        try {
            localStorage.setItem('affiliateLinks', JSON.stringify(links));
            localStorage.setItem('affiliateLinksTimestamp', Date.now().toString());
        } catch (e) {
            console.warn('Cache konnte nicht gespeichert werden');
        }
    }

    // UI-Hilfsfunktionen
    hideLoading() {
        if (this.loadingElement) {
            this.loadingElement.style.display = 'none';
        }
    }

    showError() {
        this.hideLoading();
        if (this.errorElement) {
            this.errorElement.style.display = 'block';
        }
        
        // Zeige Fallback-Daten wenn vorhanden
        if (CONFIG.FALLBACK_LINKS && CONFIG.FALLBACK_LINKS.length > 0) {
            this.renderLinks(CONFIG.FALLBACK_LINKS);
        }
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Starte den Loader wenn das DOM bereit ist
document.addEventListener('DOMContentLoaded', () => {
    const loader = new AffiliateLinksLoader();
    loader.init();
});
