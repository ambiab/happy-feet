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

      $.post("/postcurrentlocation", {
        currentPosition: JSON.stringify(currentPosition)
      });

    });
  } else {
    // Browser doesn't support Geolocation
    alert('Your browser doesn\'t support geolocation.')
  }
}

function searchLocation() {
  const address = document.getElementById('location-name').value;

  $.post("/postaddress", {
    address: address
  });
}
