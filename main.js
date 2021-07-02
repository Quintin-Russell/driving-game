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

// functions that incriment carro.x & .y and set intervals
function plusX() {
  carro.x += 10;
  int = setInterval(function () {
    $car.style.left = (carro.x + 'px');
  }, 16);
}
function minusX() {
  carro.x -= 10;
  int = setInterval(function () {
    $car.style.left = (carro.x + 'px');
  }, 16);
}
function plusY() {
  carro.y += 10;
  int = setInterval(function () {
    $car.style.up = (carro.y + 'px');
  }, 16);
}
function minusY() {
  carro.y -= 10;
  int = setInterval(function () {
    $car.style.up = (carro.y + 'px');
  }, 16);
}

// function that clears interval
function clear() {
  clearInterval(int);
}

// make turning functions: L(-90deg), R (+90deg)
const turnCW = function () {
  if (carro.rotation === 0) {
    $car.setAttribute('class', 'rotate90');
    carro.rotation += offset;
    clear();
    minusY();
  } else if (carro.rotation === 90) {
    $car.setAttribute('class', 'rotate180');
    carro.rotation += offset;
    clear();
    minusX();
  } else if (carro.rotation === 180) {
    $car.setAttribute('class', 'rotate270');
    carro.rotation += offset;
    clear();
    plusY();
  } else if (carro.rotation === 270) {
    $car.setAttribute('class', 'rotate0');
    carro.rotation = 0;
    clear();
    plusX();
  }
};

const turnCCW = function () {
  if (carro.rotation === 0) {
    $car.setAttribute('class', 'rotate270');
    carro.rotation = 270;
    clear();
    plusY();
  } else if (carro.rotation === 90) {
    $car.setAttribute('class', 'rotate0');
    carro.rotation -= offset;
    clear();
    plusX();
  } else if (carro.rotation === 180) {
    $car.setAttribute('class', 'rotate90');
    carro.rotation -= offset;
    clear();
    minusY();
  } else if (carro.rotation === 270) {
    $car.setAttribute('class', 'rotate180');
    carro.rotation -= offset;
    clear();
    minusX();
  }
};

// add event listener to pg: target img, event: keydown(down-arrow), function
document.addEventListener('keydown', function (e) {
  if ((event.code === 'ArrowRight') || (event.code === 'ArrowLeft')) {
    if (event.code === 'ArrowLeft') {
      clear();
      turnCCW();
    } else {
      clear();
      turnCW();
    }
  }
});

// add eventlistener to listen for space bar and start interval
document.addEventListener('keydown', function (e) {
  if (event.code === 'Space') {
    if (carro.moving === 0) {
      plusX();
    } else {
      carro.moving = 0;
      clear();
    }
  }
});
