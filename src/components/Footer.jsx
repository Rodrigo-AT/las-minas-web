import styles from '../static/Footer.module.css'

export default function Footer() {

  return (
    <>
      <div className={styles.footer}>
        <p className={styles.header}>Contact Us</p>
        <div className={styles.footNav}>
          <div className={styles.navLists}>
            <ul className={styles.leftListOut}>
              <li><p className={styles.leftB}>Business Address</p></li>
              <li><p className={styles.leftP}>1255 W. El Camino Real, Sunnyvale, CA, 94087</p></li>
              <li><p className={styles.leftB}>Phone Number</p></li>
              <li><p className={styles.leftP}>(408) 480-7505</p></li>
              <li><p className={styles.leftB}>Email</p></li>
              <li><p className={styles.leftP}>email</p></li>
            </ul>
            <ul className={styles.rightList}>
              <li><p className={styles.rightB}>Business Hours</p></li>
              <li><p className={styles.rightB}>NOW OPEN ALL SUNDAYS</p></li>
              <div className={styles.navLists}>
                <ul className={styles.leftListIn}>
                  <li><p className={styles.rightP}>MONDAY:      11:00AM - 9:00PM</p></li>
                  <li><p className={styles.rightP}>TUESDAY:     11:00AM - 9:00PM</p></li>
                  <li><p className={styles.rightP}>WEDNESDAY:   11:00AM - 9:00PM</p></li>
                  <li><p className={styles.rightP}>THURSDAY:    11:00AM - 9:00PM</p></li>
                </ul>
                <ul className={styles.rightList}>
                  <li><p className={styles.rightP}>FRIDAY:      11:00AM - 9:00PM</p></li>
                  <li><p className={styles.rightP}>SATURDAY:    11:00AM - 9:00PM</p></li>
                  <li><p className={styles.rightP}>SUNDAY:      11:00AM - 9:00PM</p></li>
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}