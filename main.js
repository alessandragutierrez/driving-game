/* global data */

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
    data.carOn = true;
    data.xCoordinates += 5;
    $carContainer.style.left = data.xCoordinates + 'px';
    $carContainer.style.top = data.yCoordinates + 'px';
  }, 16);
}
