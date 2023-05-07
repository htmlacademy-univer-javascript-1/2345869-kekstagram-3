const getRandomNumber = (from, to) => Math.round(Math.random() * (to - from) + from);

const getNewPhoto = (id) => ({
  id: id,
  url: `photos/${id}.jpg`,
  description: 'Hello there, this is my photo',
  likes: getRandomNumber(15, 200),
  comments: getRandomNumber(0, 200)
});

const getPhotosArray = (numberOfPhotos) => {
  const result = [];
  for (let i = 1; i <= numberOfPhotos; i++) {
    result.push(getNewPhoto(i));
  }
  return result;
};
getPhotosArray(25);
