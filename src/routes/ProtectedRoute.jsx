// ProtectedRoute.js
import {  Navigate } from "react-router-dom";
import PropTypes from "prop-types"; // Importa PropTypes para la validación
import useAuth from "../contexts/useAuth"; // Asegúrate de que la ruta al contexto sea correcta

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useAuth(); // Utiliza el contexto para obtener el estado de autenticación

  return isAuthenticated ? element : <Navigate to="/" replace />;
};

// Define el tipo de las props
ProtectedRoute.propTypes = {
  element: PropTypes.element.isRequired, // Elemento React requerido
};

export default ProtectedRoute;
