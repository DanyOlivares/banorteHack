import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'

//import logo192 from './logo512.png'
import Inicio from './Inicio.js'
import Formulario from './Formulario.js'
import Pregunta1 from './Pregunta1.js'
import Pregunta2 from './Pregunta2.js'
import Pregunta3 from './Pregunta3.js'
import Pregunta4 from './Pregunta4.js'
import Pregunta5 from './Pregunta5.js'
import Pregunta6 from './Pregunta6.js'
import Pregunta7 from './Pregunta7.js'
import Resultados from './Resultados'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/Formulario" element={<Formulario/>} />
        <Route path="/Pregunta1" element={<Pregunta1/>} />
        <Route path="/Pregunta2" element={<Pregunta2/>} />
        <Route path="/Pregunta3" element={<Pregunta3/>} />
        <Route path="/Pregunta4" element={<Pregunta4/>} />
        <Route path="/Pregunta5" element={<Pregunta5/>} />
        <Route path="/Pregunta6" element={<Pregunta6/>} />
        <Route path="/Pregunta7" element={<Pregunta7/>} />
        <Route path="/Resultados" element={<Resultados/>}/>
      </Routes>
  </Router>
    
  );
}

export default App;
