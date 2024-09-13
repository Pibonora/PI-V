// Home.tsx
import React from 'react';
import '../assets/Home.css'; // Importa o CSS para estilização
import Estatistica from '../components/Statistics';
import { MdFamilyRestroom } from "react-icons/md";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="background-image">
        <div className="text-overlay">
          <h1>Bem-vindo ao Meu Site</h1>
          <p>
            Este é um exemplo de como você pode usar uma imagem de fundo e centralizar o texto sobre ela.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
