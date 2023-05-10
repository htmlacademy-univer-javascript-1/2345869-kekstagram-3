const uploaderOverlay = document.querySelector('.img-upload__form');

const pristine = new Pristine(uploaderOverlay, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'form--invalid',
  successClass: 'form--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'form__error',
}, true);

export {pristine};
