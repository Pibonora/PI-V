// App.tsx
import React from 'react';
import './assets/App.css'; // Caminho correto para o CSS
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './pages/Home';
import Servicos from './components/Servicos';
import Contato from './components/Contato';
import Transparencia from './pages/Transparencia';
import Entrar from './pages/Cadastrar';
import Footer from './components/Footer';

// Importe a imagem para garantir o caminho correto
import img1 from './assets/img1.png';
import SectionS from './components/Section-Statistics';

const App: React.FC = () => {
  return (
    <Router>
      
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transparencia" element={<Transparencia />} />
        <Route path="/entrar" element={<Entrar />} />
      </Routes>
    
      <Footer />
    </Router>
  );
};

export default App;
