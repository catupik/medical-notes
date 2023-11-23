function PatientCards({cardAdd, cards, setCards, cardDelete, selectedPatient, setSelectedPatient}){

    
    return(

        

        <div className="cards">
            <h1>Patients' Cards</h1>
            
            <button className="add-card" onClick={cardAdd}>New Card</button>
            

            <div>
            {cards.map(({id, date, name, desease})=>{

                return(
                    <div 
                        key={id} 
                        className={`patient ${id === selectedPatient ? "p-selected": "p-default"}`}
                        onClick={()=> setSelectedPatient(id)}>
                    <p className="date">{date}</p>    
                    <p>{name.substring(0, 50)}</p>
                    <p>{desease.substring(0, 50)}</p>
                    <button className="delete-card" onClick={()=>cardDelete(id)}>Delete Card</button>
                </div>
                )
                
            })}

            </div>
        </div>
    )
}
export default PatientCards;