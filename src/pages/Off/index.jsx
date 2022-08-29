import React from 'react';
import './styles.css';
import { Button } from '../../components/Button';

export function Off() { 
    return (
      <>
        <h1>Bem Vindo !!</h1>      
        <div class="waterPump">      
          <img src="../src/assets/lampada.png" alt="" />
          <br></br>          
            <Button estado="ON" />
        </div>
    </>
    );
}


  
