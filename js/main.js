const getRandomNumber = (from, to) => Math.round(Math.random() * (to - from) + from);
const getStringLength = (strToCheck, maxLength) => strToCheck.length <= maxLength;
getRandomNumber(4, 6);
getStringLength('Кеке', 4);
getStringLength('Кек', 2);
