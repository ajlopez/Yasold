pragma solidity >=0.5.0 <0.6.0;

contract Counter {
    uint public counter;
    
    function increment() public {
        counter++;
    }
    
    function add(uint value) public {
        counter += value;
    }
    
    function fail() public pure {
        require(false, "fail error");
    }
}


