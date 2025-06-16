import { useState } from 'react';
import styles from '../static/Header.module.css'
import logo from '../assets/LasMinas_Logo.svg'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className={styles.header}>
        <nav className={styles.desktopNav}>
          <a href="home">
            <img src={logo} className={styles.logo} alt="Las Minas logo"/>
          </a>
          <ul>
            <li><a href="home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="about">Our Story</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#contact">Location / Hours</a></li>
          </ul>
        </nav>

        <nav className={styles.mobileNav}>
          <a href="home">
            <img src={logo} className={styles.logo} alt="Las Minas logo"/>
          </a>

          <button className="hamMenu"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Open menu">
          <i className="fa-solid fa-bars"></i>
          </button>

          <div className={`${styles.offScreenMenu} ${menuOpen ? styles.active : ''}`}>
            <ul>
              <li><a href="home">Home</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="about">Our Story</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#contact">Location / Hours</a></li>
            </ul>
          </div>

          
          
        </nav>
      </div>
    </>
  )
}