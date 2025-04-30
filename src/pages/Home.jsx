import styles from '../static/Home.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Subfooter from '../components/Subfooter'
import Subheader from '../components/Subheader'
import shuco from '../assets/shuco.png'

export default function Home() {

  return (
    <>
        <Subheader/>
        <Header />
        <img className={styles.shuco} src={shuco} alt="shuco" />
        
        <div id="menu">
          <div className= {styles.body}><h1>Menu</h1></div>
        </div>
        
        <div id="contact">
        <Footer />
        </div>
        <Subfooter/>
    </>
  )
}