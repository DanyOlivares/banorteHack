import './App.css';
import {useNavigate} from "react-router-dom";
import { useContext } from 'react';
import { P1Context } from './context1';

function Pregunta2() {
    let navigate = useNavigate();
    const {contextData, setContextData} = useContext(P1Context);
    return (
        <form >
        <div className="Top"><p>Fondos de Inversión</p></div>
        <div className="App" >

        <img className="imagenpregunta" src="/pregunta.png"/>
        <h1>¿Cual es tu actividad económica?</h1>
        <div class="divider2"></div>
        <div className="Preguntas">
        <label className="labelradio">
        <input type="radio" name="primero"/>Comerciante
        </label>
        
        <label className="labelradio">
        <input type="radio" name="primero"/>Profesionista independiente
        </label>

        <label className="labelradio"> 
        <input type="radio" name="primero"/>Profesionista asalariado
        </label>

        <label className="labelradio"> 
        <input type="radio" name="primero"/>Jubilado o pensionado
        </label>

        <label className="labelradio"> 
        <input type="radio" name="primero"/>Otros
        </label>
        <h1>{contextData}</h1>
        </div>
      
        <input type="submit" onClick={(e) => {
                  e.preventDefault();
                  navigate('/Pregunta3');
                  }} className="boton35" value="Siguiente"/>
        
      </div>
      </form>
      
    );
  }
  
  export default Pregunta2;