import styled from 'styled-components';
import soccer from '../../layout/font/SoccerLeague-Italic.ttf'


export const Container = styled.div`

    @font-face {
    font-family: 'Soccer';
    src: local('FiraSans'), url(${soccer}) format('truetype');
    }

  .box_middle{
      display:flex;
      flex-direction: column;
      align-items:center;
  }
  .conteudo{
      width:100%;
      display:flex;
      flex-direction:row;
 
      justify-content:center;
  }
  .cadastro_direito{
    width:100%;
      margin-right: 50px;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items: center;
      

  }
  #descri{
      font-family:'Soccer';
      margin-bottom:30px;
  }

  .form_title{
    margin-bottom:2px;
    margin-top:8px;
    font-family:'Soccer';
  }

  .form_cadastro{
      border-radius:5px;
      border:none;
      
      height:20px;
      width: 200px;
      
  }

  p{
      margin-top:0px;
      margin-bottom:0px;
  }

  .cadastro_esquerdo{
      margin-left: 30px;
      width:100%;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items: left;

  }
  #confused{
      display:flex;
      flex-direction:row;
      justify-content:center;
      
  }
 .confu{
     
     width: 100px;
     height: auto;
 }

 .erro{
     background:red;
     width: 200px;
     color: white;
     font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
     margin-bottom: 2px;
     font-size:12px;
 }
    
    .concluido{
        background:green;
        font-size:30px;
        width:80%;
        font-family:'Soccer';
        padding: 15px;
        text-align: center;
        color: white;
    }
        
    }

 #cadastrar{
     width:100px;
     height:40px;
     margin-top:20px;
     font-family:'Soccer';
     cursor:pointer;
     border: none;
     border-radius:5px;
     background:#F0C753;
 }
    #cadastrar:hover{
        border: 2px solid white;
    }


 @media screen and (max-width: 1008px) {
    .cadastro_esquerdo{
        margin-left:0px;
        align-items:center;
    }
 }


 @media screen and (max-width: 764px) {
        .conteudo{
            flex-direction:column;
        }
        #confused{
            display:none
        }
        #recaptcha{
            margin-top:20px;
        }
    }


`;
