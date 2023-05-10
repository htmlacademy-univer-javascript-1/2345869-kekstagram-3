import { sendData } from './fetch.js';
import { showAlert, showSuccess } from './messages.js';
import { clearEffects } from './uploader-effects.js';
import { resetScale } from './uploader-scale-controller.js';
import { pristine } from './uploader-validator.js';

const uploaderOverlay = document.querySelector('.img-upload__form');
const uploaderElement = uploaderOverlay.querySelector('#upload-file');
const editor = uploaderOverlay.querySelector('.img-upload__overlay');
const exitButton = uploaderOverlay.querySelector('.img-upload__cancel');
const submitButton = uploaderOverlay.querySelector('.img-upload__submit');

const disableSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Сохраняю...';
};

const enableSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Сохранить';
};

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

  uploaderOverlay.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      closeEditor();
    }
  });

  exitButton.addEventListener('click', () => {
    closeEditor();
  });

  uploaderOverlay.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (!pristine.validate()) {
      return;
    }
    disableSubmitButton();
    sendData(() => {
      showSuccess();
      enableSubmitButton();
      closeEditor();
    }, () => {
      showAlert();
      enableSubmitButton();
    },
    new FormData(evt.target)
    );
  });
};


export {addUploaderListeners};
