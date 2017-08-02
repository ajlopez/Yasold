
var bc = require('./bytecodes');

function isOpCode(opcode, name, value) {
	if (!opcode)
		return false;
	
	if (opcode.opcode !== name)
		return false;
	
	return value == null || opcode.value === value;
}

function analyze(bytecodes) {
	var opcodes = bc.decompile(bytecodes);
	var inits = [];
	var jumpdests = [];
	
	for (var k = 0; k < opcodes.length; k++) {
		if (isOpCode(opcodes[k], "push1", '0x60')
			&& isOpCode(opcodes[k + 1], "push1", '0x40')
			&& isOpCode(opcodes[k + 2], "mstore"))
			inits.push({ position: k });
		if (isOpCode(opcodes[k], "jumpdest"))
			jumpdests.push({ position: k });
	}	
	
	return {
		opcodes: opcodes,
		inits: inits,
		jumpdest: jumpdests
	}
}

module.exports = {
	decompile: bc.decompile,
	analyze: analyze
};

