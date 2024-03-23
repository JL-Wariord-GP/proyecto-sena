import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styles from "../css/login.module.css";
import Log from "../assets/log.svg";
import Register from "../assets/register.svg";
import "@fortawesome/fontawesome-free/css/all.css";

const Login = () => {
  const [isMainLoading, setIsMainLoading] = useState(false);
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const navigate = useNavigate();

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

  const signUpEmail = signUpWatch("signUpEmail");

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
    if (!signUpUsername || !signUpPassword || !signUpEmail) {
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

  const handleDragStart = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className={`${styles.container} ${
        isSignUpMode ? styles["sign-up-mode"] : ""
      }`}
    >
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
                className="input-text"
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
                className="input-text"
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
              <input
                type="email"
                placeholder="Email"
                {...signUpRegister("signUpEmail", { required: true })}
              />
              {signUpErrors.signUpEmail && (
                <span className="error-message">Email requerido</span>
              )}
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
            <h3>¡Bienvenido a nuestro servicio de citas!</h3>
            <p>
              Organiza tus citas de manera eficiente y segura con nosotros.{" "}
              <br />
              ¿No tienes cuenta?
            </p>
            <button
              className="btn transparent btn-hover"
              onClick={handleSignUpMode}
            >
              Registrarse
            </button>
          </div>

          <img
            src={Log}
            className="image"
            alt=""
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
              onClick={handleSignInMode}
            >
              Iniciar Sesión
            </button>
          </div>

          <img
            src={Register}
            className="image"
            alt=""
            onDragStart={handleDragStart}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
