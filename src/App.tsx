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

const App: React.FC = () => {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transparencia" element={<Transparencia />} />
        <Route path="/entrar" element={<Entrar />} />
      </Routes>
      <Servicos
        title="Nossos Serviços"
        text="Aqui está um resumo dos nossos principais serviços. Oferecemos uma ampla gama de soluções adaptadas às suas necessidades. Desde consultoria até implementação, nossa equipe está aqui para ajudar você a alcançar seus objetivos com eficiência e excelência."
        imageSrc={img1} // Use a variável importada
        imageAlt="Descrição da imagem"
      />
      <Contato/>
      <Footer />
    </Router>
  );
};

export default App;
