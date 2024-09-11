import React from "react";
import ReactDOM from "react-dom/client"; // Importa desde 'react-dom/client'
import App from "./App";
import { AuthProvider } from "./contexts/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root")); // Crea el root

root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
