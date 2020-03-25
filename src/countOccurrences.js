'use strict';

/**
 * Implement countOccurrences function:
 *
 * It takes a phrase and a letter and calculates the number of times
 * the letter appears in the phrase. The function is case insensitive.
 *
 * countOccurrences('letter', 't') === 2
 * countOccurrences('abc', 'a') === 1
 * countOccurrences('abc', 'd') === 0
 * countOccurrences('ABC', 'a') === 1
 *
 * @param {string} phrase
 * @param {string} letter
 *
 * @return {number}
 *
 */
function countOccurrences(phrase, letter) {
  let arr = [];
  // eslint-disable-next-line no-unused-vars
  let counter = 0;
  const newphrase = phrase.toLowerCase();

  arr = newphrase.split('');

  for (let i = 0; i < arr.length; i++) {
    // eslint-disable-next-line eqeqeq
    if (arr[i] == letter) {
      counter++;
    }
  }

  return counter;
}

module.exports = countOccurrences;
