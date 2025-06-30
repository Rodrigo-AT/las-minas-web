import styles from '../static/About.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Subfooter from '../components/Subfooter'
import Subheader from '../components/Subheader'
import { useLanguage } from '../context/LanguageContext.jsx';

export default function About() {

  const { language, setLanguage } = useLanguage();
  
  const translations = {
    en: {
      heading: "Our Story",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla porttitor accumsan tincidunt. Pellentesque in ipsum id orci porta dapibus. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec rutrum congue leo eget malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi."
    },
    es: {
      heading: "Quiénes somos",
      body: "spanish",
    }
  };

  return (
    <>
        <div className={styles.subheaderWrapper}>
          <Subheader />
        </div>
        <Header />
        <div className= {styles.body}><h1>{translations[language].heading}</h1></div>
        <p className={styles.paragraph}>
          {translations[language].body}
        </p>
        <div id="contact">
          <Footer />
        </div>
        <Subfooter />
    </>
  )
}