// Web to Plex - Shana Project Plugin
// Aurthor(s) - @ephellon (2018)

let plugin = {
    "url": "*://*.shanaproject.com/*",

    "init": () => {
        let title = document.queryBy('.overview i, #header_big .header_info_block').first.textContent.trim(),
            year = +document.queryBy('#header_big .header_info_block + *').first.textContent.trim().replace(/[^]*(\d{4})[^]*/m, '$1'),
            image = document.queryBy('#header_big .header_display_box').first.style['background-image'].trim().replace(/url\((.+)\)/i, '$1');

        return { type: 'show', title, year, image };
    }
};