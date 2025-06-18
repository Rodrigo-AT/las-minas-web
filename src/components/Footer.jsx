import styles from '../static/Footer.module.css'

export default function Footer() {

  return (
    <>
      <div className={styles.footer}>
        <p className={styles.header}>Contact Us</p>
        <div className={styles.footNav}>
          <div className={styles.navLists}>

            <ul className={styles.leftListOut}>
              <li><p>
                <span className={styles.leftB}> Business Address </span> <br/>
                <span className={styles.leftP}>1255 W. El Camino Real, Sunnyvale, CA, 94087 </span> <br/><br/>

                <span className={styles.leftB}>Phone Number </span> <br/>
                <a href= "tel:408-480-7505" className = {styles.leftP}> (408) 480-7505 </a> <br/><br/>
                <span className={styles.leftB}>Email </span> <br/>
                <a href= "Info.lasminas@gmail.com" className = {styles.leftP}> Info.lasminas@gmail.com </a>
              </p></li>
              <ul className={styles.socialsList}>
                <li><a href="https://www.instagram.com/lasminasguatecuisine/" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-instagram fa-2x"></i>
                </a></li>
                <li><a href="https://www.facebook.com/people/Las-Minas-Guatemalan-Cuisine/61560650415767/" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-facebook fa-2x"></i>
                </a></li>
                <li><a href="https://www.yelp.com/biz/las-minas-guatemalan-cuisine-san-jose-2" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-yelp fa-2x"></i>
                </a></li>
              </ul>
            </ul>

            <ul className={styles.rightList}>
              <li><p className={styles.rightB}>
                Business Hours<br />
                NOW OPEN ALL SUNDAYS
              </p></li>

              <div className={styles.navLists}>
                <ul className={styles.leftListIn}>
                  <li><p className={styles.rightP}>
                    MONDAY:      11:00AM - 9:00PM<br />
                    TUESDAY:     11:00AM - 9:00PM<br />
                    WEDNESDAY:   11:00AM - 9:00PM<br />
                    THURSDAY:    11:00AM - 9:00PM
                  </p></li>
                </ul>
                
                <ul className={styles.rightList}>
                  <li><p className={styles.rightP}>
                    FRIDAY:      11:00AM - 10:00PM<br />
                    SATURDAY:    11:00AM - 10:00PM<br />
                    SUNDAY:      11:00AM - 7:00PM
                  </p></li>
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}