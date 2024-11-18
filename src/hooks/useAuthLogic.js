import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { login as loginService, register } from "../services/authService";
import useAuth from "../contexts/useAuth";

const useAuthLogic = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSignInSubmit = async (data) => {
    const { signInEmail, signInPassword } = data;

    if (!signInEmail || !signInPassword) {
      Swal.fire({
        title: "Error",
        text: "Por favor, complete todos los campos",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    try {
      setIsLoading(true);
      const response = await loginService({
        email: signInEmail,
        password: signInPassword,
      });

      if (response && response.token && response.user) {
        localStorage.setItem("authToken", response.token);
        // Pasamos tanto el token como el username a la función login
        await login(response.token, response.user.username); 

        Swal.fire({
          title: "Inicio de sesión exitoso!",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          navigate("/main");
        });
      } else {
        throw new Error("No se recibió un token o usuario en la respuesta.");
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.message,
        icon: "error",
        confirmButtonText: "OK",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUpSubmit = async (data) => {
    const { signUpUsername, signUpPassword, signUpEmail } = data;
    if (!signUpUsername || !signUpPassword || !signUpEmail) {
      Swal.fire({
        title: "Error",
        text: "Por favor, complete todos los campos",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    try {
      setIsLoading(true);
      await register({
        username: capitalizeFirstLetter(signUpUsername.trim()),
        email: signUpEmail.trim().toLowerCase(),
        password: signUpPassword,
      });
      Swal.fire({
        title: "Registro exitoso!",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.message,
        icon: "error",
        confirmButtonText: "OK",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return {
    isSignUpMode,
    isLoading,
    setIsSignUpMode,
    handleSignInSubmit,
    handleSignUpSubmit,
  };
};

export default useAuthLogic;
