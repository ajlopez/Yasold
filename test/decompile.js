
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

exports['decompile two push1 and mstore to text'] = function (test) {
	var result = yasold.decompileToText('6060604052');
	
	test.ok(result);
	test.equal(typeof result, 'string');
	test.ok(result.indexOf('push1 0x60') >= 0);
	test.ok(result.indexOf('push1 0x40') >= 0);
	test.ok(result.indexOf('mstore') >= 0);
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
		
	test.equal(result[23].opcode, 'stop');
	test.equal(result[23].value, null);
};

exports['decompile optimized numbers contract bytecodes'] = function (test) {
	var bytecodes = '6060604052341561000c57fe5b5b602a6000555b5b60ab806100226000396000f300606060405263ffffffff60e060020a600035041663c06b268e8114602a578063f2c9ecd814604e575bfe5b3415603157fe5b603a600435606d565b604080519115158252519081900360200190f35b3415605557fe5b605b6078565b60408051918252519081900360200190f35b60005481135b919050565b6000545b905600a165627a7a72305820824225b9ca70a4014d4a40c73536edb5df68a7fd08eee758ab76a5f39cf7e3000029';
	
	var result = yasold.decompile(bytecodes);
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 119);
		
	test.equal(result[118].opcode, 'stop');
	test.equal(result[118].value, null);
};

exports['decompile empty contract bytecodes to text with first comments'] = function (test) {
	var bytecodes = '60606040523415600b57fe5b5b60338060196000396000f30060606040525bfe00' +
		'a165627a7a723058205dcf27880e53b3d302970d2a5e0d862957d827fb80e73b09e18813d3403aaaae0029';
	
	var result = yasold.decompileToText(bytecodes);
	
	test.ok(result);
	test.equal(typeof result, 'string');
	
	test.ok(result.indexOf('; Initialization') >= 0);
	test.ok(result.indexOf('; Contract') >= 0);
	test.ok(result.indexOf('; Initialization') < result.indexOf('codecopy'));
	test.ok(result.indexOf('; Contract') >= result.indexOf('codecopy'));
};



