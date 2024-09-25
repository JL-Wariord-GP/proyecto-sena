//AuthContext.jsx
import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeRequest } from "./authService"; // Importa la función auxiliar makeRequest

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [firstName, setFirstName] = useState("");

  // Función para iniciar sesión y actualizar el contexto con los datos del usuario
  const login = async (token) => {
    if (!token) {
      console.error("Token no válido o no proporcionado");
      return;
    }

    try {
      // Reutiliza makeRequest para obtener los datos del usuario autenticado
      const data = await makeRequest("/me", "GET", null, token);

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
