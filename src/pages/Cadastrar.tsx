// Cadastrar.tsx
import React from 'react';

import '../assets/Cadastro.css'; // Verifique se o caminho está correto


const Cadastrar: React.FC = () => {
  return (
    <section className='entrar-container'>
      <h2>Cadastrar voluntário</h2>
      <form>
        <div>
          <label>Nome do voluntário:</label>
          <input type="text" name='name' required />
        </div>
        <div>
          <label>E-mail:</label>
          <input type="email" name='email' required />
        </div>
        <div>
          <label>Telefone:</label>
          <input type="password" name='password' required />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </section>
  );
};

export default Cadastrar;
