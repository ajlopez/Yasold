
pragma solidity ^0.4.9;

contract CallFunction {
	int private number;
	
	function CallFunction() {
		number = 42;
	}
	
	function calculate() returns (int) {
		return increment(number);
	}
	
	function increment(int n) internal returns (int) {
		return n + 1;
	}
}



