// Menu.tsx
import React from 'react';
import { AppBar, Toolbar, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/logo.png'; // Caminho para a imagem de logo
import '../assets/Menu.css'; // Importa o CSS para estilização
import { Link, useNavigate } from 'react-router-dom';

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate(); // Usando useNavigate

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigateToHomeWithScroll = (id: string) => {
    navigate('/'); // Navega para a Home
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Espera um pouco para garantir que a navegação foi concluída
  };

  return (
    <AppBar position="static" className="menu-bar" style={{ backgroundColor: '#C92C4E' }}>
      <Toolbar className="toolbar">
        <img src={logo} alt="Logo" className="logo" />
        <div className={`menu-items ${isOpen ? 'open' : ''}`}>
          <Button color="inherit" className="nav-button">
            <Link to="/" className="nav-link">Início</Link>
          </Button>
          <Button color="inherit" className="nav-button nav-link" onClick={() => navigateToHomeWithScroll('servicos')}>
            Serviços
          </Button>
          <Button color="inherit" className="nav-button nav-link" onClick={() => navigateToHomeWithScroll('contato')}>
            Contato
          </Button>
          <Button color="inherit" className="nav-button">
            <Link to="/transparencia" className="nav-link">Transparência</Link>
          </Button>
          <Button color="inherit" className="nav-button">
            <Link to="/cadastrar" className="nav-link">cadastrar</Link>
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
