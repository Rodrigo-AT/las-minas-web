import { useState } from 'react'
import './App.css'
import logo from './assets/LasMinas_Logo.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      // this is header
      <div className="header">
        <nav>
          <img src={logo} className="logo" alt="Las Minas logo" />
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#about">Our Story</a></li>
          </ul>
        </nav>
      </div>
      

    </>
  )
}

export default App
