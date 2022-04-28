'use strict';

module.exports.getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports.shuffle = (someArray) => {
  for (let i = someArray.length - 1; i > 0; i--) {
    const randomPosition = Math.floor(Math.random() * i);
    [someArray[i], someArray[randomPosition]] = [someArray[randomPosition], someArray[i]];
  }

  return someArray;
};

/**
 * @param {Date} date
 * @return {string} // 2019-12-01 14:45:00
 */
module.exports.getFormattedDate = (date) =>
  date.toISOString().replace(/T/, ` `).replace(/\.[\s\S]*/g, ``);
