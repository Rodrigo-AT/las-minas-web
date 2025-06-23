import { useState } from 'react';
import styles from '../static/Header.module.css'
import logo from '../assets/LasMinas_Logo.svg'
import { useLanguage } from '../context/LanguageContext.jsx';


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const { language, setLanguage } = useLanguage();

  const translations = {
    en: {
      home: "Home",
      menu: "Menu",
      ourStory: "Our Story",
      contactUs: "Visit Us",
      locationHours: "Location / Hours",
      orderButton: "ORDER ONLINE"
    },
    es: {
      home: "Inicio",
      menu: "Menú",
      ourStory: "Quiénes somos",
      contactUs: "Visítanos",
      locationHours: "Ubicación / Horario",
      orderButton: "ORDENA AHORA"
    }
  };

  const toggleMenu = () => {
    if (buttonDisabled) return;           // ignore if disabled

    setMenuOpen(prev => !prev);
    setButtonDisabled(true);

    setTimeout(() => {
      setButtonDisabled(false);
    }, 400);  // duration slightly longer than your CSS transition (e.g., 300ms)
  };

  return (
    <>
      <div className={styles.header}>
        <nav className={styles.desktopNav}>
          <a href="home">
            <img src={logo} className={styles.logo} alt="Las Minas logo"/>
          </a>
          <ul>
            <li><a href="home">{translations[language].home}</a></li>
            <li><a href="/home#menu">{translations[language].menu}</a></li>
            <li><a href="about">{translations[language].ourStory}</a></li>
            <li><a href="#contact">{translations[language].contactUs}</a></li>
            <li>
              <button 
              onClick={() => setLanguage(language === 'en' ? 'es' : 'en')} 
              className={styles.langButton}
              >
              {language === 'en' ? '🇬🇹' : '🇺🇸'}
              </button>
            </li>
            <li><a href='/pickup-delivery' className={styles.btn}>{translations[language].orderButton}</a></li>
          </ul>
        </nav>

        <nav className={styles.mobileNav}>
          <a href="home">
            <img src={logo} className={styles.logo} alt="Las Minas logo"/>
          </a>

          <button className={styles.hamMenu}
          onClick={toggleMenu}
          aria-label="Open menu">
          disabled={buttonDisabled}
          <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
          </button>

          <div className={`${styles.offScreenMenu} ${menuOpen ? styles.active : ''}`}>
            <ul>
              <li><a href="home">{translations[language].home}</a></li>
              <li><a href="/home#menu">{translations[language].menu}</a></li>
              <li><a href="about">{translations[language].ourStory}</a></li>
              <li><a href="#contact">{translations[language].contactUs}</a></li>
              <li>
                <button 
                onClick={() => setLanguage(language === 'en' ? 'es' : 'en')} 
                className={styles.langButton}
                >
                {language === 'en' ? '🇬🇹' : '🇺🇸'}
                </button>
              </li>
              <li><a href='/pickup-delivery' className={styles.btn}>{translations[language].orderButton}</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  )
}