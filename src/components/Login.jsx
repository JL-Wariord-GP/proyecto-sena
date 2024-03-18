import "../utils/login.css";
import { useDispatch, useSelector } from "react-redux";
import { setSignUpMode } from "../store/slices/container.slice";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const isSignUpMode = useSelector((state) => state.container.signUpMode);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (
      storedUser &&
      storedUser.email === data.email &&
      storedUser.password === data.password
    ) {
      alert("¡Inicio de sesión exitoso!");
      navigate("/main");
    } else {
      alert("Credenciales incorrectas o usuario no registrado");
      reset();
    }
  };

  const handleSignUpMode = () => {
    dispatch(setSignUpMode(true));
    navigate("/register");
  };

  const containerClass = isSignUpMode ? "sign-up-mode" : ""; // Aplicar la clase 'sign-up-mode' si isSignUpMode es true

  return (
    <div className={`container ${containerClass}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form onSubmit={handleSubmit(onSubmit)} className="sign-in-form">
            <h2 className="title">Iniciar sesión</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Correo electrónico"
                {...register("email")}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Contraseña"
                {...register("password")}
              />
            </div>
            <input type="submit" value="Iniciar sesión" className="btn solid" />
            <p className="social-text">O inicia sesión con</p>
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
          <img src="img/log.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
