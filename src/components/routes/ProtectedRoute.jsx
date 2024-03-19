// ProtectedRoute.js
import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ ...rest }) => {
  const isAuthenticated = true; // Aquí puedes implementar tu lógica de autenticación

  return isAuthenticated ? <Route {...rest} /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
