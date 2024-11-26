// Home.tsx
import React from 'react';
import '../assets/Home.css'; // Importa o CSS para estilização
import Servicos from '../components/Servicos';
import SectionS from '../components/Section-Statistics';
import Contato from '../components/Contato';
// import Estatistica from '../components/Statistics';
// import { MdFamilyRestroom } from "react-icons/md";
import img1 from '../assets/img1.png';


const Home: React.FC = () => {
  return (
    <> 
    <div className="home-container">
      <div className="background-image">
        <div className="text-overlay">
          <h1>Uma pequena doação, um grande impacto.</h1>
        </div>
      </div>
    </div>
    <section id='servicos'>
      
    <Servicos 
        title="Nossos Serviços"
        text="Aqui está um resumo dos nossos principais serviços. Oferecemos uma ampla gama de soluções adaptadas às suas necessidades. Desde consultoria até implementação, nossa equipe está aqui para ajudar você a alcançar seus objetivos com eficiência e excelência."
        imageSrc={img1} // Use a variável importada
        imageAlt="Descrição da imagem" />
        </section>
        <SectionS />
        <section id='contato'>
      
       
        <Contato /></section></>
        
  );
};

export default Home;
