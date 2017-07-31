
var opcodes = {};

function toHex(value) {
	var hex = value.toString(16);
	
	if (hex.length % 2)
		hex = '0' + hex;
		
	return hex;
}

function makeOpCode(opcode) {
	return function () {
		return {
			opcode: opcode,
			length: 1
		}
	}
}

opcodes['00'] = makeOpCode('stop');
opcodes['01'] = makeOpCode('add');
opcodes['02'] = makeOpCode('mul');
opcodes['03'] = makeOpCode('sub');
opcodes['04'] = makeOpCode('div');
opcodes['15'] = makeOpCode('iszero');
opcodes['34'] = makeOpCode('callvalue');
opcodes['39'] = makeOpCode('codecopy');
opcodes['50'] = makeOpCode('pop');
opcodes['52'] = makeOpCode('mstore');
opcodes['57'] = makeOpCode('jumpi');
opcodes['5b'] = makeOpCode('jumpdest');
opcodes['f3'] = makeOpCode('return');
opcodes['fe'] = makeOpCode('throw');

function makeOpCodes(name, number, init) {
	for (var k = 1; k <= number; k++) {
		opcode = name + k;
		hexa = toHex(init + k - 1);
		opcodes[hexa] = makeOpCode(opcode);
	}
}

makeOpCodes('dup', 16, 8 * 16);
makeOpCodes('swap', 16, 9 * 16);

function decompileOpCode(text, offset) {
	var opcode = text.substring(offset, offset + 2);
	
	if (opcodes[opcode])
		return opcodes[opcode]();

	if (opcode === '60')
		return {
			opcode: 'push1',
			value: '0x' + text.substring(offset + 2, offset + 4),
			length: 2
		}
}

function decompile(text) {
	var ops = [];
	var l = text.length;
	var p = 0;
	
	while (p < l) {
		var op = decompileOpCode(text, p);
		ops.push(op);
		p += op.length * 2;
	}
	
	return ops;
}

module.exports = {
	decompile: decompile
}