import './App.css';
import {useNavigate} from "react-router-dom";
import { useContext } from 'react';
import { P3Context } from './context3';
import { P1Context } from './context1';
import { P2Context } from './context2';
import React, {useState, useEffect} from 'react'
import { P4Context } from './context4';
import { P5Context } from './context5';


function Pregunta7() {

    let navigate = useNavigate();

    const {contextDataP, setContextDataP} = useContext(P1Context);
    const {contextDataC, setContextDataC} = useContext(P2Context);
    const {contextDataA, setContextDataA} = useContext(P3Context);
    const {contextDataB, setContextDataB} = useContext(P4Context);
    const {contextDataE, setContextDataE} = useContext(P5Context);

    const DataP = contextDataP;
    const DataC = contextDataC;
    const DataA = contextDataA;

    const[data,setData] = useState(null);

    const handleRadioChange = (event) => {
        setContextDataA(event.target.value);
        
    }
    
    const fetchData = () => {
        const objetos = [
            { nombre: 'Conservador' },
            { nombre: 'Balanceado' },
            { nombre: 'Preservacion de Capital' },
            { nombre: 'Crecimiento' },
            {nombre: 'Moderado'}
            // Agrega más objetos según sea necesario
          ];
        
          // Genera un número aleatorio para seleccionar un índice
          const indiceAleatorio = Math.floor(Math.random() * objetos.length);
          if(indiceAleatorio == 0){
            indiceAleatorio=1;
          }
          setContextDataB(indiceAleatorio)
          // Accede al objeto aleatorio en el arreglo
          //const objetoAleatorio = objetos[indiceAleatorio];

      
        // URL de la API a la que deseas hacer la solicitud GET
        const apiUrl = `http://127.0.0.1:5000/index?num1=${indiceAleatorio}&num2=${DataC}&num3=${DataA}&num4=${DataP}`;
        
        console.log(apiUrl);
        // Hacer la solicitud GET usando fetch
        fetch(apiUrl)
          .then(response => {
            if (!response.ok) {
              throw new Error('La solicitud no fue exitosa');
            }
            return response.json(); // Parsear la respuesta a JSON
          })
          .then(data => {
            // Hacer algo con los datos obtenidos
            setContextDataE(data['res'])
            console.log('Datos de la API:', contextDataE);
          })
          .catch(error => console.error('Error al obtener datos:', error));
        }

    return (
        <form >
        <div className="Top"><p>Fondos de Inversión</p></div>
        <div className="App" >

        <img className="imagenpregunta" src="/pregunta.png"/>
        <h1>¿Cuál es tu grado de tolerancia al riesgo y la pérdida?</h1>
        <div class="divider2"></div>
        <div className="Preguntas">
        
        
        <label className="labelradio">
        <input type="radio" name="primero" value="1" onChange={handleRadioChange}/>Prefiero el mas minimo riesgo
        </label>

        <label className="labelradio">
        <input type="radio" name="primero" value="2" onChange={handleRadioChange}/>Riesgo bajo capaz de asumir
        </label>

        

        <label className="labelradio">
        <input type="radio" name="primero" value="3" onChange={handleRadioChange}/>Riesgo Moderado, no muy alto
        </label>

        <label className="labelradio">
        <input type="radio" name="primero" value="4" onChange={handleRadioChange}/>Riesgo alto asumo los riesgos
        </label>

        <label className="labelradio">
        <input type="radio" name="primero" value="5" onChange={handleRadioChange}/>Riesgo muy alto, mayor ganancia
        </label>
       

        
        </div>
      
        <input type="submit" onClick={(e) => {
                  e.preventDefault();
                  fetchData();
                  navigate('/Resultados');
                  }} className="boton39" value="Finalizar"/>
        
      </div>
      </form>
      
    );
  }
  
  export default Pregunta7;