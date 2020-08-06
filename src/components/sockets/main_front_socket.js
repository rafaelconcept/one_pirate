//import socketIOClient from "socket.io-client";
const socketIOClient = require('socket.io-client');


module.exports = {
    socket(){
        const socket = socketIOClient('http://192.168.1.105:3333/');
        
        return socket;
    }
    
}

  
  
  
  
  