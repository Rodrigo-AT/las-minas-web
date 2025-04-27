import styles from '../static/Home.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Subfooter from '../components/Subfooter'
import Subheader from '../components/Subheader'

export default function Home() {

  return (
    <>
        <Subheader/>
        <Header />
        <div className= {styles.body}><h1>this is home</h1></div>
        <div style={{height: "1000px", background: "lightblue"}}></div>
        <Footer />
        <Subfooter/>
    </>
  )
}