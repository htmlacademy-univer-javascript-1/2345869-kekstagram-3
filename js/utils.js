const PHOTOS_NUMBER = 12;

const checkStringLength = (string, maxLength) => string.length <= maxLength;
const getRandomNumber = (from, to) => Math.round(Math.random() * (to - from) + from);

export {PHOTOS_NUMBER, checkStringLength, getRandomNumber};
