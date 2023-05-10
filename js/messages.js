const uploaderOverlay = document.querySelector('.img-upload__form');

const useTemplate = (id, element) => document.querySelector(id).content.querySelector(element);

const createCloseListener = (closeFunction) => (evt) => {
  if (!(evt.key === 'Escape')) {
    return;
  }
  evt.preventDefault();
  closeFunction();
};

const showAlert = () => {
  const alert = useTemplate('#error', '.error').cloneNode(true);
  uploaderOverlay.classList.add('hidden');
  const close = createCloseListener(closeMessage);

  function closeMessage() {
    document.body.removeChild(alert);
    uploaderOverlay.classList.remove('hidden');
    document.removeEventListener('keydown', close);
  }

  alert.addEventListener('click', (evt) => {
    if (evt.target.type === 'button' || evt.target.classList.contains('error')) {
      closeMessage(alert, close);
    }
  });
  document.addEventListener('keydown', close);
  document.body.appendChild(alert);
};

const showSuccess = () => {
  const success = useTemplate('#success', '.success').cloneNode(true);
  const close = createCloseListener(closeMessage);

  function closeMessage() {
    document.body.removeChild(success);
    document.removeEventListener('keydown', close);
  }

  success.addEventListener('click', (evt) => {
    if (evt.target.type === 'button' || evt.target.classList.contains('success')) {
      closeMessage(close);
    }
  });
  document.addEventListener('keydown', close);
  document.body.appendChild(success);
};

export { showAlert, showSuccess };
