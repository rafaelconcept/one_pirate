const express = require('express');
const rotas = express()
const user = require('./controllers/user')

/*
rotas.get("/",(req, res)=>{
  return  res.json({msg:'index'});
})

*/




rotas.post("/register",user.register);






module.exports = rotas