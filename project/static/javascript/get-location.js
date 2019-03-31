window.onload = function() {

  $('#search-location').submit(function(e){
    e.preventDefault();
  });
}

function getLocation() {
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
  const address = document.getElementById('location-name').value;

  $.post('/postaddress', {
    address: address
  });
}

function updateResultsPage(locationResp){ 
  locationResp.forEach(data => {
      const results = document.getElementById('results');
      const popup = document.getElementById('popup');

      const imageWrapper = results.appendChild(document.createElement('div'));
      imageWrapper.className = 'image-wrapper';

      const imageTag = imageWrapper.appendChild(document.createElement('img'));
      imageTag.src = data.url

      imageTag.onclick = function() {
          handleClick(data);
      };
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

  popup.style.opacity = '0.90';
  popup.style.visibility = 'visible';

  title.innerHTML = data.name;
  feature.innerHTML = data.feature;
}
