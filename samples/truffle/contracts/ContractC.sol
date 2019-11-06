pragma solidity >=0.5.0 <0.6.0;

contract ContractC {
    uint counter;
    
    function invoke() public {
        counter++;
    }
    
    function success(uint value) public {
        require(value > 0, "value should be positive");
    }
}


