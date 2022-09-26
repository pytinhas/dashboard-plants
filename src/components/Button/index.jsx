import {useNavigate} from 'react-router-dom';
import './styles.css';

export function Button(props) {  

  const navigate = useNavigate();

  function MudarPagina() {
    if (props.estado == "ON") {        
      navigate('../On')         
    }else {
      navigate('../Off')
    }
  }    

  return (
    <>
      <button onClick={MudarPagina}>      
        {props.estado}        
      </button>    
    </>
  )
}