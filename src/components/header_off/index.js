import React from 'react';
import logo from '../../layout/logo.png';
import zoro from '../../layout/zoro.png';
import luffy from '../../layout/luffy.png';
import { Container } from './styles';

function header_off(props) {

  
  var login = {'email':'','password':''};

  function logar() {
    
    if(!login.email || !login.password){
      return;
    }
    //console.log(login);
    props.action(login);
}
function change_email(email){
  login.email = email.target.value;
  
}
function change_password(password){
  login.password = password.target.value;
  
}



  return(
    <Container>
       <div className='header'>

          <div className='box_login'>
          <div>
              <img className='luffy' src={luffy} alt=""/>
            </div>
            <div className='login_meio'>
              <img className='logo' src={logo} alt=""/>
              <div className='box_login_meio'>
                
                  <input className='email' name='email' type="text" onChange={ (e) => change_email(e)} />
                  <input className='senha' name='password' type="password" onChange={ (e) => change_password(e)}/>
                  <button className='botao_logar' onClick={logar}></button>
                
              </div>
              <button className='fazer_cadastro'></button>
            </div>
            <div>
              <img className='zoro' src={zoro} alt=""/>
            </div>
          </div>
          <div className='noticias'>
            <div className='titulo_news'></div>
            <div className='big_news'>

              <div className="body_new">
                <div className="header_new">
                  <p className='texto_titulo_news'>Nova akuma no mi</p>
                  <p className='data_titulo_news'>30/07/2020</p>
                </div>
                <div className="content_new">
                  <p className='texto_content-news'>
                  Akuma no mi Goro Goro no mi adicionada, onde será que ela pode ser encontrada? O primeiro a encontrar ganhará um item especial a mais.   
                  </p>
                </div>
                <div className="adm_new">
                  <p className='adm_name'>ConcepT</p>
                </div>
              </div>

              <div className="body_new">
                <div className="header_new">
                  <p className='texto_titulo_news'>Manutencao</p>
                  <p className='data_titulo_news'>27/07/2020</p>
                </div>
                <div className="content_new">
                  <p className='texto_content-news'>
                  Manutenção para otimização de sistemas, esperamos que gostem ^^.
                  </p>
                </div>
                <div className="adm_new">
                  <p className='adm_name'>ConcepT</p>
                </div>
              </div>
              
            </div>
          </div>

          </div>

    </Container>
  )
}

export default header_off;