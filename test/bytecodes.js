
var bc = require('../lib/bytecodes');

function toHex(value) {
	var hex = value.toString(16);
	
	if (hex.length % 2)
		hex = '0' + hex;
		
	return hex;
}

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

exports['decompile two push1 and mstore'] = function (test) {
	var result = bc.decompile('6060604052');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 3);
	
	test.equal(result[0].opcode, 'push1');
	test.equal(result[0].value, '0x60');
	
	test.equal(result[1].opcode, 'push1');
	test.equal(result[1].value, '0x40');
	
	test.equal(result[2].opcode, 'mstore');
	test.equal(result[2].value, null);
};

exports['decompile two push1, mstore and callvalue'] = function (test) {
	var result = bc.decompile('606060405234');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 4);
	
	test.equal(result[0].opcode, 'push1');
	test.equal(result[0].value, '0x60');
	
	test.equal(result[1].opcode, 'push1');
	test.equal(result[1].value, '0x40');
	
	test.equal(result[2].opcode, 'mstore');
	test.equal(result[2].value, null);
	
	test.equal(result[3].opcode, 'callvalue');
	test.equal(result[3].value, null);
};

exports['decompile codecopy'] = function (test) {
	var result = bc.decompile('39');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'codecopy');
	test.equal(result[0].value, null);
};

exports['decompile iszero'] = function (test) {
	var result = bc.decompile('15');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'iszero');
	test.equal(result[0].value, null);
};

exports['decompile jumpi'] = function (test) {
	var result = bc.decompile('57');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'jumpi');
	test.equal(result[0].value, null);
};

exports['decompile jumpdest'] = function (test) {
	var result = bc.decompile('5b');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'jumpdest');
	test.equal(result[0].value, null);
};

exports['decompile return'] = function (test) {
	var result = bc.decompile('f3');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'return');
	test.equal(result[0].value, null);
};

exports['decompile throw'] = function (test) {
	var result = bc.decompile('fe');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'throw');
	test.equal(result[0].value, null);
};

exports['decompile dup1'] = function (test) {
	var result = bc.decompile('80');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'dup1');
	test.equal(result[0].value, null);
};

exports['decompile swap1'] = function (test) {
	var result = bc.decompile('90');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'swap1');
	test.equal(result[0].value, null);
};

exports['decompile swaps'] = function (test) {
	for (var k = 1; k <= 16; k++) {
		var result = bc.decompile(toHex(9 * 16 + k - 1));
		
		test.ok(result);
		test.ok(Array.isArray(result));
		test.equal(result.length, 1);
		
		test.equal(result[0].opcode, 'swap' + k);
		test.equal(result[0].value, null);
	}
};

exports['decompile dups'] = function (test) {
	for (var k = 1; k <= 16; k++) {
		var result = bc.decompile(toHex(8 * 16 + k - 1));
		
		test.ok(result);
		test.ok(Array.isArray(result));
		test.equal(result.length, 1);
		
		test.equal(result[0].opcode, 'dup' + k);
		test.equal(result[0].value, null);
	}
};

exports['decompile pop'] = function (test) {
	var result = bc.decompile('50');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'pop');
	test.equal(result[0].value, null);
};

exports['decompile stop'] = function (test) {
	var result = bc.decompile('00');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'stop');
	test.equal(result[0].value, null);
};

