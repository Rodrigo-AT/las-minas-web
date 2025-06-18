import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext.jsx';
import Home from './pages/Home'
import About from './pages/About'
import Error404 from './pages/Error404'

function App() {

  return (
    <div>
      <LanguageProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </div>
  )
}

export default App
