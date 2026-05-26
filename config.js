// ================================
// KONFIGURATION - Hier deine Daten eintragen
// ================================

const CONFIG = {
    // Google Sheets API Key
    // Anleitung: https://developers.google.com/sheets/api/quickstart/js
    GOOGLE_API_KEY: 'AIzaSyCfU4D5FVfnjREEUiDfJNohrqYGjfHeWnY',
    
    // Google Sheet ID (aus der URL deines Sheets)
    // Beispiel: https://docs.google.com/spreadsheets/d/DIESE_ID_HIER/edit
    GOOGLE_SHEET_ID: '1C2VvJqMBzmKnfslRwHrBcdtxvDzu2cNsQqx-m4TDNHA',
    
    // Name des Tabellenblatts (unten in Google Sheets)
    SHEET_NAME: 'Links',
    
    // Cache-Dauer in Minuten (reduziert API-Aufrufe)
    CACHE_DURATION_MINUTES: 5,
    
    // Fallback-Daten falls API nicht erreichbar
    // Diese werden angezeigt wenn das Sheet nicht geladen werden kann
    FALLBACK_LINKS: [
        {
            category: 'Plotter & Drucker',
            title: 'Cricut Maker 4 - Starter Paket',
            url: '#',
            image: 'images/placeholder.jpg'
        },
        {
            category: 'Plotter & Drucker',
            title: 'Drucker',
            url: 'https://amzn.to/4dGLKHi',
            image: 'images/printer.png'
        }
    ]
};
