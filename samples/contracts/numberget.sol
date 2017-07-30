
pragma solidity ^0.4.9;

contract Number {
	int private number;
	
	function Number() {
		number = 42;
	}
	
	function getNumber() returns (int) {
		return number;
	}
}



