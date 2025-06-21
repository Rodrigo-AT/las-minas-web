import styles from '../static/Footer.module.css'
import { useLanguage } from '../context/LanguageContext.jsx';

export default function Footer() {
  const { language } = useLanguage();
  const translations = {
  en: {
    contactUs: "Contact Us",
    businessAddressTitle: "Business Address",
    phoneNumberTitle: "Phone Number",
    emailTitle: "Email",
    businessHoursTitle: "Business Hours",
    nowOpenSundays: "NOW OPEN ALL SUNDAYS",
    monday: "MONDAY:      11:00AM - 9:00PM",
    tuesday: "TUESDAY:     11:00AM - 9:00PM",
    wednesday: "WEDNESDAY:   11:00AM - 9:00PM",
    thursday: "THURSDAY:    11:00AM - 9:00PM",
    friday: "FRIDAY:      11:00AM - 10:00PM",
    saturday: "SATURDAY:    11:00AM - 10:00PM",
    sunday: "SUNDAY:      11:00AM - 7:00PM"
  },
  es: {
    contactUs: "Contáctenos",
    businessAddressTitle: "Dirección Comercial",
    phoneNumberTitle: "Teléfono",
    emailTitle: "Correo Electrónico",
    businessHoursTitle: "Horario Comercial",
    nowOpenSundays: "AHORA ABIERTO LOS DOMINGOS",
    monday: "LUNES:      11:00AM - 9:00PM",
    tuesday: "MARTES:     11:00AM - 9:00PM",
    wednesday: "MIÉRCOLES:  11:00AM - 9:00PM",
    thursday: "JUEVES:     11:00AM - 9:00PM",
    friday: "VIERNES:    11:00AM - 10:00PM",
    saturday: "SÁBADO:     11:00AM - 10:00PM",
    sunday: "DOMINGO:    11:00AM - 7:00PM"
  }
};
  return (
    <>
      <div className={styles.footer}>
        <p className={styles.header}>{translations[language].contactUs}</p>
        <div className={styles.footNav}>
          <div className={styles.navLists}>

            <ul className={styles.leftListOut}>
              <li><p>
                <span className={styles.leftB}>{translations[language].businessAddressTitle}</span> <br/>
                <span className={styles.leftP}>1255 W. El Camino Real, Sunnyvale, CA, 94087 </span> <br/><br/>

                <span className={styles.leftB}>{translations[language].phoneNumberTitle}</span> <br/>
                <a href= "tel:408-480-7505" className = {styles.leftP}> (408) 480-7505 </a> <br/><br/>
                <span className={styles.leftB}>{translations[language].emailTitle} </span> <br/>
                <a href= "Info.lasminas@gmail.com" className = {styles.leftP}> info.lasminas@gmail.com </a>
              </p></li>
              <ul className={styles.socialsList}>
                <li>
                  <a href="https://www.instagram.com/lasminasguatecuisine/" target="_blank" rel="noopener noreferrer" className={styles.wrap}>
                      <div className={styles.circle} style={{ backgroundColor: '#c7146d'}}></div>
                      <i class="fab fa-instagram fa-2x" style={{ zIndex: 1, position: 'relative'}}></i>
                    </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/people/Las-Minas-Guatemalan-Cuisine/61560650415767/" target="_blank" rel="noopener noreferrer" className={styles.wrap}>
                    <div className={styles.circle} style={{ backgroundColor: '#2a3dd1'}}></div>
                    <i class="fab fa-facebook fa-2x" style={{ zIndex: 1, position: 'relative'}}></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.yelp.com/biz/las-minas-guatemalan-cuisine-san-jose-2" target="_blank" rel="noopener noreferrer" className={styles.wrap}>
                    <div className={styles.circle} style={{ backgroundColor: '#e01f1f'}}></div>
                    <i class="fab fa-yelp fa-2x"  style={{ zIndex: 1, position: 'relative'}}></i>
                  </a>
                </li>
              </ul>
            </ul>

            <ul className={styles.rightListOut}>
              <li><p className={styles.rightB}>
                {translations[language].businessHoursTitle}<br />
                {translations[language].nowOpenSundays}
              </p></li>

              <div className={styles.navLists}>
                <ul className={styles.leftListIn}>
                  <li><p className={styles.rightP}>
                    {translations[language].monday}<br />
                    {translations[language].tuesday}<br />
                    {translations[language].wednesday}<br />
                    {translations[language].thursday}
                  </p></li>
                </ul>
                
                <ul className={styles.rightListIn}>
                  <li><p className={styles.rightP}>
                    {translations[language].friday}<br />
                    {translations[language].saturday}<br />
                    {translations[language].sunday}
                  </p></li>
                </ul>
              </div>
            </ul>
          </div>
        </div>
        
        <div className={styles.mobileFooterNav}>
          <ul>
            <li><p>
                <span className={styles.mobileB}>{translations[language].businessAddressTitle}</span> <br/>
                <span className={styles.mobileP}>1255 W. El Camino Real, Sunnyvale, CA, 94087 </span> <br/><br/>

                <span className={styles.mobileB}>{translations[language].phoneNumberTitle}</span> <br/>
                <a href= "tel:408-480-7505" className = {styles.mobileP}> (408) 480-7505 </a> <br/><br/>
                <span className={styles.mobileB}>{translations[language].emailTitle} </span> <br/>
                <a href= "Info.lasminas@gmail.com" className = {styles.mobileP}> info.lasminas@gmail.com </a>
            </p></li>
            <li><p className={styles.mobileB}>
                {translations[language].businessHoursTitle}<br />
                {translations[language].nowOpenSundays}
              </p></li>
            <li><p className={styles.mobileP}>
              {translations[language].monday}<br />
              {translations[language].tuesday}<br />
              {translations[language].wednesday}<br />
              {translations[language].thursday}<br />
              {translations[language].friday}<br />
              {translations[language].saturday}<br />
              {translations[language].sunday}
            </p></li>
            
            <ul className={styles.socialsListMobile}>
              <li>
                <a href="https://www.instagram.com/lasminasguatecuisine/" target="_blank" rel="noopener noreferrer" className={styles.mobileWrap}>
                  <div className={styles.mobileCircle} style={{ backgroundColor: '#c7146d'}}></div>
                  <i class="fab fa-instagram fa-2x"></i>
                </a>
              </li><li>
                <a href="https://www.facebook.com/people/Las-Minas-Guatemalan-Cuisine/61560650415767/" target="_blank" rel="noopener noreferrer" className={styles.mobileWrap}>
                  <div className={styles.mobileCircle} style={{ backgroundColor: '#2a3dd1'}}></div>
                  <i class="fab fa-facebook fa-2x"></i>
                </a>
              </li><li>
                <a href="https://www.yelp.com/biz/las-minas-guatemalan-cuisine-san-jose-2" target="_blank" rel="noopener noreferrer" className={styles.mobileWrap}>
                  <div className={styles.mobileCircle} style={{ backgroundColor: '#e01f1f'}}></div>
                  <i class="fab fa-yelp fa-2x"></i>
                </a>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </>
  )
}