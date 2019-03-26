document.addEventListener("DOMContentLoaded", () => {
  const getLocationButton = document.getElementById('get-current-location');
  getLocationButton.addEventListener('click', getLocation);
})

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      let pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
    });
  } else {
    // Browser doesn't support Geolocation
    alert('Your browser doesn\'t support geolocation.')
  }
}
