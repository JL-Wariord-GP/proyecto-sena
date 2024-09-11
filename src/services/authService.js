import Swal from "sweetalert2";

const API_URL = "https://server-db-project.onrender.com/api/auth";
//const API_URL = "http://localhost:3000/api/auth";

export const login = async (credentials) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      // Intenta obtener el mensaje de error del servidor
      const errorData = await response.json();
      const errorMessage = errorData.message || "Credenciales inválidas";
      Swal.fire({
        title: "Error",
        text: errorMessage,
        icon: "error",
        confirmButtonText: "OK",
      });
      throw new Error(errorMessage);
    }

    // Si la respuesta es exitosa, retorna los datos
    return await response.json();
  } catch (error) {
    // Asegúrate de que `error.message` tenga un valor válido
    throw new Error(error.message || "Error al iniciar sesión");
  }
};

export const register = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      const errorMessage = errorData.message || "Error al registrarse";
      Swal.fire({
        title: "Error",
        text: errorMessage,
        icon: "error",
        confirmButtonText: "OK",
      });
      throw new Error(errorMessage);
    }

    return await response.json();
  } catch (error) {
    // Asegúrate de que `error.message` tenga un valor válido
    throw new Error(error.message || "Error al registrarse");
  }
};
