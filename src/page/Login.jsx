import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styles from "../css/login.module.css";
import Log from "../assets/log.svg";
import Register from "../assets/register.svg";
import "@fortawesome/fontawesome-free/css/all.css";

const Login = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMainLoading, setIsMainLoading] = useState(false);
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  const {
    register: signInRegister,
    handleSubmit: handleSignInSubmit,
    reset: resetSignIn,
    formState: { errors: signInErrors },
    watch: signInWatch,
  } = useForm();

  const {
    register: signUpRegister,
    handleSubmit: handleSignUpSubmit,
    reset: resetSignUp,
    formState: { errors: signUpErrors },
    watch: signUpWatch,
  } = useForm();

  const predefinedUser = { username: "admin", password: "123456" };

  const signInUsername = signInWatch("signInUsername");
  const signInPassword = signInWatch("signInPassword");

  const signUpUsername = signUpWatch("signUpUsername");
  const signUpPassword = signUpWatch("signUpPassword");

  const onSubmitSignIn = () => {
    if (!signInUsername || !signInPassword) {
      alert("Por favor, complete todos los campos");
      return;
    }

    if (
      signInUsername === predefinedUser.username &&
      signInPassword === predefinedUser.password
    ) {
      console.log("ingreso exitoso");
      setIsMainLoading(true);
      setTimeout(() => {
        setIsMainLoading(false);
        navigate("/main");
      }, 2000);
    } else {
      alert("Credenciales incorrectas");
    }

    resetSignIn();
  };

  const onSubmitSignUp = () => {
    if (!signUpUsername || !signUpPassword) {
      alert("Por favor, complete todos los campos");
      return;
    }

    alert("Registro exitoso");
    resetSignUp();
  };

  const handleSignUpMode = () => {
    setIsSignUpMode(true);
  };

  const handleSignInMode = () => {
    setIsSignUpMode(false);
  };

  if (isLoading) {
    return (
      <div className={styles.loading}>
        <p>Cargando...</p>
      </div>
    );
  }

  return (
    <div
      className={`${styles.container} ${
        isSignUpMode ? styles["sign-up-mode"] : ""
      }`}
    >
      {isMainLoading && (
        <div className={styles.loading}>
          <p>Cargando página principal...</p>
        </div>
      )}
      <div className="forms-container">
        <div className="signin-signup">
          <form
            onSubmit={
              isSignUpMode
                ? handleSignUpSubmit(onSubmitSignUp)
                : handleSignInSubmit(onSubmitSignIn)
            }
            className="sign-in-form"
          >
            <h2 className="title">Iniciar Sesión</h2>
            <div className="input-field">
              <i className="fas fa-user" />
              <input
                type="text"
                placeholder="Usuario"
                {...signInRegister("signInUsername", { required: true })}
              />
              {signInErrors.signInUsername && (
                <span className="error-message">Usuario requerido</span>
              )}
            </div>
            <div className="input-field">
              <i className="fas fa-lock" />
              <input
                type="password"
                placeholder="Contraseña"
                {...signInRegister("signInPassword", { required: true })}
              />
              {signInErrors.signInPassword && (
                <span className="error-message">Contraseña requerida</span>
              )}
            </div>
            <input type="submit" className="btn solid" value="Iniciar Sesión" />
            <p className="social-text">
              Iniciar sesión con plataformas sociales
            </p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
          <form
            onSubmit={
              isSignUpMode
                ? handleSignUpSubmit(onSubmitSignUp)
                : handleSignUpSubmit(onSubmitSignIn)
            }
            className="sign-up-form"
          >
            <h2 className="title">Registrarse</h2>
            <div className="input-field">
              <i className="fas fa-user" />
              <input
                type="text"
                placeholder="Usuario"
                {...signUpRegister("signUpUsername", { required: true })}
              />
              {signUpErrors.signUpUsername && (
                <span className="error-message">Usuario requerido</span>
              )}
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock" />
              <input
                type="password"
                placeholder="Contraseña"
                {...signUpRegister("signUpPassword", { required: true })}
              />
              {signUpErrors.signUpPassword && (
                <span className="error-message">Contraseña requerida</span>
              )}
            </div>
            <input type="submit" className="btn" value="Registrarse" />
            <p className="social-text">Regístrate con plataformas sociales</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>¿Nuevo por aquí?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button className="btn transparent" onClick={handleSignUpMode}>
              Registrarse
            </button>
          </div>
          <img src={Log} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>¿Ya tiene una cuenta?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button className="btn transparent" onClick={handleSignInMode}>
              Iniciar Sesión
            </button>
          </div>
          <img src={Register} className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
