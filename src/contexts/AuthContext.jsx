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
    try {
      const response = await fetch(`${API_URL}/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
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
      login(token); // Llama a la función login cuando se carga el componente
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
