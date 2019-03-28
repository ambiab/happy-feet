const mockData = [
    { 
        'name': 'Ben Chonzie', 
        'feature': 'cairn/shelter',
        'url': "https://farm5.staticflickr.com/4843/45846748091_1b43374c30.jpg"
    },
    { 
        'name': 'Creagan na Beinne', 
        'feature': 'cairn',
        'url': "https://farm8.staticflickr.com/7849/46005479304_20bc8dd539.jpg"
    },
    { 
        'name': 'Creag Uchdag', 
        'feature': 'trig point',
        'url': "https://farm8.staticflickr.com/7644/27713743985_63f01a3757.jpg"
    },
    { 
        'name': 'Auchnafree Hill', 
        'feature': 'small cairn',
        'url': "https://farm3.staticflickr.com/2836/11666608244_ec8a8e8050.jpg"
    },
    { 
        'name': 'Shee of Ardtalnaig', 
        'feature': 'no feature',
        'url': "https://farm8.staticflickr.com/7913/46860938251_e1088479d7.jpg"
    },
    { 
        'name': 'Beinn na Gainimh', 
        'feature': 'no feature: ground 20m WNW of cairn',
        'url': "https://farm2.staticflickr.com/1800/29014532967_2c1b6fcd10.jpg"
    },
    { 
        'name': 'Meall Buidhe', 
        'feature': 'rock 10m N of cairn',
        'url': "https://farm4.staticflickr.com/3260/2420663941_f2c4b038ae.jpg"
    },
    { 
        'name': 'Creag Ruadh', 
        'feature': 'smooth rock outcrop 15m W of cairn',
        'url': "https://farm4.staticflickr.com/3260/2420663941_f2c4b038ae.jpg"
    },
    { 
        'name': 'Meall Dearg', 
        'feature': 'trig point',
        'url': "https://farm2.staticflickr.com/1800/29014532967_2c1b6fcd10.jpg"
    },
    { 
        'name': 'Creag Each', 
        'feature': 'small cairn on rocky prominence',
        'url': "https://farm2.staticflickr.com/1800/29014532967_2c1b6fcd10.jpg"
    },
];

document.addEventListener('DOMContentLoaded', function(){ 
    mockData.forEach(data => {
        
        const listings = document.getElementById('listings');
        const results = document.getElementById('results');

        function setActive(element, url) {
            // this is to loop through all the item elements,
            // and remove any 'active' class name
            let siblings = listings.getElementsByClassName('item');
            for (let i = 0; i < siblings.length; i++) {
                siblings[i].className = siblings[i].className
                .replace(/active/, '').replace(/\s\s*$/, '');
            }
            element.className += ' active';

            let imagetag = results.getElementsByClassName('image-tag')[0];
            imagetag.style.backgroundImage = `url(${url})`
        }
    
        const item = listings.appendChild(document.createElement('div'));
        item.className = 'item';
    
        const link = item.appendChild(document.createElement('a'));
        link.href = '#';
        link.className = 'title';

        link.innerHTML = data.name;
        link.innerHTML += '<br /><small class="quiet">' + data.feature + '</small>';

        link.onclick = function() {
            setActive(item, data.url);
        }
    });
});

// function get_photos(name) {
//     const settings = {
//         "async": true,
//         "crossDomain": true,
//         // "url": "https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=96c5a95ca1319d7a14dc65975b456376&gallery_id=66911286-72157647277042064&format=json&nojsoncallback=1",
//         "url": `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=96c5a95ca1319d7a14dc65975b456376&text=${name}&tags=mountain&format=json&nojsoncallback=1`,
//         "method": "GET",
//         "headers": {}
//     }
    
//     $.ajax(settings).done(function (data) {
//         const imageData = data.photos.photo[0];
//         const farmId = imageData.farm;
//         const serverId = imageData.server;
//         const id = imageData.id;
//         const secret = imageData.secret;

//         console.log('<img src="https://farm' + farmId + '.staticflickr.com/' + serverId + '/' + id + '_' + secret + '.jpg"/>')

//         $("#result").append('<img src="https://farm' + farmId + '.staticflickr.com/' + serverId + '/' + id + '_' + secret + '.jpg"/>');
//     });
// }
