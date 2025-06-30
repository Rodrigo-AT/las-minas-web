import styles from '../static/Error404.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Subfooter from '../components/Subfooter'
import Subheader from '../components/Subheader'
import { useLanguage } from '../context/LanguageContext.jsx';

export default function Error404() {

  const { language, setLanguage } = useLanguage();
  
  const translations = {
    en: {
      errorMessage: "Error 404: Page Not Found"
    },
    es: {
      errorMessage: "Error 404: Página no disponible",
    }
  };

  return (
    <>
        <div className={styles.subheaderWrapper}>
          <Subheader />
        </div>
        <Header />
        <div className= {styles.body}><h1>{translations[language].errorMessage}</h1></div>
        <Footer />
        <Subfooter/>
    </>
  )
}