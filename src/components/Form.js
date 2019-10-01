import React, {useState, Fragment} from 'react';
import PropTypes from 'prop-types';

const Form = ({addAppointment}) => {

    const initialState = {
        pet: '',
        owner: '',
        date: '',
        time: '',
        symptom: ''
    }

    const [appointment, setAppointment] = useState(initialState);

    const handleChange = e => {
        setAppointment({
            ...appointment,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();

        addAppointment(appointment);

        setAppointment(initialState);
    }

    return (
        <Fragment>
            <h2>Crear Cita</h2>

            <form onSubmit={handleSubmit}>
                <label>Nombre Mascota</label>
                <input 
                type="text" 
                name="pet"
                className="u-full-width" 
                placeholder="Nombre Mascota" 
                onChange={handleChange}
                value={appointment.pet}
                />

                <label>Nombre Dueño</label>
                <input 
                type="text" 
                name="owner"
                className="u-full-width"  
                placeholder="Nombre Dueño de la Mascota" 
                onChange={handleChange}
                value={appointment.owner}
                />

                <label>Fecha</label>
                <input 
                type="date" 
                className="u-full-width"
                name="date"
                onChange={handleChange}
                value={appointment.date}
                />               

                <label>Hora</label>
                <input 
                type="time" 
                className="u-full-width"
                name="time" 
                onChange={handleChange}
                value={appointment.time}
                />

                <label>Sintomas</label>
                <textarea 
                className="u-full-width"
                name="symptom"
                onChange={handleChange}
                value={appointment.symptom}
                >
                </textarea>

                <button type="submit" className="button-primary u-full-width">Agregar</button>
            </form>
        </Fragment>
    );
};

Form.propTypes = {
    addAppointment: PropTypes.func.isRequired
};

export default Form;