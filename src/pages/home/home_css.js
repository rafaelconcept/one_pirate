import styled from 'styled-components';

import top_marine from '../../layout/rank_home/top_marine.png';
import middle_marine from '../../layout/rank_home/middle_marine.png';
import end_marine from '../../layout/rank_home/end_marine.png';

import top_rev from '../../layout/rank_home/top_rev.png';
import middle_rev from '../../layout/rank_home/middle_rev.png';
import end_rev from '../../layout/rank_home/end_rev.png';

import top_pirata from '../../layout/rank_home/top_pirata.png';
import middle_pirata from '../../layout/rank_home/middle_pirata.png';
import end_pirata from '../../layout/rank_home/end_pirata.png';

import soccer from '../../layout/font/SoccerLeague-Italic.ttf';


export const Container = styled.div`
    p{
        margin-top:0px;
        margin-bottom:0px;
    }
    @font-face {
        font-family: 'Soccer';
        src: local('FiraSans'), url(${soccer}) format('truetype');
    }

    .box_middle{
        display:flex;
        flex-direction: row;
        justify-content:center;
        align-items:center;
    }
    .rank{
        
        margin-left:5px;
        
        width:190px;
        
        
    }
    #marine_top{
        margin-left:3px;
        
        background: url(${top_marine});
        background-repeat: no-repeat;
        background-size: 100% 100%;
        
        width: 100%;
        height:40px;
    }
    .marine_middle{
        
        margin-left:3px;
        background: url(${middle_marine});
        background-repeat: no-repeat;
        background-size: 100% 100%;
        
        width: 100%;
        height: 30px;
        display:flex;
        
    }
    .marine_text_middle{
        margin-left:40px;   
        margin-top:12px;
        font-family:'Soccer';
        font-size: 15px;
        
    }

    #marine_end{
        margin-left:3px;
        
        background: url(${end_marine});
        background-repeat: no-repeat;
        background-size: 100% 100%;
        
        width: 100%;
        height:40px;
        
    }


    #rev_top{
        margin-left:3px;
        
        background: url(${top_rev});
        background-repeat: no-repeat;
        background-size: 100% 100%;
        
        width: 100%;
        height:40px;
    }
    .rev_middle{
        
        margin-left:3px;
        background: url(${middle_rev});
        background-repeat: no-repeat;
        background-size: 100% 100%;
        
        width: 100%;
        height: 30px;
        display:flex;
        
    }
    .rev_text_middle{
        margin-left:40px;   
        margin-top:12px;
        font-family:'Soccer';
        font-size: 15px;
        
    }

    #rev_end{
        margin-left:3px;
        
        background: url(${end_rev});
        background-repeat: no-repeat;
        background-size: 100% 100%;
        
        width: 100%;
        height:40px;
        
    }

    #pirata_top{
        margin-left:3px;
        
        background: url(${top_pirata});
        background-repeat: no-repeat;
        background-size: 100% 100%;
        
        width: 100%;
        height:40px;
    }
    .pirata_middle{
        
        margin-left:3px;
        background: url(${middle_pirata});
        background-repeat: no-repeat;
        background-size: 100% 100%;
        
        width: 100%;
        height: 30px;
        display:flex;
        
    }
    .pirata_text_middle{
        margin-left:40px;   
        margin-top:12px;
        font-family:'Soccer';
        font-size: 15px;
        
    }

    #pirata_end{
        margin-left:3px;
        
        background: url(${end_pirata});
        background-repeat: no-repeat;
        background-size: 100% 100%;
        
        width: 100%;
        height:40px;
        
    }

    @media screen and (max-width: 764px) {
        .box_middle{
            flex-direction:column;
        }
        .rank{
            width: 250px;
        }
        #marine_end{
            margin-bottom: 15px;
        }
        #rev_end{
            margin-bottom: 15px;
        }
        #pirata_end{
            margin-bottom: 15px;
        }
    }
  
`;
