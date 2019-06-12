let script = {
    "url": "*://*.gostream.site/(?!genre|most-viewed|top-imdb|contact)",

    "ready": () => { let e = $('.movieplay iframe, .desc iframe'); return e.empty? false: e.first.src != '' },

    "init": (ready) => {
        let _title, _year, _image, R = RegExp;

        let title  = $('[itemprop="name"]:not(meta)').first,
            year   = $('.mvic-desc [href*="year/"]').first,
            image  = $('.hiddenz, [itemprop="image"]').first,
            type   = 'movie';

        new Notification('update', 'Select the Openload (OL) server');

        title = title.textContent.trim();
        year = (year? year.textContent.trim(): 0);
        image = (image? image.src: null);

        return { type, title, year, image };
    },
};
