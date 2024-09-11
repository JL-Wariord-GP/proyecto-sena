const API_URL = "https://server-db-project.onrender.com/api/auth";
//const API_URL = "http://localhost:3000/api/auth";

export const login = async (credentials) => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  if (!response.ok) {
    throw new Error("Error al iniciar sesión");
  }
  return response.json();
};

export const register = async (userData) => {
  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  if (!response.ok) {
    throw new Error("Error al registrarse");
  }
  return response.json();
};
