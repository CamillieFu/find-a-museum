import mapboxgl from 'mapbox-gl';
require("dotenv").config()
// elements
const paragraph = document.querySelector('p');
console.log('hello')

// display map
const showMap = (coordinates) => {
  mapboxgl.accessToken = token;
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

// const submitButton = document.querySelector('#submit');
// submitButton.addEventListener('click', (event) => {
//   event.preventDefault();
//   const coordinates = document.querySelector('#text').value;
//   const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/museum.json?types=poi&proximity=${coordinates}&limit=5&access_token=${process.env.MAPBOX_API_KEY}`;
//   fetch(url)
//     .then(response => response.json())
//     .then((data) => {
//       console.log(data);
//       data.features.forEach((feature) => {
//         const autoComp = `
//         <span>${feature.place_name}</span>`;
//         paragraph.insertAdjacentHTML("beforeend", autoComp);
//       });
//       // showMap(coordinates);
//     });
// });

const submitButton = document.querySelector('#submit');
submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  const coordinates = document.querySelector('#text').value;
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/museum.json?types=poi&proximity=${coordinates}&limit=5&access_token=${process.env.MAPBOX_API_KEY}`;
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      data.features.forEach((feature) => {
        const postalCode = feature.context[0].id
        const museum = feature.place_name
        console.log(museum)
        console.log(postalCode.substr(9, postalCode.length))
      });
    });
});
