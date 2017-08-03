
var fs = require('fs');
var yasold = require('../..');

var text = fs.readFileSync(process.argv[2]).toString().trim();

console.log(yasold.decompileToText(text));

