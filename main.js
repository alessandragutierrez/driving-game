var $car = document.querySelector('img');

document.addEventListener('keydown', turnCar);
function turnCar(event) {
  turnRight();
  turnLeft();
  turnUp();
  turnDown();
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
