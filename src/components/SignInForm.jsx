import { useForm } from "react-hook-form";
import PropTypes from "prop-types";

const SignInForm = ({ onSubmit, isLoading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="sign-in-form">
      <h2 className="title">Iniciar Sesión</h2>
      <div className="input-field">
        <i className="fas fa-envelope" />
        <input
          className="input-text"
          type="email"
          placeholder="Correo Electrónico"
          {...register("signInEmail", {
            required: "Correo electrónico requerido",
            pattern: {
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "Correo electrónico no válido",
            },
          })}
        />
        {errors.signInEmail && (
          <span className="error-message">{errors.signInEmail.message}</span>
        )}
      </div>
      <div className="input-field">
        <i className="fas fa-lock" />
        <input
          type="password"
          placeholder="Contraseña"
          {...register("signInPassword", {
            required: "Contraseña requerida",
          })}
        />
        {errors.signInPassword && (
          <span className="error-message">{errors.signInPassword.message}</span>
        )}
      </div>
      <input type="submit" className="btn solid" value="Iniciar Sesión" />
      {isLoading && ""}
    </form>
  );
};

SignInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default SignInForm;
