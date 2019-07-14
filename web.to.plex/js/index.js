var use_global_synq_token = true;

let $ = selector => document.querySelector(selector),
    R = RegExp,
    apikey, country,
    genres  = {
        28:    "Action",
        12:    "Adventure",
        16:    "Animation",
        35:    "Comedy",
        80:    "Crime",
        99:    "Documentary",
        18:    "Drama",
        10751: "Family",
        14:    "Fantasy",
        36:    "History",
        27:    "Horror",
        10402: "Music",
        9648:  "Mystery",
        10749: "Romance",
        878:   "Science Fiction",
        10770: "TV Movie",
        53:    "Thriller",
        10752: "War",
        37:    "Western",

        10759: "Action & Adventure",
        10762: "Kids",
        10763: "News",
        10764: "Reality",
        10765: "Sci-Fi & Fantasy",
        10766: "Soap Opera",
        10767: "Talk",
        10768: "War & Politics",
      };

function modify({ type, title, year, similar, info }) {
    let object = { title, year, ...info };

    document.title = `Web to Plex | ${title} (${year})`;

    $('#info').setAttribute('type', type);

    $('#movie').removeAttribute('active');
    $('#tv').removeAttribute('active');

    $(`#${ type }`).setAttribute('active', true);

    let element;
    for(let key in object)
        if(element = $(`#${ key }`))
            element.innerHTML = object[key] || "";

    let poster = `https://image.tmdb.org/t/p/original${ object.poster }`;
    $('#body').setAttribute('style', `background-image: url("${ poster }")`);
    $('#poster').setAttribute('src', poster);

    let { imdb, tmdb, tvdb } = object,
        ids = { imdb, tmdb, tvdb },
        tv = type == 'tv';

    for(let id in ids)
        $(`#${ id }`).setAttribute('href', (
            id == 'tmdb'?
                `https://www.youtube.com/embed/${ object[id.toUpperCase()] }`:
            `blank.html`
        ));

    $('#similar').innerHTML = '';

    if(similar)
        for(let index = 0, length = similar.length; index < length; index++) {
            let item = similar[index];

            $('#similar').innerHTML +=
    `<li>
        \u2023 <a href="?${type}=${item.id}">${item[tv?'original_name':'title']} (${item[tv?'first_air_date':'release_date'].slice(0,4)})</a>
    </li>`;
        }

}

async function as(type, id) {
    open(`blank.html`, 'frame');

    let data = {},
        tv = type == 'tv';
    await fetch(`https://api.themoviedb.org/3/${ type }/${ id }?api_key=${ apikey }`, { method: 'GET' })
        .then(r => r.json())
        .then(json => {
            let tv = type == 'tv';

            let poster = json.backdrop_path || json.poster_path,
                title  = json[tv? 'original_name': 'title'],
                releaseDate = json[tv? 'first_air_date': 'release_date'],
                year   = parseInt(releaseDate),
                genre  = json.genres.map(g => g.name).sort().join(' / '),
                imdb   = json.imdb_id,
                description = json.overview,
                runtime = (m => {let h=0;for(;m>=60;m-=60,h++);return [h,m>9?m:'0'+m]})(+json[tv?'episode_run_time':'runtime']).join(':')+(tv?'/Eps':'');
        
            data = {
                type, title, year,
                'info': {
                    runtime, genre, poster,
                    'release-date': `${ releaseDate.replace(/(\d{4})-(\d{1,2})-(\d{1,2})/, ($0, $1, $2, $3, $$, $_) => `${['January','February','March','April','May','June','July','August','September','October','November','December'][(+$2)-1]} ${$3}, ${$1}`) } (${ country })`,

                    'imdb': imdb,
                    'tmdb': id,
                },
            };
        });

    // Content Rating
    await fetch(`https://api.themoviedb.org/3/${ type }/${ id }/${ tv? 'content_ratings': 'release_dates' }?api_key=${ apikey }`, { method: 'GET' })
        .then(r => r.json())
        .then(json => {
            if(json.results && json.results.length) {
                let results = json.results.filter(result => result.iso_3166_1 === country)[0] || json.results.filter(results => results.iso_3166_1)[0];

                if(tv)
                    data.info.rating = results.rating;
                else
                    data.info.rating = results.release_dates.filter(o => o.certification)[0],
                    data.info.rating = (data.info.rating? data.info.rating.certification: 'NR');
            }
        });

    // Trailer Links
    await fetch(`https://api.themoviedb.org/3/${ type }/${ id }/videos?api_key=${ apikey }`, { method: 'GET' })
        .then(r => r.json())
        .then(json => {
            if(json.results && json.results.length)
                data.info.TMDB = json.results.filter(result => result.iso_3166_1 === country)[0].key,
                data.info.TVDB = (tv? data.info.TMDB: null);
        });

    // Similar Content
    await fetch(`https://api.themoviedb.org/3/${ type }/${ id }/similar?api_key=${ apikey }`, { method: 'GET' })
        .then(r => r.json())
        .then(json => {
            let { results } = json;

            if(results && results.length)
                data.similar = results;
        });

    console.log(data);

    return modify(data), data;
}

async function popular(type) {
    return await fetch(`https://api.themoviedb.org/3/${type}/popular?api_key=${apikey}&page=${((Math.random()*995)|0)||1}`, { method: 'GET' })
        .then(r => r.json())
        .then(json => {
            let { results } = json,
                length = results.length;

            let item = results[(Math.random()*length)|0];

            return as(type, item.id);
        });
}

document.querySelectorAll('#movie, #tv').forEach(element => {
    element.onmouseup = async event => {
        let self = event.target;
        let data = await popular(self.id);

        location.search = `?${self.id}=${data.info.tmdb}`;
    };
});

document.querySelectorAll('[target="frame"]').forEach(element => {
    let body = document.body,
        frame = $('#frame'),
        loading = $('#loading');

    element.onmouseup = event => {
        frame.setAttribute('loading', true);
        loading.setAttribute('loading', true);
        loading.removeAttribute('style');
    }

    frame.onload = frame.onerror = event => {
        frame.setAttribute('loading', false);
        loading.setAttribute('loading', false);
        setTimeout(() => loading.setAttribute('style', 'display:none'), 500);
    }
});

document.body.onload = event => {
    let data = SynQ.get('login-data');

    if(data) {
        data = decodeURIComponent(data);
        data = atob(data);
        data = SynQ.inflate(data);

        apikey = data.apikey;
        country = data.country;
    } else {
        /* Login Page */
        return open(`login.html${location.search||''}`, '_self');
    }

    /\?(movie|tv)(?:\=(\d+))?/i.test(location.search)?
        as(R.$1, R.$2):
    (async() => {
        let data = await popular(['movie','tv'][+(Math.random>0.5)]);

        location.search = `?${data.type}=${data.info.tmdb}`;
    })();
};

let searching;
$('#search').addEventListener('keyup', event => {
    if(searching)
        clearTimeout(searching);

    let type = $('#info').getAttribute('type'),
        query = $('#search').value;

    searching = setTimeout(async() => {
        $('#results').innerHTML = '';

        await fetch(`https://api.themoviedb.org/3/search/${type}?api_key=${apikey}&query=${encodeURIComponent(query)}`)
            .then(r => r.json())
            .then(json => {
                let { results } = json,
                    valid = !!(results && results.length);

                $('#search').setAttribute('valid', valid);

                if(valid)
                    for(let index = 0, length = results.length; index < length; index++) {
                        let { title, name, id, release_date, first_air_date } = results[index];

                        $('#results').innerHTML +=
`<div>
    \u2023 <a href="?${type}=${id}">${title||name} (${(release_date||first_air_date||'N/A').slice(0,4)})</a>
</div>`;
                    }
            })
            .then(u => clearTimeout(searching));
    }, 500);
});

$('#logout').onmouseup = event => {
    SynQ.clear();

    open(location.search||'', '_self');
};