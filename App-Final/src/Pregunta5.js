import './App.css';
import {useNavigate} from "react-router-dom";

function Pregunta4() {
    let navigate = useNavigate();
    return (
        <form >
        <div className="Top"><p>Fondos de Inversión</p></div>
        <div className="App" >

        <img className="imagenpregunta" src="/pregunta.png"/>
        <h1>¿El dinero que invertirás de donde proviene?</h1>
        <div class="divider2"></div>
        <div className="Preguntas">
        <label className="labelradio">
        <input type="radio" name="primero"/>Pension
        </label>
        
        <label className="labelradio">
        <input type="radio" name="primero"/>Sueldo
        </label>

        <label className="labelradio"> 
        <input type="radio" name="primero"/>Utilidad de negocio propio
        </label>

        <label className="labelradio"> 
        <input type="radio" name="primero"/>Venta de inmueble, herencia, etc.
        </label>

        
       
        </div>
      
        <input type="submit" onClick={(e) => {
                  e.preventDefault();
                  navigate('/Pregunta6');
                  }} className="boton37" value="Siguiente"/>
        
      </div>
      </form>
      
    );
  }
  
  export default Pregunta4;