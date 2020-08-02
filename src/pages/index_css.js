import styled from 'styled-components';
import background from '../layout/background.png';

import footer from '../layout/footer_todo.png';
import botao_off from '../layout/menu_top_button_off.png';
import botao_on from '../layout/menu_top_button_on.png';
import soccer from '../layout/font/SoccerLeague-Italic.ttf'


export const Container = styled.div`

    @font-face {
    font-family: 'Soccer';
    src: local('FiraSans'), url(${soccer}) format('truetype');
    }
  
  
  margin-top: -22px;  
  background: url(${background})  no-repeat center center fixed; /* The image used */
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  display:flex;
  flex-direction: column;

  align-items: center; 


    .menu_topo{
        z-index:2;
        display:flex;
        flex-direction: row;
        margin-left: 100px;
    }
    .botao_menu{
        background: url(${botao_off});
        background-repeat: no-repeat;
        background-size: 100% 100%;
        border: none;
        cursor: pointer;
        width: 200px;
        height: 50px;
        margin-left: -50px;
        color:#60553A;
        font-family: 'Soccer';
        font-size: 25px;
        
    }

  
    
    .botao_menu:hover{
        
        background: url(${botao_on});
        background-repeat: no-repeat;
        background-size: 100% 100%;
        border: none;
        cursor: pointer;
        width: 200px;
        height: 50px;
        margin-left: -50px;
        color: #F0C753;
    }
    .botao_menu:focus{
        outline:none;
    }


.teste{
    height:500px;
  }
.corpo{
    background:#e8eeed;
    z-index:1;
    
    width: 900px;
    margin-bottom: 40px;
}

    #lado_esquerdo{
        margin-left:5px;
    }
    #lado_direito{
        
        width:100%;
    }

    #dividido{
        display: flex;
        flex-direction: row;
    }

.footer{
    background: url(${footer});
        background-repeat: no-repeat;
        background-size: 100% 100%;
        
        width: 100%;
        height: 280px;
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
        .footer2{
            margin-top:25px;
        }

        
    }

    


`;
