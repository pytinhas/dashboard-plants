import React from 'react';
import './styles.css';

import { Sidebar } from '../../components/Sidebar'
import { Button } from '../../components/Button';

export function Off() { 
    return (
      <div class="page">
        <Sidebar />
        <div class="waterPump">
          <h1>Dashboard Plants</h1>         
          <img src="../src/assets/lampada.png" alt="" />                
          <Button estado="ON" />                               
        </div>
    </div>
    );
}


  
