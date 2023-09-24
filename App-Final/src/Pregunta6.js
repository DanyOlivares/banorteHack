import './App.css';
import {useNavigate} from "react-router-dom";
import { useContext } from 'react';
import { P2Context } from './context2';

function Pregunta6() {
    let navigate = useNavigate();
    const {contextDataC, setContextDataC} = useContext(P2Context);

    const handleRadioChange = (event) => {
        setContextDataC(event.target.value)
    }

    return (
        <form >
        <div className="Top"><p>Fondos de Inversión</p></div>
        <div className="App" >

        <img className="imagenpregunta" src="/pregunta.png"/>
        <h1>¿Cuanto tiempo esperarías para recibir las ganancias de tu inversión?</h1>
        <div class="divider2"></div>
        <div className="Preguntas">
        
        
        <label className="labelradio">
        <input type="radio" name="primero" value="1" onChange={handleRadioChange}/>Menos de 60 días
        </label>
        <label className="labelradio2">(Corto plazo)</label>
        <label className="labelradio">
        <input type="radio" name="primero" value="2" onChange={handleRadioChange}/>1 año
        </label>
        <label className="labelradio2">(Mediano plazo)</label>
        <label className="labelradio"> 
        <input type="radio" name="primero" value="3" onChange={handleRadioChange}/>Dentro de dos años o mas
        </label>
        <label className="labelradio2">(Largo plazo)</label>
        
       

    
        </div>
      
        <input type="submit" onClick={(e) => {
                  e.preventDefault();
                  navigate('/Pregunta7');
                  }} className="boton38" value="Siguiente"/>

    
        
      </div>
      </form>
      
    );
  }
  
  export default Pregunta6;