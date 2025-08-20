import EzCater from "../assets/ezcaterSubheader.png"
import styles from '../static/Subheader.module.css'
import { useLanguage } from '../context/LanguageContext.jsx';

export default function Subfooter() {
  const { language } = useLanguage();
  const translations = {
    en: {
      callUs: "CALL US:",
    },
    es: {
      callUs: "LLÁMANOS:",
    }
  };
  return (
    <>
      <div className={styles.subheader}>
        <nav className={styles.subheaderNav}>
          <ul>
            <li><a href= "tel:408-757-3311" className = {styles.paragraph}> {translations[language].callUs} (408) 757-3311 </a></li>
            <li><a className={styles.paragraph}>1255 W. El Camino Real, Sunnyvale, CA, 94087</a></li>
            <li><a href="https://www.instagram.com/lasminasguatecuisine/" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-instagram"></i>
            </a></li>
            <li><a href="https://www.facebook.com/people/Las-Minas-Guatemalan-Cuisine/61560650415767/" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-facebook"></i>
            </a></li>
            <li><a href="https://www.yelp.com/biz/las-minas-guatemalan-cuisine-sunnyvale-2?osq=Las+Minas+Guatemalan+Cuisine" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-yelp"></i>
            </a></li>
            <li><a href="https://www.ezcater.com/catering/pvt/las-minas-guatemalan-cuisine-3?fcv=1" target="_blank" rel="noopener noreferrer">
              <img src={EzCater} className={styles.logo} alt="EzCater logo"/>
            </a></li>
          </ul>
        </nav>
      </div>
    </>
  )
}
