
var bc = require('./bytecodes');

function addComment(opcode, comment) {
	if (!opcode.comments)
		opcode.comments = [];
	
	opcode.comments.push(comment);
}

function isOpCode(opcode, name, value) {
	if (!opcode)
		return false;
	
	if (opcode.opcode !== name)
		return false;
	
	return value == null || opcode.value === value;
}

function opcodeToText(opcode) {
	var text = '';
	
	if (opcode.comments && opcode.comments.length)
		for (var k = 0; k < opcode.comments.length; k++)
			text += '; ' + opcode.comments[k] + '\n';
			
	text += opcode.opcode;
	
	if (opcode.value)
		text += ' ' + opcode.value;
	
	if (opcode.offset != null)
		text += ' (#0x' + opcode.offset.toString(16) + ')';
	
	return text;
}

function decompileToText(bytecodes) {
	var opcodes = analyze(bytecodes).opcodes;
	
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
	
	if (inits.length)
		addComment(opcodes[inits[0].position], 'Initialization');
	if (inits.length > 1)
		addComment(opcodes[inits[1].position], 'Contract');
	
	for (var k = 0; k < jumpdests.length; k++)
		addComment(opcodes[jumpdests[k].position], 'label' + (k+1));
	
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

