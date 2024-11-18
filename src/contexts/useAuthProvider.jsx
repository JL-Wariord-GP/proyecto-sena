import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { fetchUserDetails } from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getUserDetails = async (token) => {
    try {
      const data = await fetchUserDetails(token);
      console.log("Response data:", data);

      if (data && data.user && data.user.username) {
        const username = data.user.username;
       // console.log("Extracted username:", username);
        if (username && typeof username === "string") {
          const firstName = username.split(" ")[0];
         // console.log("First name extracted:", firstName);
          setFirstName(firstName);
          localStorage.setItem("firstName", firstName);
        } else {
        //  console.warn("Username is invalid:", username);
          setFirstName("Usuario");
        }
      } else {
      //  console.warn("No user data or username found:", data);
        setFirstName("Usuario");
      }
    } catch (error) {
     // console.error("Error fetching user details:", error);
      setFirstName("Usuario");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const storedFirstName = localStorage.getItem("firstName");

    //console.log("useEffect running. Token:", token, "Stored first name:", storedFirstName);

    if (token) {
      setIsAuthenticated(true);
      if (storedFirstName) {
       // console.log("Using stored first name:", storedFirstName);
        setFirstName(storedFirstName);
        setIsLoading(false);
      } else {
        getUserDetails(token);
      }
    } else {
      setIsLoading(false);
    }
  }, []);

  const login = (token, username) => {
   // console.log("Login called with token:", token, "and username:", username); // Verifica el username aquí
    if (username && typeof username === "string") {
      const firstName = username.split(" ")[0];
      localStorage.setItem("authToken", token);
      localStorage.setItem("firstName", firstName);
      setIsAuthenticated(true);
      setFirstName(firstName);
    } else {
     // console.warn("Invalid username:", username);
      setFirstName("Usuario"); // Valor por defecto
    }
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("firstName");
    setIsAuthenticated(false);
    setFirstName("");
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, firstName, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContext;
