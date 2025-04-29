import styles from '../static/Home.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Subfooter from '../components/Subfooter'
import Subheader from '../components/Subheader'
import Carousel from '../components/Carousel'

export default function Home() {

  return (
    <>
        <Subheader/>
        <Header />
        <Carousel/>
        
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