// select pg-container and img
const $car = document.querySelector('#car');
let rotation = 0;
const offset = 90;

// make turning functions: L(-90deg), R (+90deg)
const turnCW = function () {
  if (rotation === 0) {
    $car.setAttribute('class', 'rotate90');
    rotation += offset;
  } else if (rotation === 90) {
    $car.setAttribute('class', 'rotate180');
    rotation += offset;
  } else if (rotation === 180) {
    $car.setAttribute('class', 'rotate270');
    rotation += offset;
  } else if (rotation === 270) {
    $car.setAttribute('class', 'rotate0');
    rotation = 0;
  }
};

const turnCCW = function () {
  if (rotation === 0) {
    $car.setAttribute('class', 'rotate270');
    rotation = 270;
  } else if (rotation === 90) {
    $car.setAttribute('class', 'rotate0');
    rotation -= offset;
  } else if (rotation === 180) {
    $car.setAttribute('class', 'rotate90');
    rotation -= offset;
  } else if (rotation === 270) {
    $car.setAttribute('class', 'rotate180');
    rotation -= offset;
  }
};

// add event listener to pg: target img, event: keydown(down-arrow), function
document.addEventListener('keydown', function (e) {
  if ((event.code === 'ArrowRight') || (event.code === 'ArrowLeft')) {
    if (event.code === 'ArrowLeft') {
      turnCCW();
    } else {
      turnCW();
    }
  }
});
