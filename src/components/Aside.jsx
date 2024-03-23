// Aside.js
import Logo from "../assets/LogoDiagnoCita.png";
import { useNavigate } from "react-router-dom";

function Aside() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Eliminar los datos del usuario del Local Storage al cerrar sesión
    localStorage.removeItem("user");
    // Redirigir al usuario a la página de inicio de sesión
    navigate("/");
  };

  return (
    <aside>
      <aside>
        <div className="top">
          <div className="logo">
            <img src={Logo} alt="Logo" />
            <h2 className="text-muted">
              Diagno<span className="text-muted-span">Cita</span>
            </h2>
            <div className="close" id="close-btn">
              <span className="material-icons-sharp">close</span>
            </div>
          </div>
        </div>

        <div className="sidebar">
          <a href="#" className="active">
            <span className="material-icons-sharp">grid_view</span>
            <h3>Menú Principal</h3>
          </a>

          <a href="#">
            <span className="material-icons-sharp">person_outline</span>
            <h3>Mi Perfil</h3>
          </a>

          <a href="#">
            <span className="material-symbols-outlined">
              notifications_active
            </span>
            <h3>Notificaciones</h3>
            <span className="message-count">26</span>
          </a>

          <a href="#">
            <span className="material-symbols-outlined">menu_book</span>
            <h3>Tutorial</h3>
          </a>

          <a href="#">
            <span className="material-symbols-outlined">quiz</span>
            <h3>Preguntas Frecuentes</h3>
          </a>

          <a href="#">
            <span className="material-symbols-outlined">help_center</span>
            <h3>Centro de Ayuda</h3>
          </a>

          <a href="#">
            <span className="material-symbols-outlined">privacy_tip</span>
            <h3>Políticas de Uso</h3>
          </a>

          <a href="#">
            <span className="material-symbols-outlined">shield_person</span>
            <h3>Políticas de Privacidad</h3>
          </a>

          {/* Agregar evento onClick para cerrar sesión */}
          <a href="#" onClick={handleLogout}>
            <span className="material-icons-sharp">logout</span>
            <h3>Cerrar Sesión</h3>
          </a>
        </div>
      </aside>
    </aside>
  );
}

export default Aside;
