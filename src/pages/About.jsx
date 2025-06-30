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
      bodyOne: "Ingris and Marco Muralles Jr. a couple that immigrated at a young age to the United States in search for a better future. However they always maintained their roots and the longing for the flavors and traditions from their home country of Guatemala",
      bodyTwo: "Ingris Trigueros : Born in Concepción Las Minas, in the Chiquimula department. Filled with passion for Guatemalan cuisine and more than 20 years in both experience in cooking and customer service, it has always been her dream to have the opportunity to promote and have a place where guests can sit and enjoy Guatemalan dishes and snacks.",
      bodyThree: "Marco Muralles Jr. : Born in La Maquina, in the Mazatenango department, and raised in a family where traditional Guatemalan dishes could not be found missing from the table. With more than 20 years of experience in the restaurant business, he has always believed it is important to instill and pass onto future generations the beauty and deliciousness that come from our country Guatemala.",
      bodyFour: "And so, with much dedication to our quest to share and promote our cultural dishes, we are honored to introduce, with much love and dedication.",
      bodyFive: "LAS MINAS GUATEMALAN CUISINE.",
    },
    es: {
      heading: "Quiénes somos",
      bodyOne: "Ingris Trigueros y Marco Muralles Jr. una pareja que emigramos a corta edad, para Estados Unidos buscando un mejor futuro. Pero que siempre hemos mantenido nuestras raíces y la añoranza por los sabores y tradiciones de nuestra patria de Guatemala ",
      bodyTwo: "Ingris Trigueros: Nacida en Concepción Las Minas departamento de Chiquimula, y apasionada por la gastronomía Guatemalteca con más de 20 años de experiencia en cocina y atención al cliente, simpre a sido su sueno un dia tener la oportunidad para dar a conocer y tener un lugar donde sus comensales puedan degustar de platillos y antojitos guatemaltecos.",
      bodyThree: "Marco Muralles Jr.: Nacido en La Maquina departamento de Mazatenango, y crecido en una familia donde no pueden faltar los platillos tradicionales guatemaltecos en la mesa., y con más de 20 años de experiencia en la area restaurantera, siempre a creído que es bien importante inculcar y transmitir a nuestras futuras generaciones con lo hermoso y delicioso de nuestro paiz Guatemala. ",
      bodyFour: "Fue así como un día en busca de poder dar a conocer nuestra cultura. Nació lo que hoy estamos introduciendo con mucho amor y dedicación.",
      bodyFive: "LAS MINAS GUATEMALAN CUISINE.",
    }
  };

  return (
    <>
        <div className={styles.subheaderWrapper}>
          <Subheader />
        </div>
        <Header />
        <div className= {styles.body}><h1>{translations[language].heading}</h1></div>
        <p className={styles.aboutP}>
          {translations[language].bodyOne} <br/><br/>
          {translations[language].bodyTwo} <br/><br/>
          {translations[language].bodyThree} <br/><br/>
          {translations[language].bodyFour} <br/><br/>
          {translations[language].bodyFive}
        </p>
        <div id="contact">
          <Footer />
        </div>
        <Subfooter />
    </>
  )
}