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
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import useAuthForms from "../hooks/useAuthForms";
import styles from "../css/login.module.css";
import Log from "../assets/log.svg";
import Register from "../assets/register.svg";
import "@fortawesome/fontawesome-free/css/all.css";

const Login = () => {
  const { isMainLoading, isSignUpMode, handleSignUpMode, handleSignInMode } =
    useAuthForms();

  return (
    <div
      className={`${styles.container} ${
        isSignUpMode ? styles["sign-up-mode"] : ""
      }`}>
      {isMainLoading || (
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
          {isSignUpMode ? <RegisterForm /> : <LoginForm />}
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
            onDragStart={(e) => e.preventDefault()}
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
            onDragStart={(e) => e.preventDefault()}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
