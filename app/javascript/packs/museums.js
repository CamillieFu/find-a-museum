require("dotenv").config()
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const findMuseum = () => {
  const mapElement = document.getElementById('map');
  mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;
  console.log(mapboxgl.accessToken);
  const submitButton = document.querySelector('#submit');
  submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    const coordinates = document.querySelector('#text').value;
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/museum.json?types=poi&proximity=${coordinates}&limit=5&access_token=${mapboxgl.accessToken}`;
    const museumObject = {};
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        data.features.forEach((feature) => {
          const postalCode = feature.context[0].id
          const museum = feature.place_name
          museumObject[postalCode.substr(9, postalCode.length)] = museum
        });
      });
  });
}

export { findMuseum };
console.log('poop')
