const renderPictures = (usersPhotos) => {
  const picture = document.querySelector('#picture').content
    .querySelector('.picture');
  const picturesContainer = document.querySelector('.pictures');

  usersPhotos.forEach((userPhoto) => {
    const renderedElement = picture.cloneNode(true);
    renderedElement.querySelector('.picture__img').src = userPhoto.url;
    renderedElement.querySelector('.picture__likes').texContent = userPhoto.likes;
    renderedElement.querySelector('.picture__comments').texContent = userPhoto.comments;
    picturesContainer.appendChild(renderedElement);
  });
};
//Задание 7 часть 2
export {renderPictures};
