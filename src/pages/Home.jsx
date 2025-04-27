import styles from '../static/Home.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Subfooter from '../components/Subfooter'
import sandwich from '../assets/file.svg'
import Subheader from '../components/Subheader'

export default function Home() {

  return (
    <>
        <Subheader/>
        <Header />
        <section aria-label="Signature Dishes">

          <div className="carousel">
            <button className="carousel-button prev">&#8249;</button>
            <button className="carousel-button next">&#8250;</button>
            <ul>
              <li className="slide">
                <img src={sandwich} alt="sig1"/>
              </li>

              <li className="slide">
                <img src={sandwich} alt="sig2"/>
              </li> 

              <li className="slide">
                <img src={sandwich} alt="sig3"/>
              </li>
            </ul>
          </div>

        </section>
        <div className= {styles.body}><h1>this is home</h1></div>
        
        <div id="menu">
          <h2>Menu</h2>
          <p>Some content here...</p>
        </div>
        <Footer />
        <Subfooter/>
    </>
  )
}