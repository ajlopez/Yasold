
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

function opcodeToText(opcode, opcodes) {
	var text = '';
	
	if (opcode.comments && opcode.comments.length) {
		text += '\n';
		for (var k = 0; k < opcode.comments.length; k++)
			text += '; ' + opcode.comments[k] + '\n';
	}

	if (opcode.label)
		text += '\n:' + opcode.label + '\n';
	
	text += opcode.opcode;
	
	if (opcode.target)
		text += ' ' + opcodes[opcode.target].label;
	
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
		text += opcodeToText(opcodes[k], opcodes) + '\n';
	
	return text;
}

function findAddress(address, opcodes, from, to) {
	for (var k = from; k < to; k++)
		if (opcodes[k].offset === address)
			return k;
}

function executeOpcode(opcode, stack) {
	opcode.stack = stack.slice();
	
	if (opcode.value)
		opcode.stack.push(opcode.value);
}

function execute(opcodes) {
	for (var k = 0; k < opcodes; k++)
		executeOpcode(opcodes[k], k ? opcodes[k].stack : []);
}

function analyze(bytecodes) {
	var opcodes = bc.decompile(bytecodes);
	
	execute(opcodes);

	var inits = [];
	var jumpdests = [];
	var jumps = [];
	
	for (var k = 0; k < opcodes.length; k++) {
		if (isOpCode(opcodes[k], "push1", '0x60')
			&& isOpCode(opcodes[k + 1], "push1", '0x40')
			&& isOpCode(opcodes[k + 2], "mstore"))
			inits.push({ position: k });
		
		if (isOpCode(opcodes[k], "jumpdest"))
			jumpdests.push({ position: k });
		
		if (isOpCode(opcodes[k], "jump") || isOpCode(opcodes[k], "jumpi")) {
			jumps.push({ position: k });
			
			if (isOpCode(opcodes[k - 1], "push1") || isOpCode(opcodes[k - 1], "push2"))
				jumps[jumps.length - 1].address = parseInt(opcodes[k - 1].value, 16);
		}
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
		opcodes[jumpdests[k].position].label = 'label' + (k+1);

	for (var k = 0; k < jumps.length; k++) {
		if (jumps[k].address == null)
			continue;
		
		if (inits.length > 1)
			if (jumps[k].position >= inits[1].position)
				opcodes[jumps[k].position].target = findAddress(jumps[k].address, opcodes, inits[1].position, opcodes.length)
			else
				opcodes[jumps[k].position].target = findAddress(jumps[k].address, opcodes, 0, inits[1].position);
		else
			opcodes[jumps[k].position].target = findAddress(jumps[k].address, opcodes, 0, opcodes.length);
	}
	
	return {
		opcodes: opcodes,
		inits: inits,
		jumpdest: jumpdests,
		jumps: jumps
	}
}

module.exports = {
	decompile: bc.decompile,
	decompileToText: decompileToText,
	analyze: analyze
};

