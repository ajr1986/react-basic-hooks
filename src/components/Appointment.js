import React from 'react';
import PropTypes from 'prop-types';

const Appointment = ({index, appointment, removeAppointment}) => {

    return (
        <div className="cita">
            <p>Mascota: <span>{appointment.pet}</span></p>
            <p>Dueño: <span>{appointment.owner}</span></p>
            <p>Fecha: <span>{appointment.date}</span></p>
            <p>Hora: <span>{appointment.time}</span></p>
            <p>Síntomas: <span>{appointment.symptom}</span></p>
            <button 
                onClick={() => removeAppointment(index)}
                className="button eliminar u-full-width">
                Eliminar
            </button>
        </div>
    );
};

Appointment.propTypes = {
    index: PropTypes.number.isRequired,
    appointment: PropTypes.object.isRequired,
    removeAppointment: PropTypes.func.isRequired
};

export default Appointment;