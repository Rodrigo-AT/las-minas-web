import Header from '../components/Header'
import Footer from '../components/Footer'
import Subfooter from '../components/Subfooter'
import Subheader from '../components/Subheader'

export default function Error404() {

  return (
    <>
        <Subheader/>
        <Header />
        <h1>ERROR 404: Page Not Found</h1>
        <Footer />
        <Subfooter/>
    </>
  )
}