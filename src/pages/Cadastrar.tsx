import React from 'react';

const Entrar: React.FC = () => {
  return (
    <section>
      <h2>Entrar</h2>
      <form>
        <div>
          <label>E-mail:</label>
          <input type="email" />
        </div>
        <div>
          <label>Senha:</label>
          <input type="password" />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </section>
  );
};

export default Entrar;
