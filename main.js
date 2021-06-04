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
    $car.className = 'face-right';
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
      data.xCoordinates += 5;
      $carContainer.style.left = data.xCoordinates + 'px';
      $carContainer.style.top = data.yCoordinates + 'px';
    }, 16);
    data.carOn = true;
  } else {
    clearInterval(intervalID);
    data.carOn = false;
  }
}

function steerCar() {
  if ($car.className === 'face-right') {
    data.xCoordinates += 5;
    $carContainer.style.left = data.xCoordinates + 'px';
  } else if ($car.className === 'face-left') {
    data.xCoordinates = data.xCoordinates - 5;
    $carContainer.style.left = data.xCoordinates + 'px';
  } else if ($car.className === 'face-up') {
    data.yCoordinates = data.yCoordinates - 5;
    $carContainer.style.top = data.yCoordinates + 'px';
  } else if ($car.className === 'face-down') {
    data.yCoordinates += 5;
    $carContainer.style.top = data.yCoordinates + 'px';
  }
}
