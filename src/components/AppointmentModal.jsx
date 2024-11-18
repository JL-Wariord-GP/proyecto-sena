import { useState } from "react";
import ReactModal from "react-modal";
import Calendar from "react-calendar"; 
import "react-calendar/dist/Calendar.css";
import PropTypes from "prop-types";
import "../css/AppointmentModal.css"; // Archivo CSS para estilos personalizados

ReactModal.setAppElement("#root");

const AppointmentModal = ({ isOpen, onRequestClose }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [isValid, setIsValid] = useState(true);

  const availableTimes = ["11:45", "12:15", "12:45", "13:15", "13:45", "14:15"];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedDate || !selectedTime) {
      setIsValid(false);
      return;
    }

    setIsValid(true);
    alert(
      `Cita agendada para el ${selectedDate.toLocaleDateString()} a las ${selectedTime}`
    );
    onRequestClose();
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Agendar Cita"
      className="custom-modal"
      overlayClassName="custom-modal-overlay">
      <div className="modal-container">
        <h2 className="modal-title">Agendamiento de cita</h2>
        <p className="modal-duration">-- ⏱ --</p>
        <div className="calendar-container">
          <h3>Selecciona una fecha:</h3>
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            minDate={new Date()}
          />
        </div>
        {selectedDate && (
          <div className="time-slot-container">
            <h3>Selecciona una hora:</h3>
            <div className="time-slots">
              {availableTimes.map((time) => (
                <button
                  key={time}
                  className={`time-slot ${
                    selectedTime === time ? "active" : ""
                  }`}
                  onClick={() => setSelectedTime(time)}>
                  {time}
                </button>
              ))}
            </div>
          </div>
        )}
        {!isValid && (
          <p className="error-message">
            Por favor, selecciona una fecha y una hora.
          </p>
        )}
        <div className="modal-footer">
          <button className="submit-btn" onClick={handleSubmit}>
            Confirmar Cita
          </button>
          <button className="cancel-btn" onClick={onRequestClose}>
            Cancelar
          </button>
        </div>
      </div>
    </ReactModal>
  );
};

AppointmentModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

export default AppointmentModal;
