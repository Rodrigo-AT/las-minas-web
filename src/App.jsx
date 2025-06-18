import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Order from './pages/Order';
import Error404 from './pages/Error404';

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/pickup-delivery" element={<Order />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
