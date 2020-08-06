const axios = require('axios');
const api = require('../api');

const baseURL = api.base();

module.exports = function(socket) {

//Cadastrar
    socket.on('cadastrar', data =>{
        console.log(`Socket enviado:${socket.id}`);
        axios.post(baseURL+'/register', data)
        .then((res) => {    
            socket.emit('cadastrar', res.data)
        })
    })
        
//Fim cadastrar


//Logar
    socket.on('logar', data =>{
         if(data.email!=data.password){
            socket.emit('logar',{logado:false})
             return
        }

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

//Fim logar

   
  
  
  
  
  };