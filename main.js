/* global data */

var $carContainer = document.querySelector('.car-container');
var $car = document.querySelector('img');
var intervalID;

document.addEventListener('keydown', moveCar);
function moveCar(event) {
  turnCar();
  startAndStopCar();
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

function startAndStopCar() {
  if (event.key !== ' ') {
    return;
  }
  if (data.carOn === false) {
    intervalID = setInterval(function () {
      data.carOn = true;
      data.xCoordinates += 5;
      $carContainer.style.left = data.xCoordinates + 'px';
      $carContainer.style.top = data.yCoordinates + 'px';
    }, 16);
  } else {
    clearInterval(intervalID);
    data.carOn = false;
  }
}
