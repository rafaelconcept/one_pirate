import React from 'react';
import icon_ok from '../../layout/icon_ok.png';
import icon_not from '../../layout/icon_not.png';
import { Container } from './styles';

/*

function Parent() {
    const [value, setValue] = React.useState("");

    function handleChange(newValue) {
      setValue(newValue);
    }

    // We pass a callback to Child
    return <Child value={value} onChange={handleChange} />;
}

----------------------------

function Child(props) {
    function handleChange(event) {
        // Here, we invoke the callback with the new value
        props.onChange(event.target.value);
    }
  
    return <input value={props.value} onChange={handleChange} />
}

*/



function menu_lateral_off(props) {

    function handleChange(pagina) {
        // Here, we invoke the callback with the new value
        props.action(pagina);
    }

  return(
    <Container>
        <div className="menu">
            <div className="esquerdo">
                <div className='bg_titulo'>

                    <p className='titulo'>PRICIPAL</p>

                </div>
                <div className='div_opcao'>
                <a onClick={()=>handleChange('home')}>
                    <div className="opcao">
                        <img className='icon' src={icon_not} alt=""/>
                        
                            <p className='nome_opcao'>Home</p>
                        
                    </div>
               
                    <div className='barra_inferior'></div>
                </a>
                </div>
                <div className='div_opcao'>
                <a onClick={()=>handleChange('cadastro')}>
                    <div className="opcao">
                        <img className='icon' src={icon_ok} alt=""/>
                       
                            <p className='nome_opcao'>Cadastro</p>
                        
                        
                    </div>
                    <div className='barra_inferior'></div>
                    </a>
                </div>
                <div className='div_opcao'>
                <a onClick={()=>handleChange('sobre')}>
                    <div className="opcao">
                        <img className='icon' src={icon_not} alt=""/>
                       
                            <p className='nome_opcao'>Sobre</p>
                       
                        
                    </div>
                    <div className='barra_inferior'></div>
                    </a>
                </div>
                <div className='div_opcao'>
                <a onClick={()=>handleChange('noticias')}>
                    <div className="opcao">
                        <img className='icon' src={icon_not} alt=""/>
                        
                            <p className='nome_opcao'>Noticias</p>
                        
                       
                    </div>
                    <div className='barra_inferior'></div>
                    </a>
                </div>
                <div className='div_opcao'>
                <a onClick={()=>handleChange('midias')}>
                    <div className="opcao">
                        <img className='icon' src={icon_not} alt=""/>
                        
                            <p className='nome_opcao'>Midias</p>
                        
                        
                    </div>
                    <div className='barra_inferior'></div>
                    </a>
                </div>
                <div className='div_opcao'>
                <a onClick={()=>handleChange('ajude')}>
                    <div className="opcao">
                        <img className='icon' src={icon_not} alt=""/>
                        
                            <p className='nome_opcao'>Ajude</p>
                        
                        
                    </div>
                    <div className='barra_inferior'></div>
                 </a>
                </div>
            </div>
            <div className="barra"></div>
        </div>
    </Container>
  )
}

export default menu_lateral_off;