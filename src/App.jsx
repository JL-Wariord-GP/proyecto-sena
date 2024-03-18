// App.js
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"; // Asegúrate de tener los estilos aquí

import Login from "./components/Login";
import Container from "./components/Container";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import { useLocalStorage } from "react-use";

function App() {
  const [user] = useLocalStorage("user", ""); // Corregir aquí

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoute canActive={user} redirectPath="/" />}>
          <Route path="/main" element={<Container />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
