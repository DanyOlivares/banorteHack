import './App.css';
import {useNavigate} from "react-router-dom";
import React, {useState, useEffect} from 'react'
import { useContext } from 'react';
import { P1Context } from './context1';


function Pregunta1() {
    let navigate = useNavigate();
    
    const {contextDataP, setContextDataP} = useContext(P1Context);

    const handleRadioChange = (event) => {
      //setContextDataP(event.target.value)
      console.log(contextDataP)
    }

    return (
        <form >
        <div className="Top"><p>Fondos de Inversión</p></div>
        <div className="App" >

        <img className="imagenpregunta" src="/pregunta.png"/>
        <h1>¿Cual es tu principal objetivo?</h1>
        <div class="divider2"></div>
        <div className="Preguntas">

        <label className="labelradio">
        <input type="radio" name="primero" value="1" onChange={(event) => setContextDataP(event.target.value)} />Tener un fondo de emergencia
        </label>

        <label className="labelradio2">Tener un respaldo para imprevistos</label>
        <label className="labelradio">
        <input type="radio" name="primero" value="2" onChange={(event) => setContextDataP(event.target.value)}/>Construir mi patrimonio
        </label>

        <label className="labelradio2">Incrementar mi ahorro para comprar una vivienda, iniciar un negocio, etc.</label>
        <label className="labelradio"> 
        <input type="radio" name="primero" value="3" onChange={(event) => setContextDataP(event.target.value)}/>Invertir para mi retiro
        </label>
        <label className="labelradio2">Mantener un buen estilo de vida para el futuro</label>
        
        <label className="labelradio"> 
        <input type="radio" name="primero" value="4" onChange={(event) => setContextDataP(event.target.value)}/>Inversión Internacional
        </label>
        
        <label className="labelradio2">Resguardar el dinero en dolares</label>
        <label className="labelradio"> 
        
        <input type="radio" name="primero" value="5" onChange={(event) => setContextDataP(event.target.value) }/>Invertir en la bolsa Mexicana
        </label>
        </div>
        
        <input type="submit" onClick={(e) => {
                  e.preventDefault();
                  navigate('/Pregunta2');
                  }} className="boton3" value="Siguiente"/>

        
        
      </div>
      </form>
      
    );
  }
  
  export default Pregunta1;