// src/hooks/useAuth.js
import { useContext } from "react";
import AuthContext from "../contexts/useAuthProvider"; // Importa el contexto desde su nuevo archivo

// Hook para usar el contexto de autenticación
const useAuth = () => useContext(AuthContext);

export default useAuth;
