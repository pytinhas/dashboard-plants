import React from 'react';
import './styles.css';

import { Sidebar } from '../../components/Sidebar'


export function Contato() { 
    return (
      <div class="page">
        <Sidebar />
        <div class="pagina-contato">      
          <h1>Contato</h1>            
        </div>
    </div>
    );
}