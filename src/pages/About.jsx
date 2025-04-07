import styles from '../static/About.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Subfooter from '../components/Subfooter'

export default function About() {

  return (
    <>
        <Header />
        <div className= {styles.body}><h1>this is about</h1></div>
        <Footer />
        <Subfooter />
    </>
  )
}