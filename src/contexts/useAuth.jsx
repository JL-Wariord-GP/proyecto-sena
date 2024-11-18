// src/hooks/useAuth.js

import { useContext } from "react";
import AuthContext from "../contexts/useAuthProvider"; 

// Hook para usar el contexto de autenticación
const useAuth = () => useContext(AuthContext);

export default useAuth;
