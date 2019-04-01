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

  title.innerHTML = data[0];
  feature.innerHTML = data[1];
}
