const checkStringLength = (string, maxLength) => string.length <= maxLength;
const getRandomNumber = (from, to) => Math.round(Math.random() * (to - from) + from);

export {checkStringLength, getRandomNumber};
