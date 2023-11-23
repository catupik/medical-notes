function PatientInfo({selectedPatient, updateCard, cardDelete}) {

  const editPatientInfo = (myInput, value) =>{
    updateCard({
      ...selectedPatient, 
      [myInput] : value
    })
  }
  if (!selectedPatient){ return <p></p>

  }

  return (
    <div className="whole-info">
      <div className="p-name">
        <input 
          type="date" 
          className="myInput" 
          value={selectedPatient.date}
          onChange={(e)=> editPatientInfo('date', e.target.value)}
        />

        <textarea 
          id="name" 
          className="name" 
          type="text" 
          placeholder="name"
          value={selectedPatient.name}
          onChange={(e)=>editPatientInfo('name', e.target.value)}>
         </textarea>
      
      </div>

      <div className="info">
        <textarea 
          id="desease"
          value={selectedPatient.desease}
          placeholder="desease"
          onChange={(e)=>editPatientInfo('desease', e.target.value)}>
        </textarea>

        <textarea 
          id="symptoms"
          value={selectedPatient.symptoms}
          placeholder="symptoms"
          onChange={(e)=>editPatientInfo('symptoms', e.target.value)}
          >
        </textarea>

        <textarea 
          id="prescriptions"
          value={selectedPatient.prescriptions}
          className="prescriptions" 
          placeholder="prescriptions"
          onChange={(e)=>editPatientInfo('prescriptions', e.target.value)}>
        </textarea>
        {/* <button className="delete-card" onClick={()=>cardDelete(id)}>Delete Card</button> */}
      </div>
    </div>
  );
}
export default PatientInfo;
