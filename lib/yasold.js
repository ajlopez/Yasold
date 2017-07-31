
var bc = require('./bytecodes');

function analyze(bytecodes) {
	var opcodes = bc.decompile(bytecodes);
	
	return {
		opcodes: opcodes
	}
}

module.exports = {
	decompile: bc.decompile,
	analyze: analyze
};

