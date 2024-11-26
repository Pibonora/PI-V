import React, { useState } from 'react';
import '../assets/Contato.css'; // Importa o CSS para estilização
import contactService from '../services/contactService'; // Importe o serviço de backend

const Contato: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    celular: '',
    assunto: '',
    mensagem: '',
  });

  const [touched, setTouched] = useState({
    nome: false,
    sobrenome: false,
    email: false,
    celular: false,
    assunto: false,
    mensagem: false,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
  
    // Remove todos os caracteres não numéricos
    let phone = value.replace(/\D/g, '');
  
    // Aplica a máscara de telefone com DDD apenas se houver algum número
    if (phone.length === 0) {
      setFormData({ ...formData, celular: '' }); // Define o valor como vazio se não houver números
      return;
    }
  
    if (phone.length <= 2) {
      phone = `(${phone}`;
    } else if (phone.length <= 6) {
      phone = `(${phone.substring(0, 2)}) ${phone.substring(2)}`;
    } else if (phone.length <= 10) {
      phone = `(${phone.substring(0, 2)}) ${phone.substring(2, 6)}-${phone.substring(6)}`;
    } else {
      phone = `(${phone.substring(0, 2)}) ${phone.substring(2, 7)}-${phone.substring(7, 11)}`;
    }
  
    setFormData({ ...formData, celular: phone });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      await contactService.sendMessage(formData);
      setSuccessMessage('Mensagem enviada com sucesso!');
      setFormData({
        nome: '',
        sobrenome: '',
        email: '',
        celular: '',
        assunto: '',
        mensagem: '',
      });
      setTouched({
        nome: false,
        sobrenome: false,
        email: false,
        celular: false,
        assunto: false,
        mensagem: false,
      });
    } catch (error: any) {
      setErrorMessage(error.message || 'Erro ao enviar mensagem.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact-container" id="contato">
      <div className="contact-info">
        <h2>Localização</h2>
        <p>
          Para doações, sugestões e interesse em participar como voluntário do nosso projeto entre em contato conosco!
        </p>
        <div className="map">
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.6974630829586!2d-48.48961731858731!3d-21.401813829656998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9394e8b236b5f%3A0x25823919733b19cd!2sR.%20Joaquim%20C%20de%20Freitas%20-%20Bairro%20Talavasso%2C%20Taquaritinga%20-%20SP%2C%2015900-000!5e0!3m2!1spt-BR!2sbr!4v1725894951417!5m2!1spt-BR!2sbr"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
      <div className="contact-form">
        <h2>Formulário de Contato</h2>
        {errorMessage && <p className="error">{errorMessage}</p>}
        {successMessage && <p className="success">{successMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Nome"
              required
            />
            {touched.nome && !formData.nome && <p className="error">Este campo é obrigatório.</p>}
          </div>

          <div className="form-group">
            <input
              type="text"
              id="sobrenome"
              name="sobrenome"
              value={formData.sobrenome}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Sobrenome"
              required
            />
            {touched.sobrenome && !formData.sobrenome && <p className="error">Este campo é obrigatório.</p>}
          </div>

          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="E-mail"
              required
            />
            {touched.email && !formData.email && <p className="error">Este campo é obrigatório.</p>}
          </div>

          <div className="form-group">
  <input
    type="text"
    id="celular"
    name="celular"
    value={formData.celular}
    onChange={handlePhoneChange}
    onBlur={handleBlur}
    placeholder="(DDD) Número"
    required
  />
  {touched.celular && !formData.celular && <p className="error">Este campo é obrigatório.</p>}
</div>

          <div className="form-group">
            <input
              type="text"
              id="assunto"
              name="assunto"
              value={formData.assunto}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Assunto"
              required
            />
            {touched.assunto && !formData.assunto && <p className="error">Este campo é obrigatório.</p>}
          </div>

          <div className="form-group">
            <textarea
              id="mensagem"
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Mensagem"
              maxLength={500}
              required
            />
            {touched.mensagem && !formData.mensagem && <p className="error">Este campo é obrigatório.</p>}
            <p className="char-count">{formData.mensagem.length}/500</p>
          </div>

          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contato;
