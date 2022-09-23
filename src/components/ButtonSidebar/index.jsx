import {useNavigate} from 'react-router-dom';
import './styles.css';

export function ButtonSidebar(props) {

  const navigate = useNavigate(); 
  
  function MudarPagina() {
    
    if(props.estado == 'Home')
      navigate('../') 
      
    if(props.estado == 'Sobre')
      navigate('../About')
      
      if(props.estado == 'Contato')
      navigate('../Contato') 
  }

  return (
    <>
      <button class="btn" onClick={MudarPagina}>
        {props.estado}             
      </button>    
    </>
  )
}