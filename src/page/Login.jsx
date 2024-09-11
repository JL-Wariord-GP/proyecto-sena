import Swal from "sweetalert2";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { login, register } from "../services/authService";
import styles from "../css/login.module.css";
import Log from "../assets/log.svg";
import Register from "../assets/register.svg";
import "@fortawesome/fontawesome-free/css/all.css";

// Función para capitalizar la primera letra
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const Login = () => {
  const [isMainLoading, setIsMainLoading] = useState(false);
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const navigate = useNavigate();

  // React Hook Form for Sign In
  const {
    register: signInRegister,
    handleSubmit: handleSignInSubmit,
    reset: resetSignIn,
    formState: { errors: signInErrors },
    watch: signInWatch,
  } = useForm();

  // React Hook Form for Sign Up
  const {
    register: signUpRegister,
    handleSubmit: handleSignUpSubmit,
    reset: resetSignUp,
    formState: { errors: signUpErrors },
    watch: signUpWatch,
  } = useForm();

  // Handler for Sign In
  const onSubmitSignIn = async () => {
    const signInEmail = signInWatch("signInEmail");
    const signInPassword = signInWatch("signInPassword");

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
      setIsMainLoading(true);
      const response = await login({
        email: signInEmail,
        password: signInPassword,
      });

      Swal.fire({
        title: "Inicio de sesión exitoso!",
        icon: "success",
        confirmButtonText: "OK",
      });

      // Si la respuesta es exitosa, maneja la redirección
      if (response && response.token) {
        localStorage.setItem("authToken", response.token);
        setTimeout(() => {
          setIsMainLoading(false);
          navigate("/main");
        }, 2000);
      } else {
        throw new Error("No se recibió un token en la respuesta.");
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.message,
        icon: "error",
        confirmButtonText: "OK",
      });
    } finally {
      resetSignIn();
      setIsMainLoading(false);
    }
  };

  // Handler for Sign Up
  const onSubmitSignUp = async () => {
    const signUpUsername = signUpWatch("signUpUsername");
    const signUpPassword = signUpWatch("signUpPassword");
    const signUpEmail = signUpWatch("signUpEmail");

    if (!signUpUsername || !signUpPassword || !signUpEmail) {
      Swal.fire({
        title: "Error",
        text: "Por favor, complete todos los campos",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    // Transforma los datos del formulario
    const transformedData = {
      username: capitalizeFirstLetter(signUpUsername.trim()),
      email: signUpEmail.trim().toLowerCase(),
      password: signUpPassword,
    };

    try {
      setIsMainLoading(true);
      const response = await register(transformedData);

      if (response) {
        Swal.fire({
          title: "Registro exitoso!",
          icon: "success",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.message,
        icon: "error",
        confirmButtonText: "OK",
      });
    } finally {
      resetSignUp();
      setIsMainLoading(false);
    }
  };

  {
    /* 
    VALIDACION DE LA API VISUALIZACION

      useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/auth/users"
        );
        console.log("API Response:", response);
      } catch (err) {
        console.error("API Error:", err.message);
      }
    };

    fetchUsers();
  }, []);
    
 
    */
  }

  // Handlers for switching between Sign In and Sign Up modes
  const handleSignUpMode = () => setIsSignUpMode(true);
  const handleSignInMode = () => setIsSignUpMode(false);
  const handleDragStart = (e) => e.preventDefault();

  return (
    <div
      className={`${styles.container} ${
        isSignUpMode ? styles["sign-up-mode"] : ""
      }`}>
      {isMainLoading && (
        <div className={styles.loaderPill}>
          <div className={styles["loaderPill-anim"]}>
            <div className={styles["loaderPill-anim-bounce"]}>
              <div className={styles["loaderPill-anim-flop"]}>
                <div className={styles["loaderPill-pill"]}></div>
              </div>
            </div>
          </div>
          <div className={styles["loaderPill-floor"]}>
            <div className={styles["loaderPill-floor-shadow"]}></div>
          </div>
          <div className={styles["loaderPill-text"]}></div>
        </div>
      )}

      <div className="forms-container">
        <div className="signin-signup">
          {/* Sign In Form */}
          <form
            onSubmit={handleSignInSubmit(onSubmitSignIn)}
            className="sign-in-form">
            <h2 className="title">Iniciar Sesión</h2>
            <div className="input-field">
              <i className="fas fa-envelope" />
              <input
                className="input-text"
                type="email"
                placeholder="Correo Electrónico"
                {...signInRegister("signInEmail", {
                  required: "Correo electrónico requerido",
                  pattern: {
                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "Correo electrónico no válido",
                  },
                })}
              />
              {signInErrors.signInEmail && (
                <span className="error-message">
                  {signInErrors.signInEmail.message}
                </span>
              )}
            </div>
            <div className="input-field">
              <i className="fas fa-lock" />
              <input
                type="password"
                placeholder="Contraseña"
                {...signInRegister("signInPassword", {
                  required: "Contraseña requerida",
                })}
              />
              {signInErrors.signInPassword && (
                <span className="error-message">
                  {signInErrors.signInPassword.message}
                </span>
              )}
            </div>
            <input type="submit" className="btn solid" value="Iniciar Sesión" />
          </form>

          {/* Sign Up Form */}
          <form
            onSubmit={handleSignUpSubmit(onSubmitSignUp)}
            className="sign-up-form">
            <h2 className="title">Registrarse</h2>
            <div className="input-field">
              <i className="fas fa-user" />
              <input
                className="input-text"
                type="text"
                placeholder="Usuario"
                {...signUpRegister("signUpUsername", {
                  required: "Usuario requerido",
                })}
              />
              {signUpErrors.signUpUsername && (
                <span className="error-message">
                  {signUpErrors.signUpUsername.message}
                </span>
              )}
            </div>
            <div className="input-field">
              <i className="fas fa-envelope" />
              <input
                type="email"
                placeholder="Email"
                {...signUpRegister("signUpEmail", {
                  required: "Email requerido",
                })}
              />
              {signUpErrors.signUpEmail && (
                <span className="error-message">
                  {signUpErrors.signUpEmail.message}
                </span>
              )}
            </div>
            <div className="input-field">
              <i className="fas fa-lock" />
              <input
                type="password"
                placeholder="Contraseña"
                {...signUpRegister("signUpPassword", {
                  required: "Contraseña requerida",
                })}
              />
              {signUpErrors.signUpPassword && (
                <span className="error-message">
                  {signUpErrors.signUpPassword.message}
                </span>
              )}
            </div>
            <input type="submit" className="btn" value="Registrarse" />
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>¡Bienvenido a nuestro servicio de citas!</h3>
            <p>
              Organiza tus citas de manera eficiente y segura con nosotros.{" "}
              <br /> ¿No tienes cuenta?
            </p>
            <button
              className="btn transparent btn-hover"
              onClick={handleSignUpMode}>
              Registrarse
            </button>
          </div>
          <img
            src={Log}
            className="image"
            alt="Imagen de registro"
            onDragStart={handleDragStart}
          />
        </div>

        <div className="panel right-panel">
          <div className="content">
            <h3>¿Ya tienes una cuenta?</h3>
            <p>
              Accede a tu cuenta para gestionar tus citas de manera eficiente.
              Estamos aquí para simplificar tu experiencia.
            </p>
            <button
              className="btn transparent btn-hover"
              onClick={handleSignInMode}>
              Iniciar Sesión
            </button>
          </div>
          <img
            src={Register}
            className="image"
            alt="Imagen de inicio de sesión"
            onDragStart={handleDragStart}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
