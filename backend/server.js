const express = require('express')
const server = express()
const cors = require('cors')
const routes = require('./rotas')


const axios = require('axios');


const mongoose = require('mongoose');
const user = require('./controllers/user')





mongoose.connect('mongodb://127.0.0.1:27017/one_pirate', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


server.use(cors());

server.use(express.json());

server.use(routes);

server.get("/",(req, res)=>{

    return  res.json({msg:'testee'});


  })




const http = require('http').createServer(server);
var io = require('socket.io')(http);


io.on('connection', (socket) => {
    //lista de todas do socket
    require('./route_socket')(socket);

    console.log(`Socket conectado:${socket.id}`);
  });


http.listen(3333, function(){
    console.log('rodando server porta 3333');
})










