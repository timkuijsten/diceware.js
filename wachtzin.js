'use strict';

var chosen;

var show = document.getElementById('passphrase');
var bnew = document.getElementById('gennew');
var textNode = document.createTextNode(' ');
show.appendChild(textNode);

var nrWords = 6;

function run() {
  try {
    chosen = genWords(list, nrWords);
  } catch(err) {
    alert(err);
    console.error(err);
    throw new Error(err);
  }

  textNode.data = chosen.join(' ');
}

bnew.addEventListener('click', run);
run();

var bitsPerWord = Math.log2(list.length);
var bits = bitsPerWord * nrWords;

document.getElementById('wordkeyspace').appendChild(document.createTextNode(list.length + ' (' + Math.round(bitsPerWord) + ' bit)'));
document.getElementById('phrasekeyspace').appendChild(document.createTextNode('ruim ' + Math.floor(bits) + ' bit'));
