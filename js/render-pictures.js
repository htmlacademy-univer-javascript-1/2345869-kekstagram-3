import { getData } from './fetch.js';
const PHOTOS_NUMBER = 12;

const serverConnectionErr = document.querySelector('.server-connection');

const renderPictures = (usersPhotos) => {
  const picture = document.querySelector('#picture').content
    .querySelector('.picture');
  const picturesContainer = document.querySelector('.pictures');

  usersPhotos.forEach((userPhoto) => {
    const renderedElement = picture.cloneNode(true);
    renderedElement.querySelector('.picture__img').src = userPhoto.url;
    renderedElement.querySelector('.picture__likes').textContent = userPhoto.likes;
    renderedElement.querySelector('.picture__comments').textContent = userPhoto.comments;
    picturesContainer.appendChild(renderedElement);
  });
};

const dawnloadPictures = () => {
  getData((data) => {
    renderPictures(data.slice(0, PHOTOS_NUMBER));
  }, () => {
    serverConnectionErr.classList.remove('hidden');
  });
};

export {dawnloadPictures};
