import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../utils/login.css";
import Log from "../assets/log.svg";
import Register from "../assets/register.svg";

const Login = () => {
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

  const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

  const signInUsername = signInWatch("signInUsername");
  const signInPassword = signInWatch("signInPassword");

  const signUpUsername = signUpWatch("signUpUsername");
  const signUpPassword = signUpWatch("signUpPassword");

  const onSubmitSignIn = () => {
    if (!signInUsername || !signInPassword) {
      alert("Por favor, complete todos los campos");
      return;
    }

    const foundUser = storedUsers.find(
      (user) =>
        user.username === signInUsername && user.password === signInPassword
    );

    if (foundUser) {
      navigate("/main");
    } else {
      alert("Credenciales incorrectas o usuario no registrado");
    }
    resetSignIn();
  };

  const onSubmitSignUp = () => {
    if (!signUpUsername || !signUpPassword) {
      alert("Por favor, complete todos los campos");
      return;
    }

    const newUser = { username: signUpUsername, password: signUpPassword };
    const updatedUsers = [...storedUsers, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    alert("Registro exitoso");
    resetSignUp();
  };

  const handleSignUpMode = () => {
    setIsSignUpMode(true);
  };

  const handleSignInMode = () => {
    setIsSignUpMode(false);
  };

  return (
    <div className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form
            onSubmit={
              isSignUpMode
                ? handleSignInSubmit(onSubmitSignUp)
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
