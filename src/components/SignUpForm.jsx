import { useForm } from "react-hook-form";
import PropTypes from "prop-types";

const SignUpForm = ({ onSubmit, isLoading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleFormSubmit = async (data) => {
    try {
      await onSubmit(data);
      // Limpia los campos del formulario después de un envío exitoso
      reset();
    } catch (error) {
      // Maneja los errores aquí si es necesario
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="sign-up-form">
      <h2 className="title">Registrarse</h2>
      <div className="input-field">
        <i className="fas fa-user" />
        <input
          className="input-text"
          type="text"
          placeholder="Usuario"
          {...register("signUpUsername", {
            required: "Usuario requerido",
          })}
        />
        {errors.signUpUsername && (
          <span className="error-message">{errors.signUpUsername.message}</span>
        )}
      </div>
      <div className="input-field">
        <i className="fas fa-envelope" />
        <input
          type="email"
          placeholder="Email"
          {...register("signUpEmail", {
            required: "Email requerido",
          })}
        />
        {errors.signUpEmail && (
          <span className="error-message">{errors.signUpEmail.message}</span>
        )}
      </div>
      <div className="input-field">
        <i className="fas fa-lock" />
        <input
          type="password"
          placeholder="Contraseña"
          {...register("signUpPassword", {
            required: "Contraseña requerida",
          })}
        />
        {errors.signUpPassword && (
          <span className="error-message">{errors.signUpPassword.message}</span>
        )}
      </div>
      <input type="submit" className="btn" value="Registrarse" />
      {isLoading && ""}
    </form>
  );
};

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default SignUpForm;
