import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiY2FlMjI0IiwiYSI6ImNreDM5ZTY1djAxYTYyc3BrNGtzNDkzMDQifQ.1voLD-RgYWcBaX3t6FCa-Q`';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v9',
  center: [-0.077, 51.533],
  zoom: 12
});

new mapboxgl.Marker()
  .setLngLat([-0.077, 51.533])
  .addTo(map);
