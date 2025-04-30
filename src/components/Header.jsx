import styles from '../static/Header.module.css'
import logo from '../assets/LasMinas_Logo.svg'

export default function Header() {

  return (
    <>
      <div className={styles.header}>
        <nav className={styles.navigation}>
          <a href="home">
            <img src={logo} className={styles.logo} alt="Las Minas logo"/>
          </a>
          <ul>
            <li><a href="home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="about">Our Story</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </>
  )
}