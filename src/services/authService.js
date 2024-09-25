//authService.js
import Swal from "sweetalert2";
//const API_URL = "http://localhost:3000/api/auth";
const API_URL = "https://server-db-project.onrender.com/api/auth";

// Función auxiliar para manejar todas las solicitudes al servidor
export const makeRequest = async (
  endpoint,
  method,
  body = null,
  token = null
) => {
  try {
    const headers = { "Content-Type": "application/json" };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_URL}${endpoint}`, {
      method: method,
      headers: headers,
      body: body ? JSON.stringify(body) : null,
    });

    const data = await response.json();

    if (!response.ok) {
      const errorMessage = data.error || "Ocurrió un error inesperado";
      Swal.fire({
        title: "Error",
        text: errorMessage,
        icon: "error",
        confirmButtonText: "OK",
      });
      throw new Error(errorMessage);
    }

    return data;
  } catch (error) {
    Swal.fire({
      title: "Error",
      text: error.message || "Error al procesar la solicitud",
      icon: "error",
      confirmButtonText: "OK",
    });
    throw error;
  }
};

// Función para iniciar sesión
export const login = async (credentials) => {
  return await makeRequest("/login", "POST", credentials);
};

// Función para registrar un nuevo usuario
export const register = async (userData) => {
  return await makeRequest("/register", "POST", userData);
};
