import './App.css';
import {useNavigate} from "react-router-dom";

function Pregunta4() {
    let navigate = useNavigate();
    return (
        <form >
        <div className="Top"><p>Fondos de Inversión</p></div>
        <div className="App" >

        <img className="imagenpregunta" src="/pregunta.png"/>
        <h1>¿Que porcentaje de tus ahorros destinarás a tu inversión?</h1>
        <div class="divider2"></div>
        <div className="Preguntas">
        <label className="labelradio">
        <input type="radio" name="primero"/>Menos del 25%
        </label>
        
        <label className="labelradio">
        <input type="radio" name="primero"/>Entre 25% y 50%
        </label>

        <label className="labelradio"> 
        <input type="radio" name="primero"/>Entre 50% y 75%
        </label>

        <label className="labelradio"> 
        <input type="radio" name="primero"/>Mas del 75%
        </label>

        
       
        </div>
      
        <input type="submit" onClick={(e) => {
                  e.preventDefault();
                  navigate('/Pregunta5');
                  }} className="boton36" value="Siguiente"/>
        
      </div>
      </form>
      
    );
  }
  
  export default Pregunta4;