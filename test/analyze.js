
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

exports['analyze push with nodes'] = function (test) {
	var result = yasold.analyze('6060');
	
	test.ok(result);
	test.ok(result.nodes);
	test.ok(Array.isArray(result.nodes));
	test.equal(result.nodes.length, 1);
	
	test.equal(result.nodes[0].from, 0);
	test.equal(result.nodes[0].to, 0);
	test.equal(result.nodes[0].values, 1);
};

exports['analyze two pushes and add with nodes'] = function (test) {
	var result = yasold.analyze('6060604001');
	
	test.ok(result);
	test.ok(result.nodes);
	test.ok(Array.isArray(result.nodes));
	test.equal(result.nodes.length, 1);
	
	test.equal(result.nodes[0].from, 0);
	test.equal(result.nodes[0].to, 2);
	test.equal(result.nodes[0].values, 1);
	test.ok(result.nodes[0].nodes);
	test.ok(Array.isArray(result.nodes[0].nodes));
	test.equal(result.nodes[0].nodes.length, 2);
	
	test.equal(result.nodes[0].nodes[0].from, 0);
	test.equal(result.nodes[0].nodes[0].to, 0);
	test.equal(result.nodes[0].nodes[0].values, 1);
	
	test.equal(result.nodes[0].nodes[1].from, 1);
	test.equal(result.nodes[0].nodes[1].to, 1);
	test.equal(result.nodes[0].nodes[1].values, 1);
};

exports['analyze two pushes and jumpi with nodes'] = function (test) {
	var result = yasold.analyze('6060604057');
	
	test.ok(result);
	test.ok(result.nodes);
	test.ok(Array.isArray(result.nodes));
	test.equal(result.nodes.length, 1);
	
	test.equal(result.nodes[0].from, 0);
	test.equal(result.nodes[0].to, 2);
	test.equal(result.nodes[0].values, 0);
	test.ok(result.nodes[0].nodes);
	test.ok(Array.isArray(result.nodes[0].nodes));
	test.equal(result.nodes[0].nodes.length, 2);
	
	test.equal(result.nodes[0].nodes[0].from, 0);
	test.equal(result.nodes[0].nodes[0].to, 0);
	test.equal(result.nodes[0].nodes[0].values, 1);
	
	test.equal(result.nodes[0].nodes[1].from, 1);
	test.equal(result.nodes[0].nodes[1].to, 1);
	test.equal(result.nodes[0].nodes[1].values, 1);
};

exports['analyze push and iszero'] = function (test) {
	var result = yasold.analyze('606015');
	
	test.ok(result);
	test.ok(result.nodes);
	test.ok(Array.isArray(result.nodes));
	test.equal(result.nodes.length, 1);
	
	test.equal(result.nodes[0].from, 0);
	test.equal(result.nodes[0].to, 1);
	test.equal(result.nodes[0].values, 1);
	test.ok(result.nodes[0].nodes);
	test.ok(Array.isArray(result.nodes[0].nodes));
	test.equal(result.nodes[0].nodes.length, 1);
	
	test.equal(result.nodes[0].nodes[0].from, 0);
	test.equal(result.nodes[0].nodes[0].to, 0);
	test.equal(result.nodes[0].nodes[0].values, 1);
};

exports['analyze push and jump'] = function (test) {
	var result = yasold.analyze('606056');
	
	test.ok(result);
	test.ok(result.nodes);
	test.ok(Array.isArray(result.nodes));
	test.equal(result.nodes.length, 1);
	
	test.equal(result.nodes[0].from, 0);
	test.equal(result.nodes[0].to, 1);
	test.equal(result.nodes[0].values, 0);
	test.ok(result.nodes[0].nodes);
	test.ok(Array.isArray(result.nodes[0].nodes));
	test.equal(result.nodes[0].nodes.length, 1);
	
	test.equal(result.nodes[0].nodes[0].from, 0);
	test.equal(result.nodes[0].nodes[0].to, 0);
	test.equal(result.nodes[0].nodes[0].values, 1);
};

exports['analyze with stack'] = function (test) {
	var result = yasold.analyze('6060604052');
	
	test.ok(result);
	test.ok(result.opcodes);
	test.ok(Array.isArray(result.opcodes));
	test.equal(result.opcodes.length, 3);
	
	test.equal(result.opcodes[0].opcode, 'push1');
	test.ok(result.opcodes[0].stack);
	test.ok(result.opcodes[0].stack.length);
	test.equal(result.opcodes[0].stack.length, 1);
	test.equal(result.opcodes[0].stack[0], '0x60');
	
	test.equal(result.opcodes[1].opcode, 'push1');
	test.ok(result.opcodes[1].stack);
	test.ok(result.opcodes[1].stack.length);
	test.equal(result.opcodes[1].stack.length, 2);
	test.equal(result.opcodes[1].stack[0], '0x60');
	test.equal(result.opcodes[1].stack[1], '0x40');
	
	test.equal(result.opcodes[2].opcode, 'mstore');
	test.ok(result.opcodes[2].stack);
	test.equal(result.opcodes[2].stack.length, 0);
};

exports['analyze recognizes memory init'] = function (test) {
	var result = yasold.analyze('6060604052');
	
	test.ok(result);
	test.ok(result.inits);
	test.ok(Array.isArray(result.inits));
	test.equal(result.inits.length, 1);
	test.equal(result.inits[0].position, 0);
};

exports['analyze recognizes two memory inits'] = function (test) {
	var result = yasold.analyze('606060405200606060405200');
	
	test.ok(result);
	test.ok(result.inits);
	test.ok(Array.isArray(result.inits));
	test.equal(result.inits.length, 2);
	test.equal(result.inits[0].position, 0);
	test.equal(result.inits[1].position, 4);
	
	test.equal(result.opcodes[4].offset, 0);
};

exports['analyze recognizes two memory inits with other values'] = function (test) {
	var result = yasold.analyze('608060405200608060405200');
	
	test.ok(result);
	test.ok(result.inits);
	test.ok(Array.isArray(result.inits));
	test.equal(result.inits.length, 2);
	test.equal(result.inits[0].position, 0);
	test.equal(result.inits[1].position, 4);
	
	test.equal(result.opcodes[4].offset, 0);
};

exports['analyze recognizes jumpi and jump with one byte address'] = function (test) {
	var result = yasold.analyze('6000600015600957fe5b600956');
	
	test.ok(result);
	test.ok(result.jumps);
	test.ok(Array.isArray(result.jumps));
	test.equal(result.jumps.length, 2);
	test.equal(result.jumps[0].position, 4);
	test.equal(result.jumps[0].address, 9);
	test.equal(result.opcodes[result.jumps[0].position].target, 6);
	test.equal(result.jumps[1].position, 8);
	test.equal(result.jumps[1].address, 9);
	test.equal(result.opcodes[result.jumps[1].position].target, 6);
};

exports['analyze recognizes jumpdests'] = function (test) {
	var result = yasold.analyze('60605b60015b50505b');
	
	test.ok(result);
	test.ok(result.jumpdest);
	test.ok(Array.isArray(result.jumpdest));
	test.equal(result.jumpdest.length, 3);
	test.equal(result.jumpdest[0].position, 1);
	test.equal(result.jumpdest[1].position, 3);
	test.equal(result.jumpdest[2].position, 6);
};

exports['jumpdests with labels'] = function (test) {
	var result = yasold.analyze('60605b60015b50505b');
	
	test.ok(result);
	test.ok(result.jumpdest);
	test.ok(Array.isArray(result.jumpdest));
	test.equal(result.jumpdest.length, 3);
	test.equal(result.opcodes[result.jumpdest[0].position].label, 'label1');
	test.equal(result.opcodes[result.jumpdest[1].position].label, 'label2');
	test.equal(result.opcodes[result.jumpdest[2].position].label, 'label3');
};
