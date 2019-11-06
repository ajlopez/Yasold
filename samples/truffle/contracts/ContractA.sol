pragma solidity >=0.5.0 <0.6.0;

import "./ContractB.sol";
import "./ContractC.sol";

contract ContractA {
    ContractB b;
    ContractC c;
    bytes32 hash;
    
    constructor() public {
        b = new ContractB();
        c = new ContractC();
    }
    
    function() external payable { }
    
    function invoke() public {
        b.invoke();
        c.invoke();
    }
    
    function transfer(address payable receiver, uint amount) public {
        receiver.transfer(amount);
    }
    
    function kill(address payable receiver) public {
        selfdestruct(receiver);
    }
    
    function success(uint value) public {
        require(value > 0, "value should be positive");
        b.success(value - 1);
    }
    
    function lotofwork(uint times) public {
        for (uint k = 0; k < times; k++)
            hash = keccak256(abi.encode(k));
    }
}

