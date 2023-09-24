import './App.css';
import {useNavigate} from "react-router-dom";
import React, {useState, useEffect} from 'react'
import { useContext } from 'react';
import { P4Context } from './context4';
import { P5Context } from './context5';
import Tarjetas from './Tarjetas';

function Resultados() {
    const {contextDataB, setContextDataB} = useContext(P4Context);
    const Titulo = contextDataB;
    const {contextDataE, setContextDataE} = useContext(P5Context);

    const Fondos = [
        { nombre: 'Banorte Cete Fund', descripcion: 'Le permite obtener retornos adicionales sobre sus ahorros sin compromiso mínimo y la liquidez inmediata que necesita' },
        { nombre: 'Banorte Digital Fund', descripcion: 'Diseñado para inversores que buscan hacer crecer sus ahorros de forma completamente digital.'},
        { nombre: 'Banorte Term Fund', descripcion: 'Designed for investors looking to receive an additional reward for their commitment'  },
        { nombre: 'Banorte Dollar Fund', descripcion: 'Dirigido a inversionistas que buscan estabilidad y mejor protección del valor del peso frente al dólar estadounidense (USD)' },
        {nombre: 'Dollar Plus', descripcion: 'Le permite acceder a una estrategia de cobertura de moneda (peso  dólar) con retornos adicionales'},
        {nombre:'Fondo Estrategico', descripcion: 'Tiene una estrategia de selección de activos relativamente conservadora que le permite preservar y mejorar su patrimonio.'},
        {nombre:'Fondo Estratégico NTE1', descripcion:'Tiene una menor exposición a acciones, como acciones y ETF, y una mayor exposición a deuda'},
        {nombre:'Fondo Estratégico NTE2', descripcion:'Mantiene un equilibrio en la composición de su cartera, con una mayor exposición a Deuda y menor exposición a Renta Variable como acciones y ETF.'},
        {nombre:'Fondo Estrategico NT3', descripcion:'Invierte más en instrumentos de capital como acciones y ETF, y en menor medida en instrumentos de deuda.'},
        {nombre:'Banorte Fondo IPC+', descripcion:'Referenciado al Índice de Precios y Cotizaciones (IPC) de la Bolsa Mexicana de Valores.'}
        // Agrega más objetos según sea necesario
      ];

      console.log(contextDataE)
    return (

       
        
        <div className="App" >
        <div className="Top"><p>Fondos de Inversión</p></div>
        <img src="./pregunta.png" className="imagenpregunta"/>
        <h3>¡Éste es tu perfil!</h3>
        <div>
            {contextDataB === 0? (<h1>Conservador</h1>): (<h1></h1>)}
            {contextDataB === 1? (<h1>Balanceado</h1>): (<h1></h1>)}
            {contextDataB === 2? (<h1>Preservacion de Capital</h1>): (<h1></h1>)}
            {contextDataB === 3? (<h1>Crecimiento</h1>): (<h1></h1>)}
            {contextDataB === 4? (<h1>Balanceado</h1>): (<h1></h1>)}
            
        </div>
        <div class="divider3"></div>
        <div className="centrar">
        <p className="PTEXT">El fondo que mejor se adapta a ti es el siguiente: </p>
        <div className="CuadroPlan">
        <div>
        {contextDataE < 1.5 ? (<h1><span>FONDO</span>{Fondos[0].nombre}</h1>): <span></span>}
        {contextDataE < 1.5 ? (<p>{Fondos[0].descripcion}</p>): <span></span>}
        {contextDataE > 1.5 && contextDataE < 2.5? (<h1><span>FONDO </span>{Fondos[1].nombre}</h1>): <span></span>}
        {contextDataE > 1.5 && contextDataE < 2.5? (<p>{Fondos[1].descripcion}</p>): <span></span>}
        {contextDataE > 2.5 && contextDataE < 3.5? (<h1><span>FONDO </span>{Fondos[2].nombre}</h1>): <span></span>}
        {contextDataE > 2.5 && contextDataE < 3.5? (<p>{Fondos[2].descripcion}</p>): <span></span>}
        {contextDataE > 3.5 && contextDataE < 4.5? (<h1><span>FONDO </span>{Fondos[3].nombre}</h1>): <span></span>}
        {contextDataE > 3.5 && contextDataE < 4.5? (<p>{Fondos[3].descripcion}</p>): <span></span>}
        {contextDataE > 4.5 && contextDataE < 5.5? (<h1><span>FONDO </span>{Fondos[4].nombre}</h1>): <span></span>}
        {contextDataE > 4.5 && contextDataE < 5.5? (<p>{Fondos[4].descripcion}</p>): <span></span>}
        {contextDataE > 5.5 && contextDataE < 6.5? (<h1><span>FONDO </span>{Fondos[5].nombre}</h1>): <span></span>}
        {contextDataE > 5.5 && contextDataE < 6.5? (<p>{Fondos[5].descripcion}</p>): <span></span>}
        {contextDataE > 6.5 && contextDataE < 7.5? (<h1><span>FONDO </span>{Fondos[6].nombre}</h1>): <span></span>}
        {contextDataE > 6.5 && contextDataE < 7.5? (<p>{Fondos[6].descripcion}</p>): <span></span>}
        {contextDataE > 7.5 && contextDataE < 8.5? (<h1><span>FONDO </span>{Fondos[7].nombre}</h1>): <span></span>}
        {contextDataE > 7.5 && contextDataE < 8.5? (<p>{Fondos[7].descripcion}</p>): <span></span>}
        {contextDataE > 8.5 && contextDataE < 9.5? (<h1><span>FONDO </span>{Fondos[8].nombre}</h1>): <span></span>}
        {contextDataE > 8.5 && contextDataE < 9.5? (<p>{Fondos[8].descripcion}</p>): <span></span>}
        {contextDataE > 9.5 && contextDataE < 10.5? (<h1><span>FONDO </span>{Fondos[9].nombre}</h1>): <span></span>}
        {contextDataE > 9.5 && contextDataE < 10.5? (<p>{Fondos[9].descripcion}</p>): <span></span>}
        </div>
        <p>$50 de inversion minima</p>
        <p>Rendimiento: 8.69%</p>
        </div>
        </div>
        {<Tarjetas/>}
        </div>
        
    );
  }
  
  export default Resultados;
