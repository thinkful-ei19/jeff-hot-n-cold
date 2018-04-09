import React from 'react';
import Header from './header';
import Hawt from './guess';

export default function Game(){
  return(
    <div className="main">
    <Header/>

    <div className="GameBox">
    <Hawt/>
      
    </div>
    </div>
  )
}


