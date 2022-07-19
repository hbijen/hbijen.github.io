window.onload = () => {
    let places = staticLoadPlaces();
    alert('places ', places.length)
    renderPlaces(places);

};

function staticLoadPlaces() {
   return [
       {
           name: 'Tiger',
           location: {
                lat: 24.817019,
               lng: 93.928186,
           }
       },
   ];
}

function renderPlaces(places) {
   let scene = document.querySelector('a-scene');

   places.forEach((place) => {
       let latitude = place.location.lat;
       let longitude = place.location.lng;

       let model = document.createElement('a-entity');
       model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
       model.setAttribute('gltf-model', './assets/Tiger.glb');
       model.setAttribute('rotation', '0 180 0');
       model.setAttribute('animation-mixer', '');
       model.setAttribute('scale', '0.5 0.5 0.5');

       model.addEventListener('loaded', () => {
           window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
       });

       scene.appendChild(model);
       alert('add model to scene')
   });
}