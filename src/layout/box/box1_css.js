import styled from 'styled-components';
import top from './box1_top.png';
import middle from './box1_middle.png';
import end from './box1_end.png';
import soccer from '../font/SoccerLeague-Italic.ttf'


export const Box1 = styled.div`

     @font-face {
        font-family: 'Soccer';
        src: local('FiraSans'), url(${soccer}) format('truetype');
    }

    .box_title{
        margin-top:30px;
        margin-left:5%;
        width:90%;
        height: 60px;

        background: url(${top});
        background-repeat: no-repeat;
        background-size: 100% 100%;
        display:flex;
        
    }
    @media screen and (max-width: 650px) {
        .box_title{
            height: 50px;
        }
    }
    .text_box_title{
        margin-top: 15px;
        margin-left: 65px;
        font-family:'Soccer';
        font-size: 20px;
        color:white;
    }
    .box_middle{
        margin-left:5%;
        width:90%;
        

        background: url(${middle});
        background-repeat: repeat-y;
        background-size: 100% ;
        display:flex;
        
    }
    .box_end{
        margin-left:5%;
        width:90%;
        height:40px;
        background: url(${end});
        background-repeat: no-repeat;
        background-size: 100% 100%;
        display:flex;
    }



`;
