
var bc = require('../lib/bytecodes');

exports['decompile push1'] = function (test) {
	var result = bc.decompile('6060');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'push1');
	test.equal(result[0].value, '0x60');
};

exports['decompile two push1'] = function (test) {
	var result = bc.decompile('60606040');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 2);
	
	test.equal(result[0].opcode, 'push1');
	test.equal(result[0].value, '0x60');
	
	test.equal(result[1].opcode, 'push1');
	test.equal(result[1].value, '0x40');
};

