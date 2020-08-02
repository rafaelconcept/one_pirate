const express = require('express')
const server = express()
const cors = require('cors')
const routes = require('./rotas')

const route_socket = require('./route_socket')

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

io.use(route_socket);

io.on('connection', (socket) => {

    socket.on('cadastrar', data =>{

        axios.post('http://127.0.0.1:3333/register', data)
        .then((res) => {
        
        socket.emit('cadastrar', res.data)
        //console.log(`Status: ${res.status}`);
        //console.log('Body: ', res.data);
        })

    })
    socket.on('logar', data =>{
        if(data.email!=data.password){
            socket.emit('logar',{logado:false})
            return
        }
        //console.log('logaram');

        var data = {
            "email":"teste@2",
            "pass":"1234",
            "username":"teste1"
        }

        axios.post('http://127.0.0.1:3333/register', data)
        .then((res) => {
        //console.log(`Status: ${res.status}`);
        //console.log('Body: ', res.data);
    })
        
        socket.emit('logar',{logado:true})
    })

    //console.log(`Socket conectado:${socket.id}`);
    socket.on('disconnect', () => {
      //console.log(`Socket desconectado:${socket.id}`);
    });
  });


http.listen(3333, function(){
    console.log('rodando server porta 3333');
})










