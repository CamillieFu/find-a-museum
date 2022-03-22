import mapboxgl from 'mapbox-gl';

// elements
// const paragraph = document.querySelector('p');

// display map
const showMap = (coordinates) => {
  mapboxgl.accessToken = 'pk.eyJ1IjoiY2FlMjI0IiwiYSI6ImNrd2x5MXZyeDA2Z2YydW8yYzh1ZWF0bDIifQ.mpwuLzHJ0OQINNb38nlgAw';
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: coordinates,
    zoom: 12
  });
  new mapboxgl.Marker()
    .setLngLat(coordinates)
    .addTo(map);
};

const submitButton = document.querySelector('#submit');
submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  const coordinates = document.querySelector('#text').value;
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/museum.json?types=poi&proximity=-74.70850,40.78375&limit=5&access_token=pk.eyJ1IjoiY2FlMjI0IiwiYSI6ImNrd2x5MXZyeDA2Z2YydW8yYzh1ZWF0bDIifQ.mpwuLzHJ0OQINNb38nlgAw`;
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      // paragraph.insertAdjacentHTML('beforeend', `<span id="coordinates">[${coordinates}]</span>`);
      // showMap(coordinates);
    });
});

fetch(url)
  .then(response => response.json())
  .then((data) => {
    console.log(data.features);
    console.log(data);
});
