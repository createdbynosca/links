// ================================
// Affiliate-Links Renderer
// Lädt die Links direkt aus config.js (hardcoded)
// ================================

class AffiliateLinksLoader {
    constructor() {
        this.linksContainer = document.getElementById('affiliate-links');
        this.loadingElement = document.getElementById('loading');
    }

    init() {
        this.hideLoading();
        this.renderLinks(CONFIG.LINKS);
    }

    renderLinks(links) {
        if (!links || links.length === 0) {
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
               data-umami-event="Affiliate Click"
               data-umami-event-product="${this.escapeHtml(link.title)}"
               data-umami-event-category="${this.escapeHtml(link.category)}"
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

    hideLoading() {
        if (this.loadingElement) {
            this.loadingElement.style.display = 'none';
        }
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Starte den Renderer wenn das DOM bereit ist
document.addEventListener('DOMContentLoaded', () => {
    const loader = new AffiliateLinksLoader();
    loader.init();
});
