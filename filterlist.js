#!/usr/bin/env node

/**
 * Filter input lines. Output lines that contain only characters from the lower
 * part of the ASCII set on stdout (everything under 128) and any lines that
 * contain characters from 128 and higher on stderr.
 */

var readline = require('readline');

var rl = readline.createInterface({ input: process.stdin });

var i;

rl.on('line', function(line) {
  var ok = true;
  for (i = 0; i < line.length; i++) {
    if (line.charCodeAt(i) > 127) {
      ok = false;
      i = line.length;
    }
  }
  if (ok) {
    console.log(line);
  } else {
    console.error(line);
  }
});
