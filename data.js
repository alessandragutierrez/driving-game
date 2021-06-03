/* exported coordinates */

var coordinates = {
  x: 0,
  y: 0
};

var previousCoordinatesJSON = localStorage.getItem('car-data');
if (previousCoordinatesJSON !== null) {
  coordinates = JSON.parse(previousCoordinatesJSON);
}

window.addEventListener('beforeunload', function (event) {
  var coordinatesJSON = JSON.stringify(coordinates);
  localStorage.setItem('car-data', coordinatesJSON);
});
