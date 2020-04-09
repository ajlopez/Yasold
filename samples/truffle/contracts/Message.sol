pragma solidity >=0.5.0 <0.6.0;

contract Message {
    string public message;
    
    constructor(string memory initialmessage) public {
        message = initialmessage;
    }
    
    function setMessage(string memory newmessage) public {
        message = newmessage;
    }
}
