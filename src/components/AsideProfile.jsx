import Logo from "../assets/LogoDiagnoCita.png";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function Aside() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Eliminar el token de autenticación del Local Storage
    localStorage.removeItem("authToken");
    // Eliminar otros datos del usuario del Local Storage si es necesario
    localStorage.removeItem("user");
    // Redirigir al usuario a la página de inicio de sesión
    navigate("/");
  };

  const goToProfile = () => {
    // Navegar al perfil del usuario
    navigate("/profile");
  };
  const goToMain = () => {
    // Navegar al main
    navigate("/main");
  };

  return (
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
        {/* Navegar al main */}
        <a onClick={goToMain}>
          <span className="material-icons-sharp">grid_view</span>
          <h3>Menú Principal</h3>
        </a>
        {/* Navegar al perfil del usuario */}
        <a onClick={goToProfile} className="active">
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
        <a onClick={handleLogout}>
          <span className="material-icons-sharp">logout</span>
          <h3>Cerrar Sesión</h3>
        </a>
      </div>
    </aside>
  );
}

// Define el tipo de la prop btnMenu
Aside.propTypes = {
  btnMenu: PropTypes.node,
};

export default Aside;
