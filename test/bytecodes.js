
const bc = require('../lib/bytecodes');

function toHex(value) {
	let hex = value.toString(16);
	
	if (hex.length % 2)
		hex = '0' + hex;
		
	return hex;
}

exports['decompile push1'] = function (test) {
	const result = bc.decompile('6060');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'push1');
	test.equal(result[0].value, '0x60');
};

exports['decompile two push1'] = function (test) {
	const result = bc.decompile('60606040');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 2);
	
	test.equal(result[0].opcode, 'push1');
	test.equal(result[0].value, '0x60');
	
	test.equal(result[1].opcode, 'push1');
	test.equal(result[1].value, '0x40');
};

exports['decompile two push1 and mstore'] = function (test) {
	const result = bc.decompile('6060604052');
	
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
	const result = bc.decompile('606060405234');
	
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
	const result = bc.decompile('34');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'callvalue');
	test.equal(result[0].value, null);
};

exports['decompile add'] = function (test) {
	const result = bc.decompile('01');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'add');
	test.equal(result[0].value, null);
};

exports['decompile mul'] = function (test) {
	const result = bc.decompile('02');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'mul');
	test.equal(result[0].value, null);
};

exports['decompile sub'] = function (test) {
	const result = bc.decompile('03');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'sub');
	test.equal(result[0].value, null);
};

exports['decompile div'] = function (test) {
	const result = bc.decompile('04');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'div');
	test.equal(result[0].value, null);
};

exports['decompile sdiv'] = function (test) {
	const result = bc.decompile('05');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'sdiv');
	test.equal(result[0].value, null);
};

exports['decompile mod'] = function (test) {
	const result = bc.decompile('06');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'mod');
	test.equal(result[0].value, null);
};

exports['decompile smod'] = function (test) {
	const result = bc.decompile('07');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'smod');
	test.equal(result[0].value, null);
};

exports['decompile addmod'] = function (test) {
	const result = bc.decompile('08');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'addmod');
	test.equal(result[0].value, null);
};

exports['decompile mulmod'] = function (test) {
	const result = bc.decompile('09');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'mulmod');
	test.equal(result[0].value, null);
};

exports['decompile codecopy'] = function (test) {
	const result = bc.decompile('39');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'codecopy');
	test.equal(result[0].value, null);
};

exports['decompile iszero'] = function (test) {
	const result = bc.decompile('15');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'iszero');
	test.equal(result[0].value, null);
};

exports['decompile jumpi'] = function (test) {
	const result = bc.decompile('57');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'jumpi');
	test.equal(result[0].value, null);
};

exports['decompile jump'] = function (test) {
	const result = bc.decompile('56');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'jump');
	test.equal(result[0].value, null);
};

exports['decompile jumpdest'] = function (test) {
	const result = bc.decompile('5b');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'jumpdest');
	test.equal(result[0].value, null);
};

exports['decompile return'] = function (test) {
	const result = bc.decompile('f3');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'return');
	test.equal(result[0].value, null);
};

exports['decompile invalid'] = function (test) {
	const result = bc.decompile('fe');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'invalid');
	test.equal(result[0].value, null);
};

exports['decompile dup1'] = function (test) {
	const result = bc.decompile('80');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'dup1');
	test.equal(result[0].value, null);
};

exports['decompile swap1'] = function (test) {
	const result = bc.decompile('90');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'swap1');
	test.equal(result[0].value, null);
};

exports['decompile swaps'] = function (test) {
	for (let k = 1; k <= 16; k++) {
		const result = bc.decompile(toHex(9 * 16 + k - 1));
		
		test.ok(result);
		test.ok(Array.isArray(result));
		test.equal(result.length, 1);
		
		test.equal(result[0].opcode, 'swap' + k);
		test.equal(result[0].value, null);
	}
};

exports['decompile dups'] = function (test) {
	for (let k = 1; k <= 16; k++) {
		const result = bc.decompile(toHex(8 * 16 + k - 1));
		
		test.ok(result);
		test.ok(Array.isArray(result));
		test.equal(result.length, 1);
		
		test.equal(result[0].opcode, 'dup' + k);
		test.equal(result[0].value, null);
	}
};

exports['decompile pushs'] = function (test) {
	for (let k = 1; k <= 32; k++) {
        const code = toHex(6 * 16 + k - 1);
        let value = '';
        
        for (let j = 1; j <= k; j++)
            value += toHex(j);
        
		const result = bc.decompile(code + value);
		
		test.ok(result);
		test.ok(Array.isArray(result));
		test.equal(result.length, 1);
		
		test.equal(result[0].opcode, 'push' + k);
		test.equal(result[0].value, '0x' + value);
	}
};

exports['decompile pop'] = function (test) {
	const result = bc.decompile('50');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'pop');
	test.equal(result[0].value, null);
};

exports['decompile stop'] = function (test) {
	const result = bc.decompile('00');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'stop');
	test.equal(result[0].value, null);
};

exports['decompile eq'] = function (test) {
	const result = bc.decompile('14');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'eq');
	test.equal(result[0].value, null);
};

exports['decompile lt'] = function (test) {
	const result = bc.decompile('10');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'lt');
	test.equal(result[0].value, null);
};

exports['decompile gt'] = function (test) {
	const result = bc.decompile('11');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'gt');
	test.equal(result[0].value, null);
};

exports['decompile slt'] = function (test) {
	const result = bc.decompile('12');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'slt');
	test.equal(result[0].value, null);
};

exports['decompile sgt'] = function (test) {
	const result = bc.decompile('13');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'sgt');
	test.equal(result[0].value, null);
};

exports['decompile and'] = function (test) {
	const result = bc.decompile('16');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'and');
	test.equal(result[0].value, null);
};

exports['decompile or'] = function (test) {
	const result = bc.decompile('17');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'or');
	test.equal(result[0].value, null);
};

exports['decompile xor'] = function (test) {
	const result = bc.decompile('18');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'xor');
	test.equal(result[0].value, null);
};

exports['decompile not'] = function (test) {
	const result = bc.decompile('19');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'not');
	test.equal(result[0].value, null);
};

exports['decompile exp'] = function (test) {
	const result = bc.decompile('0a');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'exp');
	test.equal(result[0].value, null);
};

exports['decompile signextend'] = function (test) {
	const result = bc.decompile('0b');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'signextend');
	test.equal(result[0].value, null);
};

exports['decompile mload'] = function (test) {
	const result = bc.decompile('51');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'mload');
	test.equal(result[0].value, null);
};

exports['decompile sload'] = function (test) {
	const result = bc.decompile('54');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'sload');
	test.equal(result[0].value, null);
};

exports['decompile sstore'] = function (test) {
	const result = bc.decompile('55');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'sstore');
	test.equal(result[0].value, null);
};

exports['decompile sha3'] = function (test) {
	const result = bc.decompile('20');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'sha3');
	test.equal(result[0].value, null);
};

exports['decompile revert'] = function (test) {
	const result = bc.decompile('fd');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'revert');
	test.equal(result[0].value, null);
};

exports['decompile self destruct'] = function (test) {
	const result = bc.decompile('ff');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'selfdestruct');
	test.equal(result[0].value, null);
};

exports['decompile create'] = function (test) {
	const result = bc.decompile('f0');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'create');
	test.equal(result[0].value, null);
};

exports['decompile call'] = function (test) {
	const result = bc.decompile('f1');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'call');
	test.equal(result[0].value, null);
};

exports['decompile delegate call'] = function (test) {
	const result = bc.decompile('f4');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'delegatecall');
	test.equal(result[0].value, null);
};

exports['decompile static call'] = function (test) {
	const result = bc.decompile('fa');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'staticcall');
	test.equal(result[0].value, null);
};

exports['decompile call code'] = function (test) {
	const result = bc.decompile('f2');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'callcode');
	test.equal(result[0].value, null);
};

exports['decompile gas'] = function (test) {
	const result = bc.decompile('5a');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'gas');
	test.equal(result[0].value, null);
};

exports['decompile pc'] = function (test) {
	const result = bc.decompile('58');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'pc');
	test.equal(result[0].value, null);
};

exports['decompile msize'] = function (test) {
	const result = bc.decompile('59');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'msize');
	test.equal(result[0].value, null);
};

exports['decompile blockhash'] = function (test) {
	const result = bc.decompile('40');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'blockhash');
	test.equal(result[0].value, null);
};

exports['decompile logs'] = function (test) {
	for (let k = 0; k < 5; k++) {
		const result = bc.decompile(toHex(10 * 16 + k));
		
		test.ok(result);
		test.ok(Array.isArray(result));
		test.equal(result.length, 1);
		
		test.equal(result[0].opcode, 'log' + k);
		test.equal(result[0].value, null);
	}
};

exports['decompile mstore8'] = function (test) {
	const result = bc.decompile('53');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'mstore8');
	test.equal(result[0].value, null);
};

exports['decompile gaslimit'] = function (test) {
	const result = bc.decompile('45');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'gaslimit');
	test.equal(result[0].value, null);
};

exports['decompile number'] = function (test) {
	const result = bc.decompile('43');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'number');
	test.equal(result[0].value, null);
};

exports['decompile coinbase'] = function (test) {
	const result = bc.decompile('41');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'coinbase');
	test.equal(result[0].value, null);
};

exports['decompile timestamp'] = function (test) {
	const result = bc.decompile('42');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'timestamp');
	test.equal(result[0].value, null);
};

exports['decompile difficulty'] = function (test) {
	const result = bc.decompile('44');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'difficulty');
	test.equal(result[0].value, null);
};

exports['decompile address'] = function (test) {
	const result = bc.decompile('30');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'address');
	test.equal(result[0].value, null);
};

exports['decompile balance'] = function (test) {
	const result = bc.decompile('31');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'balance');
	test.equal(result[0].value, null);
};

exports['decompile origin'] = function (test) {
	const result = bc.decompile('32');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'origin');
	test.equal(result[0].value, null);
};

exports['decompile caller'] = function (test) {
	const result = bc.decompile('33');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'caller');
	test.equal(result[0].value, null);
};

exports['decompile calldataload'] = function (test) {
	const result = bc.decompile('35');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'calldataload');
	test.equal(result[0].value, null);
};

exports['decompile calldatasize'] = function (test) {
	const result = bc.decompile('36');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'calldatasize');
	test.equal(result[0].value, null);
};

exports['decompile calldatacopy'] = function (test) {
	const result = bc.decompile('37');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'calldatacopy');
	test.equal(result[0].value, null);
};

exports['decompile codesize'] = function (test) {
	const result = bc.decompile('38');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'codesize');
	test.equal(result[0].value, null);
};

exports['decompile gasprice'] = function (test) {
	const result = bc.decompile('3a');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'gasprice');
	test.equal(result[0].value, null);
};

exports['decompile extcodesize'] = function (test) {
	const result = bc.decompile('3b');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'extcodesize');
	test.equal(result[0].value, null);
};

exports['decompile extcodecopy'] = function (test) {
	const result = bc.decompile('3c');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'extcodecopy');
	test.equal(result[0].value, null);
};

exports['decompile returndatasize'] = function (test) {
	const result = bc.decompile('3d');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'returndatasize');
	test.equal(result[0].value, null);
};

exports['decompile returndatacopy'] = function (test) {
	const result = bc.decompile('3e');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'returndatacopy');
	test.equal(result[0].value, null);
};

exports['decompile byte'] = function (test) {
	const result = bc.decompile('1a');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'byte');
	test.equal(result[0].value, null);
};

exports['decompile shl'] = function (test) {
	const result = bc.decompile('1b');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'shl');
	test.equal(result[0].value, null);
};

exports['decompile shr'] = function (test) {
	const result = bc.decompile('1c');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'shr');
	test.equal(result[0].value, null);
};

exports['decompile sar'] = function (test) {
	const result = bc.decompile('1d');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'sar');
	test.equal(result[0].value, null);
};

exports['decompile create2'] = function (test) {
	const result = bc.decompile('f5');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, 'create2');
	test.equal(result[0].value, null);
};

exports['decompile unknown opcode'] = function (test) {
	const result = bc.decompile('46');
	
	test.ok(result);
	test.ok(Array.isArray(result));
	test.equal(result.length, 1);
	
	test.equal(result[0].opcode, '0x46');
	test.equal(result[0].value, null);
};

