import axios from "axios";

const api = axios.create({
  baseURL: "https://hobby-finder-back-1-0.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor de requisição para adicionar o token se ele existir
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Verifica o token a cada requisição
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`; // Adiciona o token ao cabeçalho
    }
    return config;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // Se o erro for 401 Unauthorized, remova o token do localStorage
      console.log(
        "Sessão expirada, removendo token e recarregando a página...",
      );

      // Remove o token do localStorage
      localStorage.removeItem("token"); // ou o nome da chave do seu token

      // Recarrega a página
      window.location.reload(); // Recarrega a página atual
    } else {
      return Promise.reject(error);
    }
  },
);

export default api;
