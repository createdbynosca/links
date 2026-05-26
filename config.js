// ================================
// AFFILIATE-LINKS (hardcoded)
// ================================

const CONFIG = {
    LINKS: [
        {
            category: 'Plotter & Drucker',
            title: 'Cricut Maker 4 - Starter Paket',
            url: 'https://amzn.to/4izbC9i',
            image: 'https://res.cloudinary.com/dxqig283a/image/upload/v1766687152/Cricut_Maker_4_bw8jeh.jpg'
        },
        {
            category: 'Plotter & Drucker',
            title: 'Cricut Joy - Starter Set (Bestseller)',
            url: 'https://amzn.to/3Fe6E2S',
            image: 'https://res.cloudinary.com/dxqig283a/image/upload/v1766687152/Cricut_Joy_bgabxz.jpg'
        },
        {
            category: 'Plotter & Drucker',
            title: 'HP Photo ENVY 7134 - Premium Drucker',
            url: 'https://amzn.to/4dGLKHi',
            image: 'https://res.cloudinary.com/dxqig283a/image/upload/v1779820599/printer_pcjcmu.png'
        },
        {
            category: 'Plotter & Drucker',
            title: 'LOKLiK icrafter',
            url: 'https://amzn.to/3XOalxf',
            image: 'https://res.cloudinary.com/dxqig283a/image/upload/v1766687154/LOKLIK_ICrafter_th5uxj.jpg'
        },
        {
            category: 'Klingen',
            title: 'Cricut-Klingen in verschiedenen Winkeln',
            url: 'https://amzn.to/49pDcDD',
            image: 'https://res.cloudinary.com/dxqig283a/image/upload/v1766687152/Cricut_Klingen_v3kjio.jpg'
        },
        {
            category: 'Klingen',
            title: 'Cricut Knife Blade (\"the boss\")',
            url: 'https://amzn.to/48YEtl6',
            image: 'https://res.cloudinary.com/dxqig283a/image/upload/v1766687152/Cricut_Knife_Blade_k5eyrj.jpg'
        },
        {
            category: 'Klingen',
            title: 'Cricut Deep Point Blade (die schwarze)',
            url: 'https://amzn.to/44MXx3k',
            image: 'https://res.cloudinary.com/dxqig283a/image/upload/v1766687153/Deep_Point_Blade_d8ukhk.png'
        },
        {
            category: 'Klingen + Gehäuse',
            title: 'Cricut Foil Transfer Kit',
            url: 'https://amzn.to/4aCUKgV',
            image: 'https://res.cloudinary.com/dxqig283a/image/upload/v1766687152/Cricut_Foil_Transfer_Kit_ieupyh.jpg'
        },
        {
            category: 'Zum Aufbügeln',
            title: 'Mini Hitze Presse',
            url: 'https://amzn.to/42JH2TU',
            image: 'https://res.cloudinary.com/dxqig283a/image/upload/v1766687156/Mini_Heat_Press_mdrftv.jpg'
        },
        {
            category: 'Zubehör',
            title: 'Heißklebepistole (kabellos)',
            url: 'https://amzn.to/4hDOK7l',
            image: 'https://res.cloudinary.com/dxqig283a/image/upload/v1766687155/Hei%C3%9Fklebepistole_rra2tj.jpg'
        },
        {
            category: 'Zubehör',
            title: 'Entgitterwerkzeug',
            url: 'https://amzn.to/3RODff6',
            image: 'https://res.cloudinary.com/dxqig283a/image/upload/v1766687155/Entgitterwerkzeug2_hskpci.jpg'
        },
        {
            category: 'Zubehör',
            title: 'Schneidematte',
            url: 'https://amzn.to/3FfOyO6',
            image: 'https://res.cloudinary.com/dxqig283a/image/upload/v1766687156/Schneidematten_nyi3la.jpg'
        },
        {
            category: 'Folie',
            title: 'Pastellfarbene Vinylfolie (selbstklebend)',
            url: 'https://amzn.to/4iilp3i',
            image: 'https://res.cloudinary.com/dxqig283a/image/upload/v1766687156/Screenshot_2025-12-25_at_18.39.03_mchgjk.png'
        },
        {
            category: 'Folie',
            title: 'Goldfarbene Vinylfolie (selbstklebend)',
            url: 'https://amzn.to/4kDQyzL',
            image: 'https://res.cloudinary.com/dxqig283a/image/upload/v1766687153/Goldfolie_ir3n3x.jpg'
        },
        {
            category: 'Folie',
            title: 'Pastellfarbene Bügelfolie (Iron-on)',
            url: 'https://amzn.to/3DvE5NU',
            image: 'https://res.cloudinary.com/dxqig283a/image/upload/v1766687156/Vinylfolie_pastel_wldgmk.jpg'
        },
        {
            category: 'Stickerpapier',
            title: '(Testsieger) Oyemat wasserfestes Stickerpapier',
            url: 'https://amzn.to/4nF1RbR',
            image: 'https://res.cloudinary.com/dxqig283a/image/upload/v1766687155/Oyemat_Stickerpapier_qhyimg.jpg'
        },
        {
            category: 'Stickerpapier',
            title: 'Stickerpapier PPD',
            url: 'https://amzn.to/4bXpVlr',
            image: 'https://res.cloudinary.com/dxqig283a/image/upload/v1766687155/Oyemat_Stickerpapier_qhyimg.jpg'
        },
        {
            category: 'Stickerpapier',
            title: 'Glitzerfolie (zum Kaltlaminieren)',
            url: 'https://amzn.to/3lipqHT',
            image: 'https://res.cloudinary.com/dxqig283a/image/upload/v1766687154/Holographische_Folie_begjkv.jpg'
        },
        {
            category: 'Für Lesezeichen',
            title: '180gr Papier weiß',
            url: 'https://amzn.to/4h6OAGK',
            image: 'https://res.cloudinary.com/dxqig283a/image/upload/v1766687157/Wei%C3%9Fes_Papier_l7opte.jpg'
        },
        {
            category: 'Für Lesezeichen',
            title: 'Magnete (Plättchen)',
            url: 'https://amzn.to/42gQNbB',
            image: 'https://res.cloudinary.com/dxqig283a/image/upload/v1766687154/Magnetpl%C3%A4ttchen_xgo58g.jpg'
        }
    ]
};
