// App.tsx
import React from 'react';
import './assets/App.css'; // Caminho correto para o CSS
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './pages/Home';
import Transparencia from './pages/Transparencia';
import Login from './pages/Login'; // Corrigido para Login
import Cadastrar from './pages/Cadastrar'; // Mantém a importação correta
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transparencia" element={<Transparencia />} />
        <Route path="/entrar" element={<Login />} /> {/* Corrigido para Login */}
        <Route path="/cadastrar" element={<Cadastrar />} /> {/* Rota para Cadastrar */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
