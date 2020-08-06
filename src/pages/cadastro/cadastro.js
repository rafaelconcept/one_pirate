import React from 'react';

import { Container } from './cadastro_css.js';
import ReCAPTCHA from "react-google-recaptcha";
import { Box1 } from '../../layout/box/box1_css';
import luffy from '../../layout/register/luffy_confused.png';
import zoro from '../../layout/register/zoro_confused.png';


const socket = require('../../components/sockets/main_front_socket').socket();



var captcha = true;//false;

function validar_email(text){
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (reg.test(text) === false) {
    return false;
  }else {
    return true;
  }
  
}

function onChange(value) {
  console.log("Captcha value:", value);
  captcha = true;
}

var email = {email1:'', email2:''};
var password = {password1:'',password2:''};

function setEmail(unidade){
  if(unidade.target.id=='email1'){email.email1=unidade.target.value}
  if(unidade.target.id=='email2'){email.email2=unidade.target.value}
  
}
function setPassword(unidade){
  if(unidade.target.id=='password1'){password.password1=unidade.target.value}
  if(unidade.target.id=='password2'){password.password2=unidade.target.value}
}




function cadastro(props) {


  function cadastrar(){

    if(!validar_email(email.email1)){
      props.setErro(1)
      return;
    }
    props.setErro(0)
    if(email.email1==email.email2 && email.email1!=''){
      props.setErro(0)
    }else{
      props.setErro(2)
      return;
    }

    if(password.password1==password.password2 && password.password1!=''){
      props.setErro(0)
    }else{
      props.setErro(3)
      return;
    }
    if(!captcha){
      props.setErro(4)
      return;
    }
    var info = {
      'email':email.email1,
      'pass':password.password1,
    }
    //socket.emit('cadastrar', info);
    props.setCadastro({email:email.email1,password:password.password1})
  
  }
  return(
    
      <Container>
        
        <Box1>
          <div className='box_all'>
            <div className='box_title'>
              <p className='text_box_title'>Cadastro</p>
            </div>
            <div className='box_middle'>

            <div className='concluido' style={{display:(props.dadosCadastro.work=='true')?'':'none'}}>
              Cadastro efetuado! pode realizar seu login agora.
            </div>
            <div style={{display:(props.dadosCadastro.work=='true')?'none':''}}>

              <div className='conteudo'>
                <div className='cadastro_esquerdo'>
                  <p id='descri'>Insira os dados para seu login</p>
          
                  <p className='form_title' >Email</p>
                  <p className='erro' style={{display:(props.erro==1)?'block':'none'}}>Email invalido</p>
                  <p className='erro' style={{display:(props.erro==2)?'block':'none'}}>Emails digitado são diferentes</p>
                  <p className='erro' style={{display:(props.dadosCadastro.work=='false')?'block':'none'}}>Email em uso</p>
                  <input className='form_cadastro' placeholder='Email' id='email1' type='email' onChange={ (e) => setEmail(e)} />
                  <p className='form_title'>Repita o email</p>
                  <p className='erro' style={{display:(props.erro==2)?'block':'none'}}>Emails digitado são diferentes</p>
                  <p className='erro' style={{display:(props.dadosCadastro.work=='false')?'block':'none'}}>Email em uso</p>
                  <input className='form_cadastro' placeholder='Repita o email' id='email2' type="email" onChange={ (e) => setEmail(e)}/>
                  <p className='form_title'>Senha</p>
                  <p className='erro' style={{display:(props.erro==3)?'block':'none'}}>Senhas digitadas são diferentes</p>
                  <input className='form_cadastro' placeholder='Senha' id='password1' type="password" onChange={ (e) => setPassword(e)}/>
                  <p className='form_title'>Repita a senha</p>
                  <p className='erro' style={{display:(props.erro==3)?'block':'none'}}>Senhas digitadas são diferentes ou invalidas</p>
                  <input className='form_cadastro' placeholder='Repita a senha' id='password2' type="password" onChange={ (e) => setPassword(e)}/>
                </div>
                <div className='cadastro_direito'>
                  <div id="captcha">
                    <div id='confused'>
                      <img className='confu' src={luffy} alt=""/>
                      <img className='confu' src={zoro} alt=""/>
                    </div>
                    <div id='recaptcha'>
                    
                      <ReCAPTCHA
                        sitekey="6LcJF7kZAAAAAIjWXCTTKXHeDneGTlSLwRRU7VJC"
                        onChange={onChange}
                      />
                      <p className='erro' style={{display:(props.erro==4)?'block':'none'}}>Captcha invalido</p>
                    </div>

                  </div>
                  
                </div>
            
              </div>
              <div style={
                {
                  'width':'100%',
                  'display':'flex',
                  'justifyContent':'center',
                   
                  
                }
              }>
                <button id='cadastrar' onClick={cadastrar}>Cadastrar</button>
              </div>
              </div>
            </div>
            <div className="box_end"></div>
          </div>
        </Box1>

       
      </Container>
  );
}

export default cadastro;