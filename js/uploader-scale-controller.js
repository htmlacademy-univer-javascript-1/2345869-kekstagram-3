const imagePreview = document.querySelector('.img-upload__preview').children[0];
const scaleElement = document.querySelector('.img-upload__scale');
const reducer = scaleElement.querySelector('.scale__control--smaller');
const magnifier = scaleElement.querySelector('.scale__control--bigger');
const valueElement = scaleElement.querySelector('.scale__control--value');


const config = {
  min: 25,
  max: 100,
};
let newScale = config.max;
valueElement.value = `${config.max}%`;

const resetScale = () => {
  valueElement.value = `${config.max}%`;
  valueElement.value = '100%';
  newScale = config.max;
  imagePreview.style.transform = 'scale(1)';
};

const setScale =  (scale) => {
  valueElement.value = `${scale}%`;
  imagePreview.style.transform = `scale(${scale / config.max})`;
};

reducer.addEventListener('click', () => {
  if (newScale > config.min) {
    newScale = newScale - config.min;
  }
  setScale(newScale);
});

magnifier.addEventListener('click', () => {
  if (newScale < config.max) {
    newScale = newScale + config.min;
  }
  setScale(newScale);
});

export {resetScale};
