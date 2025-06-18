import styles from '../static/Order.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Subfooter from '../components/Subfooter'
import Subheader from '../components/Subheader'
import { useLanguage } from '../context/LanguageContext.jsx';

export default function Order() {
    const { language } = useLanguage();
    const translations = {
        en: {
            orderInfo: "Click the links below to order for pickup or delivery."
        },
        es: {
            orderInfo: "Haga clic en los enlaces a continuación para ordenar para recoger o entrega."
        }
    };
    
    return (
    <>
        <div className={styles.subheaderWrapper}>
          <Subheader />
        </div>
        <Header />
        <div className= {styles.body}><h1>{translations[language].orderInfo}</h1></div>
        <div id="contact">
            <Footer />
        </div>
        <Subfooter/>
    </>
  )
}