import Swal from "sweetalert2";

//const API_URL = "http://localhost:3000/api/auth"; // Ajustar según tu entorno
const API_URL = "https://server-db-project.onrender.com/api/auth";

export const login = async (credentials) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();

    if (!response.ok) {
      // El mensaje de error viene directamente del backend
      const errorMessage = data.error || "Credenciales inválidas";
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
      text: error.message || "Error al iniciar sesión",
      icon: "error",
      confirmButtonText: "OK",
    });

    throw error; // Asegúrate de que la excepción sea lanzada para que el flujo del frontend la capture
  }
};

export const register = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
      // El mensaje de error viene directamente del backend
      const errorMessage = data.error || "Error al registrarse";
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
      text: error.message || "Error al registrarse",
      icon: "error",
      confirmButtonText: "OK",
    });

    throw error;
  }
};
