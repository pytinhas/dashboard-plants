import { Sidebar } from '../../components/Sidebar'
import { Button } from '../../components/Button';
import './styles.css';

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