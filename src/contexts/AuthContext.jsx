// AuthContext.jsx
import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

const API_URL = "https://server-db-project.onrender.com/api/auth";
//const API_URL = "http://localhost:3000/api/auth";

export const AuthProvider = ({ children }) => {
  const [firstName, setFirstName] = useState("");

  // Función para iniciar sesión y actualizar el contexto con los datos del usuario
  const login = async (token) => {
    if (!token) {
      console.error("Token no válido o no proporcionado");
      return;
    }

    try {
      const response = await fetch(`${API_URL}/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      if (data && data.username) {
        const username = data.username;
        const firstName = username.split(" ")[0];
        setFirstName(firstName);
      } else {
        console.error(
          "No se encontraron datos de usuario o el formato es incorrecto."
        );
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (token) {
      // Si hay un token, intenta hacer login
      login(token);
    } else {
      console.warn("No hay token de autenticación disponible");
    }
  }, []);

  return (
    <AuthContext.Provider value={{ firstName, login }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContext;
