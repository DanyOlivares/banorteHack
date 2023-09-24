import './App.css';
import {useNavigate} from "react-router-dom";

function App() {
    let navigate = useNavigate();
    return (
        
        <div className="App" >
        <img className="hola" src="/imagenhack.png" alt="img"/>
        
        <h1>Conoce nuestro Perfilador</h1>
        <div class="divider"></div>
        <p>Con esta herramienta encontramos las opciones de inversion mas convenientes para ti, de acuerdo a tu perfil y objetivos.</p>
        <p>Únicamente responde las siguientes preguntas.</p>
        <input type="submit" onClick={(e) => {
                  e.preventDefault();
                  navigate('/Pregunta1');
                  }} className="boton2" value="Comenzar"/>
      
        <input type="submit" onClick={(e) => {
                  e.preventDefault();
                  navigate('/Formulario');
                  }} className="boton21" value="Menu"/>
        
      </div>
      
    );
  }
  
  export default App;
