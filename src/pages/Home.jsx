import styles from '../static/Home.module.css'
import Header from '../components/Header'

export default function Home() {

  return (
    <>
        <Header />
        <div className= {styles.body}><h1>this is home</h1></div>
        <div style={{ height: "1000px", background: "#f0f0f0" }}></div>
    </>
  )
}