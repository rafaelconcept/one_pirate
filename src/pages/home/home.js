import React from 'react';
import Anuncio from '../../components/anuncio/index';


import { Container } from './home_css';
import { Box1 } from '../../layout/box/box1_css';
function home() {
  return(
      <Container>

        <Anuncio/>
        <Box1>
          <div className='box_all'>
            <div className='box_title'>
              <p className='text_box_title'>Rank Geral</p>
            </div>
            <div className='box_middle'>


            <div className="rank">
              <div id='marine_top'></div>
              <div class="marine_middle"><p className='marine_text_middle'>Garp1</p></div>
              <div class="marine_middle"><p className='marine_text_middle'>Garp2</p></div>
              <div class="marine_middle"><p className='marine_text_middle'>Garp3</p></div>
              <div class="marine_middle"><p className='marine_text_middle'>Garp4</p></div>
              <div class="marine_middle"><p className='marine_text_middle'>Garp5</p></div>
              <div id='marine_end'></div>
            </div>

            <div className="rank">
              <div id='rev_top'></div>
              <div class="rev_middle"><p className='rev_text_middle'>Dragon1</p></div>
              <div class="rev_middle"><p className='rev_text_middle'>Dragon2</p></div>
              <div class="rev_middle"><p className='rev_text_middle'>Dragon3</p></div>
              <div class="rev_middle"><p className='rev_text_middle'>Dragon4</p></div>
              <div class="rev_middle"><p className='rev_text_middle'>Dragon5</p></div>
              <div id='rev_end'></div>
            </div>

            <div className="rank">
              <div id='pirata_top'></div>
              <div class="pirata_middle"><p className='pirata_text_middle'>Luffy1</p></div>
              <div class="pirata_middle"><p className='pirata_text_middle'>Luffy2</p></div>
              <div class="pirata_middle"><p className='pirata_text_middle'>Luffy3</p></div>
              <div class="pirata_middle"><p className='pirata_text_middle'>Luffy4</p></div>
              <div class="pirata_middle"><p className='pirata_text_middle'>Luffy5</p></div>
              <div id='pirata_end'></div>
            </div>



            </div>
            <div className="box_end"></div>
          </div>
        </Box1>
      </Container>
  );
}

export default home;