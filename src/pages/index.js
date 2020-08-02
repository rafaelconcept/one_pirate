import React,{ useState } from 'react';
import socketIOClient from "socket.io-client";


import { Container } from './index_css.js';

//Importando components
import Menu_esquerdo_off from '../components/menu_lateral_off/index';
import Header_off from '../components/header_off/index';
import Header_on from '../components/header_off/index';



//Importando paginas
import Home from './home/home';
import Cadastro from './cadastro/cadastro';





const Pages=()=> {


  
  const socket = socketIOClient('http://192.168.1.105:3333/');
  
  socket.on('logar',data=>{
    if(data.logado == true){
      setLogado(true);
    }
    return;
  })
  
  
  const [pagina, setPagina] = useState('home');
  const [logado, setLogado] = useState(false);

  const [login, setLogin] = useState({'email':'','password':''});
  

  function changePage(nome){
    setPagina(nome);
    return;
  }
//------Setar Cadastro de usuario
const [cadastrar, setCadastrar] = useState({'email':'','password':'','work':''});


function func_setCadastrar(dados){
  setCadastrar(dados)
  var info = {
    'email':dados.email,
    'pass':dados.password,
  }
  //console.log('mandando pra o socket');
  socket.emit('cadastrar', info);
}

socket.on('cadastrar', data =>{
  //console.log(data)
  if(data.criado){
    setCadastrar({'work':'true'})
    return
  }
  setCadastrar({'work':'false'})
})



//------Setar erros de cadastro
const [erro_cadastro,setErro_cadastro] = useState(0);

function setErroCadastro(numero){
  setErro_cadastro(numero)
  
}








  function logar(dados_login){
    //console.log(dados_login.email);
    //console.log(dados_login.password);
    socket.emit('logar', dados_login);
    return; 
  }

  
  
  return (
    <Container>
          {
            //renderizar o Header de Logado ou de Deslogado
          }
          {
            //{logado?<Header_on/>:''}
          }
          {!logado?<Header_off action={logar}/>:''}
      
      <div className='menu_topo'>
        <button className='botao_menu' onClick={()=>changePage('home')}>HOME</button>
        <button className='botao_menu' onClick={()=>changePage('cadastro')}>CADASTRO</button>
        <button className='botao_menu' onClick={()=>changePage('sobre')}>SOBRE</button>
        <button className='botao_menu' onClick={()=>changePage('noticias')}>NOTICIAS</button>
        <button className='botao_menu' onClick={()=>changePage('midias')}>MIDIAS</button>
        <button className='botao_menu' onClick={()=>changePage('ajude')}>AJUDE</button>
      </div>
      <div className='corpo'>

        <div id='dividido'>

          <div id='lado_esquerdo'>
            <Menu_esquerdo_off action={changePage} />
            
          </div>

          <div id='lado_direito'>
        
           
              
          {
            //renderizar a pagina que o usuario escolheu
          }     
          {pagina=='home'?<Home/>:''}
          {pagina=='cadastro'?<Cadastro dadosCadastro={cadastrar} setCadastro={func_setCadastrar} erro={erro_cadastro} setErro={setErroCadastro}/>:''}
           

           
                
       
          </div>
          
        </div>
        
        <div className='footer'></div>
        <div className='footer2'></div>
      </div>
     
    </Container>

    )
}

export default Pages;