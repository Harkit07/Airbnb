mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: "map", // container ID
  // Choose form Mapbox's core styles, or make your own style with Mopbox Studio
  style: "mapbox://styles/mapbox/streets-v12", // style URL
  center: coordinates, // listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 9, // starting zoom
});

const marker = new mapboxgl.Marker({ color: "red" })
  .setLngLat(coordinates) //Listing.geometry.coordinates
  .setPopup(new mapboxgl.Popup({ offset: 25 }))
  .addTo(map);
