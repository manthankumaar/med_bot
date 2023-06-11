import React from 'react';

function PatientDetails() {
  return (
    <div className="patient-details-container">
      <div className="patient-row">
        <div className="patient-col">
          <p>Patient ID:</p>
        </div>
        <div className="patient-col">
          <p>001</p>
        </div>
        <div className="patient-col">
          <p>Patient Name:</p>
        </div>
        <div className="patient-col">
          <p>Aaditya</p>
        </div>
      </div>
      <div className="patient-row">
        <div className="patient-col">
          <p>Patient Age:</p>
        </div>
        <div className="patient-col">
          <p>05</p>
        </div>
        <div className="patient-col">
          <p>Patient Phone:</p>
        </div>
        <div className="patient-col">
          <p>0123456789</p>
        </div>
      </div>
    </div>
  );
}

export default PatientDetails;