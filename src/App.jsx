import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import Container from "./components/Container";
import Error404 from "./page/Error404";
import Error403 from "./page/Error403";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/main"
          element={<ProtectedRoute element={<Container />} />}
        />
        <Route path="/error403" element={<Error403 />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
