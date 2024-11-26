const BASE_URL = 'https://projetosopabackend-ayacc6d3gtf7cueb.brazilsouth-01.azurewebsites.net/api/v1';

const contactService = {
  /**
   * Envia uma mensagem de contato
   * @param contactData Dados do formulário de contato
   * @returns Resposta da API ou erro
   */
  sendMessage: async (contactData: {
    nome: string;
    sobrenome: string;
    email: string;
    celular: string;
    assunto: string;
    mensagem: string;
  }) => {
    const response = await fetch(`${BASE_URL}/contact/message`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Erro ao enviar mensagem de contato.');
    }

    return await response.json();
  },
};

export default contactService;
