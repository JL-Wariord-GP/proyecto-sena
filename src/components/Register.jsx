// Register.jsx
import "../utils/login.css";
import { useDispatch, useSelector } from "react-redux";
import { setSignUpMode } from "../store/slices/container.slice";
import { useForm } from "react-hook-form";
import { useEffect } from "react"; // Importamos useEffect
import { clearRedirectTo } from "../store/slices/container.slice"; // Importamos la acción para limpiar la redirección

const Register = () => {
  const dispatch = useDispatch();
  const isSignUpMode = useSelector((state) => state.container.signUpMode);
  const redirectTo = useSelector((state) => state.container.redirectTo); // Obtener la ruta de redirección
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    // Tu lógica de registro aquí
  };

  const handleSignInMode = () => {
    dispatch(setSignUpMode(false));
  };

  const password = watch("password", "");

  useEffect(() => {
    // Limpiar la redirección después de renderizar el componente
    dispatch(clearRedirectTo());
  }, [dispatch]);

  // Condición combinada con el operador ||
  const containerClass = isSignUpMode ? "" : "sign-up-mode";

  if (redirectTo) {
    // Si redirectTo tiene un valor, redirigimos usando window.location.href
    window.location.href = redirectTo;
    // Retornamos null para evitar renderizar el resto del componente
    return null;
  }

  return (
    <div className={`container ${containerClass}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form onSubmit={handleSubmit(onSubmit)} className="sign-up-form">
            <h2 className="title">Registrarse</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Username"
                {...register("username")}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input
                type="email"
                placeholder="Email"
                {...register("email", { required: true })}
              />
              {errors.email && <span>Email is required</span>}
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
              />
              {errors.password && <span>Password is required</span>}
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Confirm Password"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
              />
              {errors.confirmPassword && (
                <span>{errors.confirmPassword.message}</span>
              )}
            </div>
            <input type="submit" className="btn" value="Sign up" />
            <p className="social-text">Or Sign up with social platforms</p>
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
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button
              className="btn transparent"
              id="sign-up-btn"
              onClick={handleSignInMode}
            >
              Sign up
            </button>
          </div>
          <img src="img/log.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button className="btn transparent" onClick={handleSignInMode}>
              Iniciar Sesión
            </button>
          </div>
          <img src="img/register.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Register;
