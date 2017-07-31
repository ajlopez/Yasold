
var yasold = require('..');

exports['decompile push1'] = function (test) {
	var result = yasold.decompile('6060');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'push1');
	test.equal(result[0].value, '0x60');
};

exports['decompile two push1 and mstore and calculate offsets'] = function (test) {
	var result = yasold.decompile('6060604052');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 3);
	
	test.equal(result[0].opcode, 'push1');
	test.equal(result[0].value, '0x60');
	test.equal(result[0].offset, 0);
	
	test.equal(result[1].opcode, 'push1');
	test.equal(result[1].value, '0x40');
	test.equal(result[1].offset, 2);
	
	test.equal(result[2].opcode, 'mstore');
	test.equal(result[2].value, null);
	test.equal(result[2].offset, 4);
};

exports['decompile two push1, mstore, stop and skip invalid opcode continuation'] = function (test) {
	var result = yasold.decompile('606060405200a1');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 4);
	
	test.equal(result[0].opcode, 'push1');
	test.equal(result[0].value, '0x60');
	test.equal(result[0].offset, 0);
	
	test.equal(result[1].opcode, 'push1');
	test.equal(result[1].value, '0x40');
	test.equal(result[1].offset, 2);
	
	test.equal(result[2].opcode, 'mstore');
	test.equal(result[2].value, null);
	test.equal(result[2].offset, 4);
	
	test.equal(result[3].opcode, 'stop');
	test.equal(result[3].value, null);
	test.equal(result[3].offset, 5);
};

exports['decompile empty contract bytecodes'] = function (test) {
	var bytecodes = '60606040523415600b57fe5b5b60338060196000396000f30060606040525bfe00' +
		'a165627a7a723058205dcf27880e53b3d302970d2a5e0d862957d827fb80e73b09e18813d3403aaaae0029';
	
	var result = yasold.decompile(bytecodes);
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 24);
};


