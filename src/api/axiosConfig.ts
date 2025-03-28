import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api",
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
    return Promise.reject(error);
  },
);

export default api;
