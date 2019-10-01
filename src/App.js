import React, {useState, useEffect, Fragment} from 'react';
import Form from './components/Form';
import Appointment from './components/Appointment';

function App() {

  const [appointments, setAppointments] = useState(
    JSON.parse(localStorage.getItem('appointments'))
  );

  const addAppointment = appointment => {

    const newAppointments = [...appointments, appointment];

    setAppointments(newAppointments);
  }

  const removeAppointment = index => {

    const newAppointments = [...appointments];

    newAppointments.splice(index, 1);

    setAppointments(newAppointments);
  }

  useEffect(() => {

    localStorage.setItem('appointments', JSON.stringify(appointments));
    
  }, [appointments])

  const title = Object.keys(appointments).length === 0 ? 'No hay citas' : 'Administrar citas';

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form addAppointment={addAppointment} />
          </div>
          <div className="one-half column">
            <h2>{title}</h2>
            {appointments.map((appointment, index) => (
              <Appointment 
                key={index}
                index={index}
                appointment={appointment}
                removeAppointment={removeAppointment}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
