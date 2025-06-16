import styles from '../static/Subheader.module.css'

export default function Subfooter() {

  return (
    <>
      
      <div className={styles.subheader}>
        <nav className={styles.navigation}>
          <ul>
            <a href= "tel:408-480-7505" className = {styles.paragraph}> CALL US: (408) 480-7505 </a>
            <a className={styles.paragraph}>1255 W. El Camino Real, Sunnyvale, CA, 94087</a>
          </ul>
          
          <ul>
            <li><a href="https://www.instagram.com/lasminasguatecuisine/" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-instagram"></i>
            </a></li>
            <li><a href="https://www.facebook.com/people/Las-Minas-Guatemalan-Cuisine/61560650415767/" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-facebook"></i>
            </a></li>
            <li><a href="https://www.yelp.com/biz/las-minas-guatemalan-cuisine-san-jose-2" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-yelp"></i>
            </a></li>
          </ul>
        </nav>
      </div>
    </>
  )
}