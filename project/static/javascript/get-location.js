window.onload = function() {
  $('#search-location').submit(function(e){
    e.preventDefault();
  });
}

function getLocation() {
  $('.loader').css('visibility', 'visible');

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const currentPosition = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      const dataToBeSent = {
        currentPosition: JSON.stringify(currentPosition)
      }

      $.post('/postcurrentlocation', dataToBeSent, function(data) {
        
        document.addEventListener('DOMContentLoaded', updateResultsPage(data));
      }, 'json');
    })

  } else {
    // Browser doesn't support Geolocation
    alert('Your browser doesn\'t support geolocation.')
  }
}

function searchLocation() {
  $('.loader').css('visibility', 'visible');
  
  const address = document.getElementById('location-name').value;

  const dataToBeSent = {
    address: address
  }

  $.post('/postaddress', dataToBeSent, function(data) {
    document.addEventListener('DOMContentLoaded', updateResultsPage(data));
  }, 'json');
}

function updateResultsPage(locationResp){ 
  if (locationResp) {
    $('.loader').css('visibility', 'hidden');
  }

  locationResp.forEach(data => {
      const results = document.getElementById('results');
      const popup = document.getElementById('popup');

      const imageWrapper = results.appendChild(document.createElement('div'));
      imageWrapper.className = 'image-wrapper';

      if (data[7]) {
        const imageTag = imageWrapper.appendChild(document.createElement('img'));
        imageTag.src = data[7]
        imageTag.onclick = function() {
            handleClick(data);
        };
       } else {
       const errorTag = imageWrapper.appendChild(document.createElement('p'));
       errorTag.innerText = "Image Unavailable";
       }
     });
  }

function handleClose() {
  const popup = document.getElementById('popup');
  popup.style.opacity = '0';
  popup.style.visibility = 'hidden';
}

function handleClick(data) {
  const title = document.getElementById('popup_content-title');
  const feature = document.getElementById('popup_content-feature');
  const colHeight = document.getElementById('popup_content-colheight');
  const streetmap = document.getElementById('popup_content-streepmap');

  popup.style.opacity = '0.90';
  popup.style.visibility = 'visible';

  title.innerHTML = data[0];
  feature.innerHTML = data[2];
  colHeight.innerHTML = data[1];
  streetmap.href = data[3];
}
