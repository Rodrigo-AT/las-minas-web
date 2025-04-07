import styles from '../static/Menu.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Subfooter from '../components/Subfooter'

export default function Menu() {

  return (
    <>
        <Header />
        <div className= {styles.body}><h1>this is menu</h1></div>
        <div style={{ height: "1000px", background: "#f0f0f0" }}></div>
        <Footer />
        <Subfooter />
    </>
  )
}