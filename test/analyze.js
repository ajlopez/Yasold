
var yasold = require('..');

exports['analyze with opcodes'] = function (test) {
	var result = yasold.analyze('6060604052');
	
	test.ok(result);
	test.ok(result.opcodes);
	test.ok(Array.isArray(result.opcodes));
	test.equal(result.opcodes.length, 3);
	
	test.equal(result.opcodes[0].opcode, 'push1');
	test.equal(result.opcodes[0].value, '0x60');
	test.equal(result.opcodes[0].offset, 0);
	
	test.equal(result.opcodes[1].opcode, 'push1');
	test.equal(result.opcodes[1].value, '0x40');
	test.equal(result.opcodes[1].offset, 2);
	
	test.equal(result.opcodes[2].opcode, 'mstore');
	test.equal(result.opcodes[2].value, null);
	test.equal(result.opcodes[2].offset, 4);
};

exports['analyze recognizes memory init'] = function (test) {
	var result = yasold.analyze('6060604052');
	
	test.ok(result);
	test.ok(result.inits);
	test.ok(Array.isArray(result.inits));
	test.equal(result.inits.length, 1);
	test.equal(result.inits[0].position, 0);
};

