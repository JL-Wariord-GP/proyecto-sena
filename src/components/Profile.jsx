import principal from "../css/App.module.css";
import profile from "../css/Profile.module.css";
import Aside from "./AsideProfile";
import Right from "./Right";
import { useState } from "react";

function Profile() {
  const [formData, setFormData] = useState({
    fullName: "",
    birthDate: "",
    email: "",
    address: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Datos actualizados con éxito!");
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      birthDate: "",
      email: "",
      address: "",
      phone: "",
    });
  };

  return (
    <div className={`${principal.containerBox}`}>
      <Aside />
      <main className={profile["profile-main"]}>
        <header className={profile["profile-header"]}>
          <h1 className={profile["profile-title"]}>Actualiza tu Información</h1>
          <p className={profile["profile-subtitle"]}>
            Mantén tu perfil al día actualizando tu información personal.
          </p>
        </header>
        <form className={profile["profile-form"]} onSubmit={handleSubmit}>
          {/* Nombre Completo */}
          <div className={profile["profile-input-group"]}>
            <label htmlFor="fullName" className={profile["profile-label"]}>
              Nombre Completo
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className={profile["profile-input"]}
              placeholder="Ingresa tu nombre completo"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Fecha de Nacimiento */}
          <div className={profile["profile-input-group"]}>
            <label htmlFor="birthDate" className={profile["profile-label"]}>
              Fecha de Nacimiento
            </label>
            <input
              type="date"
              id="birthDate"
              name="birthDate"
              className={profile["profile-input"]}
              value={formData.birthDate}
              onChange={handleChange}
              required
            />
          </div>

          {/* Correo Electrónico */}
          <div className={profile["profile-input-group"]}>
            <label htmlFor="email" className={profile["profile-label"]}>
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={profile["profile-input"]}
              placeholder="Ingresa tu correo electrónico"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Dirección */}
          <div className={profile["profile-input-group"]}>
            <label htmlFor="address" className={profile["profile-label"]}>
              Dirección
            </label>
            <textarea
              id="address"
              name="address"
              className={`${profile["profile-input"]} ${profile["profile-textarea"]}`}
              placeholder="Ingresa tu dirección"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          {/* Número Telefónico */}
          <div className={profile["profile-input-group"]}>
            <label htmlFor="phone" className={profile["profile-label"]}>
              Número Telefónico
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className={profile["profile-input"]}
              placeholder="Ingresa tu número telefónico"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          {/* Botones */}
          <div className={profile["profile-actions"]}>
            <button type="submit" className={profile["profile-btn-primary"]}>
              Guardar Cambios
            </button>
            <button
              type="button"
              className={profile["profile-btn-secondary"]}
              onClick={handleReset}>
              Cancelar
            </button>
          </div>
        </form>
      </main>
      <Right />
    </div>
  );
}

export default Profile;
