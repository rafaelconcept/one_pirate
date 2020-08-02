import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './pages/index.js'
import Home from './pages/home/home.js'

// import { Container } from './styles';

export default function src() {
  return(
      <BrowserRouter>
        <Route exact path='/' component={Main} />
        <Route path='/home' component={Home} />
      </BrowserRouter>
    
    )
}

