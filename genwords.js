'use strict';

function genWords(list, nrWords) {
  if (!window.crypto || typeof window.crypto.getRandomValues !== 'function') {
    throw new Error('Your browser does not support the Web Cryptography API, please use a modern browser like Firefox, Chrome or Safari');
  }

  if (list.length > 65536) {
    throw new Error('list can not contain more than 65536 entries');
  }

  var bitsNeededPerWord = Math.ceil(Math.log2(list.length));

  var randomness = new Uint16Array(nrWords);
  window.crypto.getRandomValues(randomness);

  var chosen = [];
  for (var i = 0; i < nrWords; i++) {
    chosen.push(list[randomness[i] % list.length]);
  }

  return chosen;
}
