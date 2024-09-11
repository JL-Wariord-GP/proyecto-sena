import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

const API_URL = "https://server-db-project.onrender.com/api/auth";
//const API_URL = "http://localhost:3000/api/auth";

export const AuthProvider = ({ children }) => {
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      console.error("Token no encontrado en el almacenamiento local");
      return;
    }

    fetch(`${API_URL}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data && data.username) {
          const username = data.username;
          const firstName = username.split(" ")[0];
          setFirstName(firstName);
        } else {
          console.error(
            "No se encontraron datos de usuario o el formato es incorrecto."
          );
        }
      })
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  return (
    <AuthContext.Provider value={{ firstName }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContext;
