/* global coordinates */

var $carContainer = document.querySelector('.car-container');
var $car = document.querySelector('img');

document.addEventListener('keydown', moveCar);
function moveCar(event) {
  turnRight();
  turnLeft();
  turnUp();
  turnDown();
  startCar();
}

function turnRight() {
  if (event.key !== 'ArrowRight') {
    return;
  }
  $car.className = '';
}

function turnLeft() {
  if (event.key !== 'ArrowLeft') {
    return;
  }
  $car.className = 'face-left';
}

function turnUp() {
  if (event.key !== 'ArrowUp') {
    return;
  }
  $car.className = 'face-up';
}

function turnDown() {
  if (event.key !== 'ArrowDown') {
    return;
  }
  $car.className = 'face-down';
}

function startCar() {
  if (event.key !== ' ') {
    return;
  }
  $carContainer.style.left = coordinates.x + 'px';
  $carContainer.style.top = coordinates.y + 'px';
}
