// select pg-container and img
// const $pg = document.querySelector('.pg-container');
const $car = document.querySelector('.car-img');
let rotation = 0;

// make turning functions: L(-90deg), R (+90deg)
const rotate = function (rotation, offset) {
  let newRotation = (rotation + offset);
  newRotation = '"rotate(' + newRotation + 'deg)"';
  $car.setAttribute('transform', newRotation);
};
const turnCW = function () {
  const offset = 90;
  if (rotation === 360) {
    rotation = 0;
    rotate(rotation, offset);
  } else {
    rotate(rotation, offset);
  }
};
turnCW();
const turnCCW = function () {
  const offset = -90;
  if (rotation === 0) {
    rotation = 360;
    rotate(rotation, offset);
  } else {
    rotate(rotation, offset);
  }
};
turnCCW();
// add event listener to pg: target img, event: keydown(down-arrow), function
