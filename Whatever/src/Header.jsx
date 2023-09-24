import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Header() {
  const [message, setMessage] = useState("")
  const [showMessage, setshowMessage] = useState(false)
  const [mensaje, setMensaje] = useState("")


  return (
    <>
        <header>
            <nav>
                <ul>
                    <li>
                        <div className="imagen">
                            <img width="100%"src="/Banorte.png"/>    
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
     
    </>
  )
}

export default Header
