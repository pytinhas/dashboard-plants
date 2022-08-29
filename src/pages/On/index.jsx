import React, { useEffect, useState} from 'react';
import axios from 'axios';
import './styles.css';

import { Button} from '../../components/Button';

export function On() {

  const url = "http://localhost:5500/api"

  const [values, setValues] = useState([])

  useEffect(() => {
    axios.get(url)
      .then((response) => {
        setValues(response.data.climate)        
      })
      .catch(() => {
        console.log('Deu ERRADO')
      })
  }, [])

  return (
    <>
      <header>
        <h1>Dashboard Plants</h1>
      </header>

      <div class="container">        
        <div >
          <p class="title">Temperature</p>
          <img src="../src/assets/termometro1.png" />
          <p id="apiResult">
           {values.temperature}
          </p>
      </div>        

      <div>
        <p class="title">Humidity</p>
        <img src="../src/assets/gota.png" alt="" />
        <p id="apiResult">
          {values.humidity}
        </p>
      </div>

      <div>
        <p class="title">Sun</p>
        <img src="../src/assets/sol.png" alt="" />
        <p id="apiResult">
          {values.sun}
        </p>
      </div>

      <div>
        <p class="title">WaterPump</p>
        <img src="../src/assets/lampada.png" alt="" />
        <br></br>  
        <Button estado="OFF" />      
      </div>
        
    </div>      
  </>
  )
}




