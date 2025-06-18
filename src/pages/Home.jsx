import styles from '../static/Home.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Subfooter from '../components/Subfooter'
import Subheader from '../components/Subheader'
import shuco from '../assets/shuco.png'
import { useLanguage } from '../context/LanguageContext.jsx';

export default function Home() {
  const { language } = useLanguage();
  const translations = {
  en: {
    menuTitle: "Menu",
  },
  es: {
    menuTitle: "Menú",
  }
};
  return (
    <>
        <div className={styles.subheaderWrapper}>
          <Subheader />
        </div>
        <Header />
        <img className={styles.shuco} src={shuco} alt="shuco" />
        
        <div id="menu">
          <div className= {styles.body}><h1>{translations[language].menuTitle}</h1></div>
        </div>
        
        <div id="contact">
        <Footer />
        </div>
        <Subfooter/>
    </>
  )
}