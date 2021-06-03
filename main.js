var $car = document.querySelector('img');

document.addEventListener('keydown', turnCar);
function turnCar(event) {
  turnRight();
  turnLeft();
  turnUp();
  turnDown();
}

function turnRight() {
  var ArrowRight = 39;
  if (event.which !== ArrowRight) {
    return;
  }
  $car.className = '';
}

function turnLeft() {
  var ArrowLeft = 37;
  if (event.which !== ArrowLeft) {
    return;
  }
  $car.className = 'face-left';
}

function turnUp() {
  var ArrowUp = 38;
  if (event.which !== ArrowUp) {
    return;
  }
  $car.className = 'face-up';
}

function turnDown() {
  var ArrowDown = 40;
  if (event.which !== ArrowDown) {
    return;
  }
  $car.className = 'face-down';
}
