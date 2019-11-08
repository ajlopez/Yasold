
const fs = require('fs');
const path = require('path');

const yasold = require('../..');

const contractname = process.argv[2];
const contractpath = process.argv[3] || '.';

const jsonfilename = path.resolve(path.join(contractpath, 'build/contracts', contractname + '.json'));

const contract = require(jsonfilename);

console.log(yasold.decompileToText(contract.bytecode.substring(2)));

