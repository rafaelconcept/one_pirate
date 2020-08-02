import styled from 'styled-components';
import soccer from '../../layout/font/SoccerLeague-Italic.ttf'
import background_titulo from '../../layout/background_menu_top.png'


export const Container = styled.div`
  
  @font-face {
    font-family: 'Soccer';
    src: local('FiraSans'), url(${soccer}) format('truetype');
    }
    a:link {
    text-decoration: none;
    }

    a:visited {
    text-decoration: none;
    }

    a:hover {
        cursor:pointer;
    text-decoration: none;
    }

    a:active {
    text-decoration: none;
    }

    .menu{
        margin-top:30px;
        margin-left:15px;
        margin-right:15px;
        display:flex;
        flex-direction: row;
        margin-bottom:30px;
    }

    .barra{
        margin-top:50px;
        margin-left: 5px;
        width:1px;
        background:#303d3c;
        height: 150px;
    }

    .bg_titulo{
        width:150px;
        height:40px;
        background: url(${background_titulo});
        background-repeat: no-repeat;
        background-size: 100% 100%;     
        text-align:center;
        margin-bottom: 5    px;
    }
    .titulo{
        font-family:'Soccer';
        font-size: 15px;
        padding-top:20px;
        color: white;
    }
    .opcao{
        display:flex;
        flex-direction: row;
       
        
    }
    .icon{
        margin-top:2px;
        width:15px;
        height: 15px;
    }
    .nome_opcao{
        margin-left:5px;
        margin-top:5px;
        font-family:'Soccer';
        font-size: 15px;
        color: black;
        
    }
    .opcao:hover{
        .nome_opcao{
            color:#F0C751;
        }
    }
    .barra_inferior{
        margin-top: -10px;
        height: 1px;
        width: 95%;
        background:#303d3c;
        
    }
`;
