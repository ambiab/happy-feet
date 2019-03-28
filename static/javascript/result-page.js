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
    
];

document.addEventListener('DOMContentLoaded', function(){ 
    mockData.forEach(data => {
        const results = document.getElementById('results');

        const imageWrapper = results.appendChild(document.createElement('div'));
        imageWrapper.className = 'image-wrapper';

        const imageTag = imageWrapper.appendChild(document.createElement('img'));
        imageTag.src = data.url

        imageWrapper.addEventListener('click', function() {
            console.log('click');
        });
    });

function handleClose() {
    const popup = document.getElementById('popup');
    popup.style.opacity = '0';
    popup.style.visibility = 'hidden';
}
