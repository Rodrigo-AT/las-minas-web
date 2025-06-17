import styles from '../static/Error404.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Subfooter from '../components/Subfooter'
import Subheader from '../components/Subheader'

export default function Error404() {

  return (
    <>
        <div className={styles.subheaderWrapper}>
          <Subheader />
        </div>
        <Header />
        <div className= {styles.body}><h1>ERROR 404: Page not Found</h1></div>
        <Footer />
        <Subfooter/>
    </>
  )
}