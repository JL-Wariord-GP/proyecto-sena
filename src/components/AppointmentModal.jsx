import { useState } from "react";
import ReactModal from "react-modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from "prop-types";


ReactModal.setAppElement("#root");

const AppointmentModal = ({ isOpen, onRequestClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [appointmentDate, setAppointmentDate] = useState(null);
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !appointmentDate || !phone) {
      setIsValid(false);
      return;
    }

    setIsValid(true);
    alert("Cita agendada con éxito!");
    onRequestClose();
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Agendar Cita">
      <div className="modal-container">
        <h2>Agendar Cita</h2>
        <form onSubmit={handleSubmit} className="appointment-form">
          <div className="form-group">
            <label htmlFor="name">Nombre Completo</label>
            <input
              type="text"
              id="name"
              placeholder="Ingresa tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              placeholder="Ingresa tu correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Teléfono</label>
            <input
              type="tel"
              id="phone"
              placeholder="Ingresa tu teléfono"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="appointmentDate">Fecha y Hora de la Cita</label>
            <DatePicker
              selected={appointmentDate}
              onChange={(date) => setAppointmentDate(date)}
              showTimeSelect
              dateFormat="Pp"
              minDate={new Date()}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="notes">Notas Adicionales (Opcional)</label>
            <textarea
              id="notes"
              placeholder="Escribe tus notas aquí..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}></textarea>
          </div>

          {!isValid && (
            <p className="error-message">
              Por favor, completa todos los campos obligatorios.
            </p>
          )}

          <div className="modal-footer">
            <button type="submit" className="submit-btn">
              Agendar Cita
            </button>
            <button
              type="button"
              className="cancel-btn"
              onClick={onRequestClose}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </ReactModal>
  );
};

AppointmentModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

export default AppointmentModal;
