import React from 'react';

import { Container } from './styles';

function anuncio() {
  return(
    <Container>
        <div className='box_anuncio'>
            <div className='box_anuncio_interno'>
                <p className='anuncio'>Anuncio Aqui</p>
            </div>
        </div>
    </Container>
  )
}

export default anuncio;