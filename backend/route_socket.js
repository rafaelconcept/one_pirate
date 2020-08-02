const express = require('express');
const rotas = express()

const user = require('./controllers/user')
const axios = require('axios');
/*
rotas.get("/",(req, res)=>{
  return  res.json({msg:'index'});
})

*/

const http = require('http').createServer(server);
var io = require('socket.io')(http);

io.on('connection', (socket) => {
  console.log('conectaram');
})

rotas.post("/register",user.register);






module.exports = rotas