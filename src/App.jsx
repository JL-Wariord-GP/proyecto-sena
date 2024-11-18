import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import Container from "./components/Container";
import Profile from "./components/Profile"; // Importa el componente de perfil
import Error404 from "./page/Error404";
import Error403 from "./page/Error403";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta de inicio de sesión */}
        <Route path="/" element={<Login />} />

        {/* Ruta principal protegida */}
        <Route
          path="/main"
          element={<ProtectedRoute element={<Container />} />}
        />

        {/* Ruta del perfil protegida */}
        <Route
          path="/profile"
          element={<ProtectedRoute element={<Profile />} />}
        />

        {/* Páginas de error */}
        <Route path="/error403" element={<Error403 />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
