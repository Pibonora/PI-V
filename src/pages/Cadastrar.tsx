import React, { useState } from 'react';
import userService from '../services/userService'; // Importe o serviço de API

const Cadastrar: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    role: 'Volunteer', // Valor padrão
    phone: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    const formattedValue = inputValue
      .replace(/^(\d{2})(\d)/, '($1) $2') // Adiciona o DDD entre parênteses
      .replace(/(\d{5})(\d)/, '$1-$2') // Adiciona o traço no número principal
      .slice(0, 15); // Limita o tamanho máximo do telefone formatado
    setFormData({ ...formData, phone: formattedValue });
  };
  
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      // Chamando o serviço de cadastro com Fetch
      const response = await userService.signup(formData);
      setSuccess('Usuário cadastrado com sucesso!');
      setFormData({
        name: '',
        surname: '',
        email: '',
        role: 'Volunteer',
        phone: '',
        password: '',
      });
      console.log(response); // Opcional: exibir os dados retornados
    } catch (err: any) {
      setError(err.message || 'Erro ao cadastrar usuário.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="entrar-container">
      <h2>Cadastrar Voluntário</h2>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite o nome"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Sobrenome:</label>
          <input
            type="text"
            name="surname"
            placeholder="Digite o sobrenome"
            value={formData.surname}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>E-mail:</label>
          <input
            type="email"
            name="email"
            placeholder="Digite o e-mail"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
  <label>Telefone:</label>
  <input
    type="text"
    name="phone"
    placeholder="Digite o telefone"
    value={formData.phone}
    onChange={handlePhoneChange} // Substituído pela função de máscara
    required
  />
</div>

        <div>
          <label>Senha:</label>
          <input
            type="password"
            name="password"
            placeholder="Digite a senha"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Cadastrando...' : 'Cadastrar'}
        </button>
      </form>
    </section>
  );
};

export default Cadastrar;
