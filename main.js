// set carro object
const carro = {
  rotation: 0,
  x: null,
  y: null,
  moving: 0
};
let int;

// select pg-container and img
const $car = document.querySelector('#car');
const offset = 90;

// make turning functions: L(-90deg), R (+90deg)
const turnCW = function () {
  if (carro.rotation === 0) {
    $car.setAttribute('class', 'rotate90');
    carro.rotation += offset;
  } else if (carro.rotation === 90) {
    $car.setAttribute('class', 'rotate180');
    carro.rotation += offset;
  } else if (carro.rotation === 180) {
    $car.setAttribute('class', 'rotate270');
    carro.rotation += offset;
  } else if (carro.rotation === 270) {
    $car.setAttribute('class', 'rotate0');
    carro.rotation = 0;
  }
};

const turnCCW = function () {
  if (carro.rotation === 0) {
    $car.setAttribute('class', 'rotate270');
    carro.rotation = 270;
  } else if (carro.rotation === 90) {
    $car.setAttribute('class', 'rotate0');
    carro.rotation -= offset;
  } else if (carro.rotation === 180) {
    $car.setAttribute('class', 'rotate90');
    carro.rotation -= offset;
  } else if (carro.rotation === 270) {
    $car.setAttribute('class', 'rotate180');
    carro.rotation -= offset;
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

// add eventlistener to listen for space bar and start interval
document.addEventListener('keydown', function (e) {
  if (event.code === 'Space') {
    if (carro.moving === 0) {
      int = setInterval(function () {
        carro.moving = 1;
        carro.x += 10;
        $car.style.left = (carro.x + 'px');
      }, 16);
    } else {
      carro.moving = 0;
      clearInterval(int);
    }
  }
});
