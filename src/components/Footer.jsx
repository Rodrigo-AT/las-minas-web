import styles from '../static/Footer.module.css'

export default function Footer() {

  return (
    <>
      <div className={styles.footer}>
        <nav>
          <p className={styles.header}>Contact Us</p>
          <ul>
            <p className={styles.paragraph}>Contact Us</p>
            <p className={styles.paragraph}>Contact Us</p>
            <p className={styles.paragraph}>Contact Us</p>
          </ul>
        </nav>
      </div>
    </>
  )
}