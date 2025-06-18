import styles from '../static/Home.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Subfooter from '../components/Subfooter'
import Subheader from '../components/Subheader'
import { useLanguage } from '../context/LanguageContext.jsx';

export default function Home() {
  const { language } = useLanguage();
  const totalPages = 7;
  const skipPages = [1,2];

  const pagesToShow = [...Array(totalPages).keys()]
    .map(i => i + 1) // page numbers 1-based
    .filter(pageNum => !skipPages.includes(pageNum));

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
        
        <div id="menu">
          {/* MENU CATEGORY START*/}

          {/* MENU CATEGORY END*/}

          <div className= {styles.body}><h1>{translations[language].menuTitle}</h1></div>

          {pagesToShow.map(pageNum => (
            <img
              key={pageNum}
              src={`/menu/${language}/page${pageNum}.png`}
              alt={`Menu page ${pageNum}`}
              className={styles.menuImage}
            />
          ))}
        </div>

        
        <div id="contact">
        <Footer />
        </div>
        <Subfooter/>
    </>
  )
}