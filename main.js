/* global coordinates */

var $carContainer = document.querySelector('.car-container');
var $car = document.querySelector('img');

document.addEventListener('keydown', moveCar);
function moveCar(event) {
  turnCar();
  startCar();
}

function turnCar() {
  if (event.key === 'ArrowRight') {
    $car.className = '';
  } else if (event.key === 'ArrowLeft') {
    $car.className = 'face-left';
  } else if (event.key === 'ArrowUp') {
    $car.className = 'face-up';
  } else if (event.key === 'ArrowDown') {
    $car.className = 'face-down';
  }
}

function startCar() {
  if (event.key !== ' ') {
    return;
  }
  var intervalID = setInterval(function () {
    coordinates.x = coordinates.x + 5;
    $carContainer.style.left = coordinates.x + 'px';
    $carContainer.style.top = coordinates.y + 'px';
  }, 16);
}
