import { Sidebar } from '../../components/Sidebar';
import './styles.css';

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