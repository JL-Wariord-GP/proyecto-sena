import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./page/Login";
import Container from "./components/Container";
import Error404 from "./page/Error404"; // Importa el componente de error 404
import Error403 from "./page/Error403"; // Importa el componente de error 403

function App() {
  // Simula autenticación
  const isAuthenticated = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* Utiliza una función para verificar la autenticación */}
        <Route
          path="/main"
          element={
            isAuthenticated ? <Container /> : <Navigate to="/" replace />
          }
        />
        {/* Ruta para el componente de error 403 */}
        <Route
          path="/error403"
          element={<Error403 />}
        />
        {/* Ruta para el componente de error 404 */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
