import './App.css';
import {useNavigate} from 'react-router-dom'

function Formulario() {

    let navigate = useNavigate();
    return (
        
        <div className="App" >
        <img className="hola" src="/imagenhack.png" alt="img"/>
        
        <h1>Conoce nuestro Perfilador</h1>
        <div class="divider"></div>
        <p>Con esta herramienta encontramos las opciones de inversion mas convenientes para ti, de acuerdo a tu perfil y objetivos.</p>
        <p>Únicamente responde las siguientes preguntas.</p>
        <button className="boton"><h3>Comenzar</h3></button>
       
        <input type="submit" onClick={(e) => {
                  e.preventDefault();
                  navigate('/');
                  }} className="boton2" value="Regresar"/>
        
      </div>
      
    );
  }
  
  export default Formulario;