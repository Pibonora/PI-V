// Footer.tsx
import React from 'react';
import '../assets/Footer.css'; // Importa o CSS para estilização

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Redes Sociais</h3>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="footer-link">Facebook</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="footer-link">Instagram</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
        </div>
        <div className="footer-section">
          <h3>Mapa do Site</h3>
          <a href="/" className="footer-link">Início</a>
          <a href="/" className="footer-link">Serviços</a>
          <a href="/" className="footer-link">Contato</a>
          <a href="/transparencia" className="footer-link">Transparência</a>
          <a href="/cadastrar" className="footer-link">Cadastrar</a>
        </div>
        <div className="footer-section">
          <h3>Contatos</h3>
          <p>pONGs@hotmail.com</p>
          <p>(16) 98200-7319</p>
          <div className="footer-quote">
            "E não se esqueçam de fazer o bem e de repartir com os outros, pois com tais sacrifícios Deus se agrada."
            <br />
            Hebreus 13:16 (NVI)
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
