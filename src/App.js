import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Product from './pages/Product';
import AboutPage from './pages/AboutPage';
import Service from './pages/Service';
import TeamPage from './pages/TeamPage';
import Contact from './pages/Contact';

function App() {

  return (
   
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="home" element={<Home />}></Route>
      <Route path="product" element={<Product />}></Route>
      <Route path="about" element={<AboutPage />}></Route>
      <Route path="service" element={<Service />}></Route>
      <Route path="team" element={<TeamPage />}></Route>
      <Route path="contact" element={<Contact />}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
