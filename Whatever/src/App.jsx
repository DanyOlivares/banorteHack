import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Reset.css'
import './App.css'
import API from './API.jsx'
import Header from './Header.jsx'
import Tarjeta from './tarjetas.jsx'

function App() {
 
  let cont = `
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam dolorum reprehenderit accusantium voluptatibus! Vitae, ipsam. Et, possimus! Qui, at? Ea similique ducimus atque adipisci, aspernatur eligendi incidunt aliquid molestiae.
Libero est atque eligendi odio molestias similique voluptates reiciendis dignissimos dolore debitis sunt impedit odit alias assumenda consequuntur velit laudantium, dolores magni. Aspernatur adipisci tempora mollitia vitae fugit optio ipsum!
Adipisci soluta explicabo repellendus sit eius magni? Impedit distinctio, possimus nobis pariatur ex quasi hic doloremque ut. Ipsum eum quibusdam neque debitis quam rem velit praesentium quae sed porro? Voluptas.
  `
  return (
    <>
      <Header/>
      {/* <API/> */}
      <Tarjeta />
    </>
  )
}

export default App
