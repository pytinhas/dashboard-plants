import React from 'react';
import './styles.css';

import { Sidebar } from '../../components/Sidebar'


export function About() { 
    return (
      <div class="page">
        <Sidebar />
        <div class="pagina-sobre">      
          <h1>Sobre</h1>            
        </div>
    </div>
    );
}