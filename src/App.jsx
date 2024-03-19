// App.js
import "./App.module.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./page/Login";
import Container from "./components/Container";

function App() {
  // Simular autenticación 
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
