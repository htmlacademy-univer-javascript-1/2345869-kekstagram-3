import { clearEffects } from './uploader-effects.js';
import { resetScale } from './uploader-scale-controller.js';
import { pristine } from './uploader-validator.js';

const uploaderOverlay = document.querySelector('.img-upload__form');
const uploaderElement = uploaderOverlay.querySelector('#upload-file');
const editor = uploaderOverlay.querySelector('.img-upload__overlay');
const exitButton = uploaderOverlay.querySelector('.img-upload__cancel');

const closeEditor = () => {
  editor.classList.add('hidden');
  document.body.classList.remove('modal-open');

  uploaderOverlay.reset();
  resetScale();
  clearEffects();
};

const addUploaderListeners = () => {
  uploaderElement.addEventListener('change', () => {
    editor.classList.remove('hidden');
    document.body.classList.add('modal-open');
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      closeEditor();
    }
  });

  exitButton.addEventListener('click', () => {
    closeEditor();
  });

  uploaderOverlay.addEventListener('submit', (evt) => {
    const isValid = pristine.validate();
    if (!isValid) {
      evt.preventDefault();
    }

    //closeEditor();
  });
};


export {addUploaderListeners};
