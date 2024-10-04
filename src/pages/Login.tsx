// Login.tsx
import React from 'react';
import '../assets/Cadastro.css'; // Importa o CSS
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  return (
    <section className='entrar-container'>
      <h2>Entrar</h2>
      <form >
        <div>
          <label>E-mail:</label>
          <input type="email" name='email' placeholder='Digite seu email' required />
        </div>
        <div>
          <label>Senha:</label>
          <input type="password" name='password' placeholder='Digite sua senha' required />
        </div>
        <div className='txtEntrar'>
          <p>Já tem cadastro? <Link to="/cadastrar">Entre aqui!</Link></p>
        </div>
        <button type="submit">Entrar</button>
      </form>
    </section>
  );
};

export default Login;
