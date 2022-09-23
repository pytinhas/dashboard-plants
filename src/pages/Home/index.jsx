import React from 'react';
import './styles.css';

import { Sidebar } from '../../components/Sidebar'
import { Button } from '../../components/Button';

export function Home() { 
    return (
      <div class="page">
        <Sidebar />
        <div class="pagina-inicial">      
          <h1>Bem Vindo !!</h1>                         
            <Button estado="Entrar" />
        </div>
    </div>
    );
}