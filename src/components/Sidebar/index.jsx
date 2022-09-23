import { ButtonSidebar } from '../ButtonSidebar';
import './styles.css';

export function Sidebar() { 

  return (
    <div class="page">
      <aside>
        <div class="logo">
          <img src="https://avatars.githubusercontent.com/u/112397871?s=200&v=4" />
          <span>Organization</span>
        </div>
        
          <ButtonSidebar estado="Home" />
          <ButtonSidebar estado="Sobre" />
          <ButtonSidebar estado="Contato" />                   
        
      </aside>
    </div>
  )
}