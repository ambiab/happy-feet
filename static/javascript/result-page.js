const mockData = [
    { 
        'name': 'Ben Chonzie', 
        'feature': 'cairn/shelter'
    },
    { 
        'name': 'Creagan na Beinne', 
        'feature': 'cairn'
    },
    { 
        'name': 'Creag Uchdag', 
        'feature': 'trig point'
    },
    { 
        'name': 'Auchnafree Hill', 
        'feature': 'small cairn'
    },
    { 
        'name': 'Shee of Ardtalnaig', 
        'feature': 'no feature'
    },
    { 
        'name': 'Beinn na Gainimh', 
        'feature': 'no feature: ground 20m WNW of cairn'
    },
    { 
        'name': 'Meall Buidhe', 
        'feature': 'rock 10m N of cairn'
    },
    { 
        'name': 'Creag Ruadh', 
        'feature': 'smooth rock outcrop 15m W of cairn'
    },
    { 
        'name': 'Meall Dearg', 
        'feature': 'trig point'
    },
    { 
        'name': 'Creag Each', 
        'feature': 'small cairn on rocky prominence'
    },
];


document.addEventListener('DOMContentLoaded', function(){ 
    mockData.forEach(data => {
        
        const listings = document.getElementById('listings');

        function setActive(element) {
            // this is to loop through all the item elements,
            // and remove any 'active' class name
            let siblings = listings.getElementsByClassName('item');
            for (let i = 0; i < siblings.length; i++) {
                siblings[i].className = siblings[i].className
                .replace(/active/, '').replace(/\s\s*$/, '');
            }
        
            element.className += ' active';
        }
    
        const item = listings.appendChild(document.createElement('div'));
        item.className = 'item';
    
        const link = item.appendChild(document.createElement('a'));
        link.href = '#';
        link.className = 'title';

        link.innerHTML = data.name;
        link.innerHTML += '<br /><small class="quiet">' + data.feature + '</small>';

        link.onclick = function() {
            setActive(item);
            get_photos(data.name);
        }     
    });
});

function get_photos(name) {
    const settings = {
        "async": true,
        "crossDomain": true,
        // "url": "https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=96c5a95ca1319d7a14dc65975b456376&gallery_id=66911286-72157647277042064&format=json&nojsoncallback=1",
        "url": `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=96c5a95ca1319d7a14dc65975b456376&text=${name}&tags=mountain&format=json&nojsoncallback=1`,
        "method": "GET",
        "headers": {}
    }
    
    $.ajax(settings).done(function (data) {
        const imageData = data.photos.photo[0];
        const farmId = imageData.farm;
        const serverId = imageData.server;
        const id = imageData.id;
        const secret = imageData.secret;

        $("#result").append('<img src="https://farm' + farmId + '.staticflickr.com/' + serverId + '/' + id + '_' + secret + '.jpg"/>');
    });
}
