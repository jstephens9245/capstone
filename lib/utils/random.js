'use strict';

const rgbtohex = require('rgb-hex');

/**
 * Helper function that returns a random Integer within the provided range.
 *
 * @arg {Integer} min The start of the desired range
 * @arg {Integer} max The end of the desired range
 * @arg {Boolean=true} inclusive Determines whether or not to be inclusive
 *                               at the maximum of the range.
 *
 * @returns {Integer}
 */
function randomNumber(min, max, inclusive = true) {
  return Math.floor(
      Math.random() * (min - max) + (inclusive ? max : 0)
  );
}

/**
 * Helper function that returns a random alphanumeric string with a
 * length within the range provided.
 *
 * @arg {Integer} min The minimum length of the random string
 * @arg {Integer} max The maximum length of the random string. If this argument
 *                    is excluded the string length will match the `min` argument.
 * @arg {String} chars A string containing the characters you want to limit the string to.
 *
 * @returns {String}
 */
function randomString(min, max, chars) {
  const charCodeRange = [ 48, 90 ];
  const length = typeof max === 'number' ? randomNumber(min, max) : min;
  let string = '';

  while (string.length < length) {
    if (chars) {
      string += chars[randomNumber(0, chars.length)];
    } else {
      string += String.fromCharCode(randomNumber(charCodeRange[0], charCodeRange[1]));
    }
  }

  return string;
}

/**
 * Helper function that returns a random color in hex format.
 * @returns {String}
 */
function randomColor() {
  return rgbtohex(
    randomNumber(0, 255),
    randomNumber(0, 255),
    randomNumber(0, 255)
  );
}

module.exports = {
  randomNumber, randomString, randomColor
};
