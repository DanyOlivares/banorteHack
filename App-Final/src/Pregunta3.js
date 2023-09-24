import './App.css';
import {useNavigate} from "react-router-dom";

function Pregunta3() {
    let navigate = useNavigate();
    return (
        <form >
        <div className="Top"><p>Fondos de Inversión</p></div>
        <div className="App" >

        <img className="imagenpregunta" src="/pregunta.png"/>
        <h1>¿Cual es tu ultimo grado de estudios?</h1>
        <div class="divider2"></div>
        <div className="Preguntas">
        <label className="labelradio">
        <input type="radio" name="primero"/>Sin escolaridad
        </label>
        
        <label className="labelradio">
        <input type="radio" name="primero"/>Primaria
        </label>

        <label className="labelradio"> 
        <input type="radio" name="primero"/>Secundaria
        </label>

        <label className="labelradio"> 
        <input type="radio" name="primero"/>Preparatoria
        </label>

        <label className="labelradio"> 
        <input type="radio" name="primero"/>Tecnica/Comercial
        </label>
        <label className="labelradio"> 
        <input type="radio" name="primero"/>Licenciatura
        </label>
       
        </div>
      
        <input type="submit" onClick={(e) => {
                  e.preventDefault();
                  navigate('/Pregunta4');
                  }} className="boton34" value="Siguiente"/>
        
      </div>
      </form>
      
    );
  }
  
  export default Pregunta3;