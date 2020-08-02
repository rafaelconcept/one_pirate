import styled from 'styled-components';
import soccer from '../../layout/font/SoccerLeague-Italic.ttf'

import titulo_news from '../../layout/title_news.png';
import fundo_news from '../../layout/background_news.png';
import cadastrar from '../../layout/sem_cadastro.png';
import box_login from '../../layout/box_login.png';
import logar from '../../layout/botao_logar.png';
import bg_title_news from '../../layout/titulo_data_noticia.png';
import bg_adm from '../../layout/news_adm.png';



export const Container = styled.div`
  
  @font-face {
    font-family: 'Soccer';
    src: local('FiraSans'), url(${soccer}) format('truetype');
    }
    
    .header{
        
        width: 100%;
        
        display: flex;
        justify-content: center;
        

    }
   
    .box_login{

        margin-top: 50px;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-right:220px;
        
    }
    .login_meio{
        display:flex;
        flex-direction:column;
        align-items: center;
    }
    .box_login_meio{
        width:300px;
        height: 130px;
        background: url(${box_login});
        background-repeat: no-repeat;
        background-size: 100% 100%;
        display: flex;
        flex-direction: column;
        margin-bottom:40px;
        margin-top:20px;
        z-index:1;
    }
    .email{
        border:none;
        background: none;
        margin-top: 23px;
        margin-left: 110px;
        width: 170px
    }
    .senha{
        border:none;
        background: none;
        margin-top: 23px;
        margin-left: 110px;
        width: 170px
    }
    .botao_logar{
        margin-left: 110px;
        margin-top: 12px;
        width:80px;
        height: 25px;

        background: url(${logar});
        background-repeat: no-repeat;
        background-size: 100% 100%;
        border: none;
        cursor: pointer;



    }
    .logo{
        width:150px;
    }
    .fazer_cadastro{
        width:200px;
        height: 40px;
        background: url(${cadastrar});
        background-repeat: no-repeat;
        background-size: 100% 100%;
        border: none;
        cursor: pointer;
        z-index:1;
    }
    .fazer_cadastro:focus{
        outline:none;
    }

    .zoro{
        position: absolute;
        
        left: 470px;
        top: 100px;
        width: 350px;
        z-index:0;
    }

    .luffy{
        position: absolute;
        
        left: 130px;
        top: 210px;
        width: 350px;
        z-index:0;
    }











    .noticias{
        
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .titulo_news{
        background: url(${titulo_news});
        background-repeat: no-repeat;
        background-size: 100% 100%;
        
        width: 200px;
        height: 40px;
        
    }

    .big_news{
   
        
        background: url(${fundo_news});
        background-repeat: no-repeat;
        background-size: 100% 100%;
        
        width: 300px;
        height: 300px;
        
       
    }

    .body_new{
        display:flex;
        flex-direction: column;
        align-items:center;
        padding-top: 10px;
    }
    .header_new{
        background: url(${bg_title_news});
        background-repeat: no-repeat;
        background-size: 100% 100%;
        
        width: 250px;
        height: 40px;
        font-family:'Soccer';
        color:#6f6144;
    }
    .texto_titulo_news{
        margin-top:12px;
        margin-left:15px;
        font-size:15px;
    }
    .data_titulo_news{
        margin-top:-11px;
        margin-left:190px;
        font-size:8px;
        font-family:'Courier New', Courier, monospace;
    }

    .content_new{
        width:230px;
        max-height:100px;
        margin-top:5px;
        background:#D4C8B2;
        padding-left: 5px;
        padding-right: 5px;
        padding-bottom: 5px;
        
    }
    .texto_content-news{
        margin-top:2px;
        color:#6f6144;
        font-size:12px;
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
    .adm_new{
        background: url(${bg_adm});
        background-repeat: no-repeat;
        background-size: 100% 100%;

        margin-top: -10px;
        margin-left: 100px;
        width: 80px;
        height: 20px;
        
    }
    .adm_name{
        margin-left: 20px;
        margin-top: 5px;
        font-family:'Soccer';
        font-size:10px;
        color:#6f6144;
    }


    @media screen and (max-width: 1008px) {
        .menu_topo, .zoro, .luffy, #lado_esquerdo {
            display:none;
        }
        .box_login{
            margin-right: 30px;
        }
        .corpo{
            margin-top:20px;
            width: 90%;
        }
    }

    @media screen and (max-width: 834px) {
        .noticias,.footer{
            display:none;
        }

    }
    @media screen and (min-width: 1669px){
        .zoro, .luffy{
            display:none;
        }
    }
`;
