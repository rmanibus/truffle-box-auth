pragma solidity ^0.4.2;

import './zeppelin/lifecycle/Killable.sol';

contract Authentication is Killable {



  struct Client {
    adress bankAdress
    bytes32 doc1
    bytes32 doc2
  }

  mapping (bytes32 => Client) private clients;

  function subscribe(bytes32 hash) {

    clients[hash].bankAdress = msg.sender

  }

  function changeOwnership(string password, bytes32 newHash){

    if(clients[sha3(password)].bankAdress != 0x0){

      client = clients[sha3(password)]
      clients[sha3(password)] = 0x0
      clients[newHash] = client
      clients[newHash].bankAdress = msg.sender
    }
  }

}
