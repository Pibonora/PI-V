// Menu.tsx
import React from 'react';
import { AppBar, Toolbar, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/logo.png'; // Caminho para a imagem de logo
import '../assets/Menu.css'; // Importa o CSS para estilização
import { Link } from 'react-router-dom';

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AppBar position="static" className="menu-bar" style={{ backgroundColor: '#4caf50' }}>
      <Toolbar className="toolbar">
        <img src={logo} alt="Logo" className="logo" />
        <div className={`menu-items ${isOpen ? 'open' : ''}`}>
          <Button color="inherit" className="nav-button">
            <a href="/" className="nav-link">Início</a>

          </Button>
          <Button color="inherit" className="nav-button">
            <a href="#servicos" className="nav-link">Serviços</a>
          </Button>
          <Button color="inherit" className="nav-button">
            <a href="#contato" className="nav-link">Contato</a>
          </Button>
          <Button color="inherit" className="nav-button">
            <a href="/transparencia" className="nav-link">Transparência</a>
          </Button>
          <Button color="inherit" className="nav-button">
            <a href="/entrar" className="nav-link">Entrar</a>
          </Button>
        </div>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={toggleMenu}
          className="menu-button"
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Menu;
