
function decompileOpCode(text, offset) {
	var opcode = text.substring(offset, offset + 2);

	if (opcode === '60')
		return {
			opcode: 'push1',
			value: '0x' + text.substring(offset + 2, offset + 4),
			length: 2
		}
		
	if (opcode === '52')
		return {
			opcode: 'mstore',
			length: 1
		}

	if (opcode === '34')
		return {
			opcode: 'callvalue',
			length: 1
		}

	if (opcode === '15')
		return {
			opcode: 'iszero',
			length: 1
		}

	if (opcode === '57')
		return {
			opcode: 'jumpi',
			length: 1
		}

	if (opcode === '5b')
		return {
			opcode: 'jumpdest',
			length: 1
		}

	if (opcode === 'f3')
		return {
			opcode: 'return',
			length: 1
		}

	if (opcode === 'fe')
		return {
			opcode: 'throw',
			length: 1
		}

	if (opcode === '80')
		return {
			opcode: 'dup1',
			length: 1
		}

	if (opcode === '90')
		return {
			opcode: 'swap1',
			length: 1
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