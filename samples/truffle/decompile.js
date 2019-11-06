
const fs = require('fs');
const yasold = require('../..');

const contractname = process.argv[2];
const contract = require('./build/contracts/' + contractname + '.json');

console.log(yasold.decompileToText(contract.bytecode.substring(2)));

