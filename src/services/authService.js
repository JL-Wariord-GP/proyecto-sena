// src/services/authService.js

import Swal from "sweetalert2";

//const API_URL = "https://server-db-project.onrender.com/api/auth"; // Cambia esto por tu URL de API
const API_URL = "http://localhost:3000/api/auth"; // Cambia esto por tu URL de API

// Función auxiliar para manejar todas las solicitudes al servidor
const makeRequest = async (endpoint, method, body = null, token = null) => {
  try {
    const headers = { "Content-Type": "application/json" };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_URL}${endpoint}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : null,
    });

    const data = await response.json();
    console.log("Response data:", data);

    if (!response.ok) {
      const errorMessage = data.error || "Ocurrió un error inesperado";
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

// Función para obtener detalles del usuario
export const fetchUserDetails = async (token) => {
  return await makeRequest("/users", "GET", null, token);
};

// Función para iniciar sesión
export const login = async (credentials) => {
  return await makeRequest("/login", "POST", credentials);
};

// Función para registrar un nuevo usuario
export const register = async (userData) => {
  return await makeRequest("/register", "POST", userData);
};
