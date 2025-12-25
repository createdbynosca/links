// ================================
// KONFIGURATION - Hier deine Daten eintragen
// ================================

const CONFIG = {
    // Google Sheets API Key
    // Anleitung: https://developers.google.com/sheets/api/quickstart/js
    GOOGLE_API_KEY: 'AIzaSyCfU4D5FVfnjREEUiDfJNohrqYGjfHeWnY',
    
    // Google Sheet ID (aus der URL deines Sheets)
    // Beispiel: https://docs.google.com/spreadsheets/d/DIESE_ID_HIER/edit
    GOOGLE_SHEET_ID: '1I_zxxXqYvVvA6kOiE5VmOKwuRBXF5wovD6HYfhXFKyc',
    
    // Name des Tabellenblatts (unten in Google Sheets)
    SHEET_NAME: 'Links',
    
    // Cache-Dauer in Minuten (reduziert API-Aufrufe)
    CACHE_DURATION_MINUTES: 5,
    
    // Fallback-Daten falls API nicht erreichbar
    // Diese werden angezeigt wenn das Sheet nicht geladen werden kann
    FALLBACK_LINKS: [
        {
            category: 'Plotter',
            title: 'Cricut Maker 4 - Starter Paket',
            url: '#',
            image: 'images/placeholder.jpg'
        }
    ]
};
