import styles from '../static/About.module.css'
import Header from '../components/Header'

export default function About() {

  return (
    <>
        <Header />
        <div className= {styles.body}><h1>this is about</h1></div>
    </>
  )
}