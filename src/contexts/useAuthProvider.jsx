// src/contexts/useAuthProvider.js
import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types"; // Importa PropTypes para la validación de props

// Contexto de autenticación
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Verifica si hay un token en el almacenamiento local
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (token) => {
    localStorage.setItem("authToken", token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Define el tipo de las props
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired, // children debe ser un nodo React y es requerido
};

export default AuthContext;
