
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

exports['decompile callvalue'] = function (test) {
	var result = bc.decompile('34');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'callvalue');
	test.equal(result[0].value, null);
};

exports['decompile calldatavalue'] = function (test) {
	var result = bc.decompile('35');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'calldatavalue');
	test.equal(result[0].value, null);
};

exports['decompile add'] = function (test) {
	var result = bc.decompile('01');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'add');
	test.equal(result[0].value, null);
};

exports['decompile mul'] = function (test) {
	var result = bc.decompile('02');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'mul');
	test.equal(result[0].value, null);
};

exports['decompile sub'] = function (test) {
	var result = bc.decompile('03');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'sub');
	test.equal(result[0].value, null);
};

exports['decompile div'] = function (test) {
	var result = bc.decompile('04');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'div');
	test.equal(result[0].value, null);
};

exports['decompile sdiv'] = function (test) {
	var result = bc.decompile('05');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'sdiv');
	test.equal(result[0].value, null);
};

exports['decompile mod'] = function (test) {
	var result = bc.decompile('06');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'mod');
	test.equal(result[0].value, null);
};

exports['decompile smod'] = function (test) {
	var result = bc.decompile('07');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'smod');
	test.equal(result[0].value, null);
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

exports['decompile jump'] = function (test) {
	var result = bc.decompile('56');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'jump');
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

exports['decompile pushs'] = function (test) {
	for (var k = 1; k <= 32; k++) {
        var code = toHex(6 * 16 + k - 1);
        var value = '';
        
        for (var j = 1; j <= k; j++)
            value += toHex(j);
        
		var result = bc.decompile(code + value);
		
		test.ok(result);
		test.ok(Array.isArray(result));
		test.equal(result.length, 1);
		
		test.equal(result[0].opcode, 'push' + k);
		test.equal(result[0].value, '0x' + value);
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

exports['decompile eq'] = function (test) {
	var result = bc.decompile('14');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'eq');
	test.equal(result[0].value, null);
};

exports['decompile lt'] = function (test) {
	var result = bc.decompile('10');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'lt');
	test.equal(result[0].value, null);
};

exports['decompile gt'] = function (test) {
	var result = bc.decompile('11');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'gt');
	test.equal(result[0].value, null);
};

exports['decompile slt'] = function (test) {
	var result = bc.decompile('12');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'slt');
	test.equal(result[0].value, null);
};

exports['decompile sgt'] = function (test) {
	var result = bc.decompile('13');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'sgt');
	test.equal(result[0].value, null);
};

exports['decompile and'] = function (test) {
	var result = bc.decompile('16');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'and');
	test.equal(result[0].value, null);
};

exports['decompile or'] = function (test) {
	var result = bc.decompile('17');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'or');
	test.equal(result[0].value, null);
};

exports['decompile xor'] = function (test) {
	var result = bc.decompile('18');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'xor');
	test.equal(result[0].value, null);
};

exports['decompile not'] = function (test) {
	var result = bc.decompile('19');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'not');
	test.equal(result[0].value, null);
};

exports['decompile exp'] = function (test) {
	var result = bc.decompile('0a');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'exp');
	test.equal(result[0].value, null);
};

exports['decompile mload'] = function (test) {
	var result = bc.decompile('51');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'mload');
	test.equal(result[0].value, null);
};

exports['decompile sload'] = function (test) {
	var result = bc.decompile('54');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'sload');
	test.equal(result[0].value, null);
};

exports['decompile sstore'] = function (test) {
	var result = bc.decompile('55');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'sstore');
	test.equal(result[0].value, null);
};

exports['decompile sha3'] = function (test) {
	var result = bc.decompile('20');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'sha3');
	test.equal(result[0].value, null);
};

exports['decompile revert'] = function (test) {
	var result = bc.decompile('fd');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'revert');
	test.equal(result[0].value, null);
};

exports['decompile suicide'] = function (test) {
	var result = bc.decompile('ff');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'suicide');
	test.equal(result[0].value, null);
};

exports['decompile logs'] = function (test) {
	for (var k = 0; k < 5; k++) {
		var result = bc.decompile(toHex(10 * 16 + k));
		
		test.ok(result);
		test.ok(Array.isArray(result));
		test.equal(result.length, 1);
		
		test.equal(result[0].opcode, 'log' + k);
		test.equal(result[0].value, null);
	}
};


