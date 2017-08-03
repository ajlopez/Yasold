
var bc = require('./bytecodes');

function isOpCode(opcode, name, value) {
	if (!opcode)
		return false;
	
	if (opcode.opcode !== name)
		return false;
	
	return value == null || opcode.value === value;
}

function opcodeToText(opcode) {
	var text = opcode.opcode;
	
	if (opcode.value)
		text += ' ' + opcode.value;
	
	if (opcode.offset != null)
		text += ' (#0x' + opcode.offset.toString(16) + ')';
	
	return text;
}

function decompileToText(bytecodes) {
	var opcodes = bc.decompile(bytecodes);
	
	var text = '';
	
	for (var k = 0; k < opcodes.length; k++)
		text += opcodeToText(opcodes[k]) + '\n';
	
	return text;
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
	
	if (inits.length > 1) {
		var initoffset = opcodes[inits[1].position].offset;
		
		for (var k = inits[1].position; k < opcodes.length; k++)
			opcodes[k].offset -= initoffset;
	}
	
	return {
		opcodes: opcodes,
		inits: inits,
		jumpdest: jumpdests
	}
}

module.exports = {
	decompile: bc.decompile,
	decompileToText: decompileToText,
	analyze: analyze
};

