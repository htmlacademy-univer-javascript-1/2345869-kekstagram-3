import { pristine } from './uploader-validator.js';

const uploaderOverlay = document.querySelector('.img-upload__form');
const uploaderElement = uploaderOverlay.querySelector('#upload-file');
const editor = uploaderOverlay.querySelector('.img-upload__overlay');
const closeButton = uploaderOverlay.querySelector('.img-upload__cancel');

const closeEditor = () => {
  editor.classList.add('hidden');
  document.body.classList.remove('modal-open');

  uploaderOverlay.reset();
};

const addListeners = () => {

  uploaderElement.addEventListener('change', () => {
    editor.classList.remove('hidden');
    document.body.classList.add('modal-open');
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      closeEditor();
    }
  });

  closeButton.addEventListener('click', () => {
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


export {addListeners};
