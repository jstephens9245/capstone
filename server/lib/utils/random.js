'use strict';

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
 *
 * @returns {String}
 */
function randomString(min, max) {
  const charCodeRange = [ 48, 90 ];
  const length = typeof max === 'number' ? randomNumber(min, max) : min;
  const string = '';

  while (string.length < length) {
    string += String.fromCharCode(randomNumber(charCodeRange[0], charCodeRange[1]));
  }

  return string;
}
