const uploaderOverlay = document.querySelector('.img-upload__form');

const pristine = new Pristine(uploaderOverlay, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'form--invalid',
  successClass: 'form--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'form__error',
});

const validateComment = (value) => value.length >= 20 && value.length <= 140;

pristine.addValidator(
  uploaderOverlay.querySelector('.text__description'),
  validateComment,
  'От 20 до 140 символов'
);

export {pristine};
