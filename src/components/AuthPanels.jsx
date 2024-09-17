import PropTypes from "prop-types";
import Log from "../assets/log.svg";
import Register from "../assets/register.svg";

const AuthPanels = ({ onSignUp, onSignIn }) => (
  <div className="panels-container">
    <div className="panel left-panel">
      <div className="content">
        <h3>¡Bienvenido a nuestro servicio de citas!</h3>
        <p>
          Organiza tus citas de manera eficiente y segura con nosotros. <br />{" "}
          ¿No tienes cuenta?
        </p>
        <button className="btn transparent btn-hover" onClick={onSignUp}>
          Registrarse
        </button>
      </div>
      <img src={Log} className="image" alt="Imagen de registro" />
    </div>

    <div className="panel right-panel">
      <div className="content">
        <h3>¿Ya tienes una cuenta?</h3>
        <p>
          Accede a tu cuenta para gestionar tus citas de manera eficiente.
          Estamos aquí para simplificar tu experiencia.
        </p>
        <button className="btn transparent btn-hover" onClick={onSignIn}>
          Iniciar Sesión
        </button>
      </div>
      <img src={Register} className="image" alt="Imagen de inicio de sesión" />
    </div>
  </div>
);

AuthPanels.propTypes = {
  onSignUp: PropTypes.func.isRequired,
  onSignIn: PropTypes.func.isRequired,
};

export default AuthPanels;
