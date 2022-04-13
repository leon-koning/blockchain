pragma solidity ^0.4.17;

contract LeonToken {

  uint256 public totalSupply;
  string public name = "LeonToken";
  string public symbol = "LKT";

  mapping(address => uint256) public balanceOf;

  function LeonToken (uint256 _initialSupply) public {
    balanceOf[msg.sender] = _initialSupply;
    totalSupply = _initialSupply;
  }
}
