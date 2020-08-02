import styled from 'styled-components';
import soccer from '../../layout/font/SoccerLeague-Italic.ttf'



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
    text-decoration: none;
    }

    a:active {
    text-decoration: none;
    }

    .box_anuncio{
            margin-top:20px;
            display:flex;
            justify-content:center;
            width: 100%;
            height: 110px;
            
        }
    .box_anuncio_interno{
        display:flex;
        justify-content:center;
        align-items:center;
        width: 80%;
        background:#3f4b4a;
        margin-bottom:30px;
    }

    .anuncio{
        color:#ceceff;
        font-family:'Soccer';
        font-size:30px;
    }

    

    
`;
