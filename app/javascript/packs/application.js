// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
console.log('hello')

import Rails from "@rails/ujs";
import Turbolinks from "turbolinks";
import * as ActiveStorage from "@rails/activestorage";
import "channels";
import 'bootstrap';
import 'dotenv/config';

Rails.start()
Turbolinks.start()
ActiveStorage.start()

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
