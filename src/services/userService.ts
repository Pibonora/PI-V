const BASE_URL = 'https://projetosopabackend-ayacc6d3gtf7cueb.brazilsouth-01.azurewebsites.net/api/v1';

const userService = {
  /**
   * Cadastra um novo usuário
   * @param userData Dados do usuário a ser cadastrado
   * @returns Resposta da API ou erro
   */
  signup: async (userData: {
    name: string;
    surname: string;
    email: string;
    role: string;
    phone: string;
    password: string;
  }) => {
    const response = await fetch(`${BASE_URL}/auth/user/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Erro ao cadastrar usuário.');
    }

    return await response.json();
  },

  /**
   * Realiza login de um usuário
   * @param credentials Credenciais do usuário (email e senha)
   * @returns Resposta da API ou erro
   */
  login: async (credentials: { email: string; password: string }) => {
    const response = await fetch(`${BASE_URL}/auth/user/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Erro ao realizar login.');
    }

    return await response.json();
  },
};

export default userService;
