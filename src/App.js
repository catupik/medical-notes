import { useEffect, useRef, useState } from "react";
import "./App.css";
import PatientCards from "./PatientCards";
import PatientInfo from "./PatientInfo";
import uuid from "react-uuid";

function App() {
  const [cards, setCards] = useState(
    localStorage.cards ? JSON.parse(localStorage.cards) : []
  );
  const [selectedPatient, setSelectedPatient] = useState(false);

const cardsContainerRef = useRef(null);
const handleEmptyClick = (e) => {
  if (!cardsContainerRef.current.contains(e.target)){
    setSelectedPatient(false)
  }
}

useEffect(()=> {
  document.addEventListener('click', handleEmptyClick);
  return ()=> {
    document.removeEventListener('click', handleEmptyClick)
  };
}, [])

useEffect(()=>{
  localStorage.setItem('cards', JSON.stringify(cards))
}, [cards])

  const cardAdd = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split("T")[0];

    const newCard = {
      id: uuid(),
      date: formattedDate,
      name: "",
      desease: "",
      symptoms: "",
      prescriptions: "",
    };
    setCards([newCard, ...cards]);
  };

  const cardDelete = (patientId) => {
    setCards(cards.filter(({ id }) => id !== patientId));
  };

  const updateCard = (updatedCard) => {
    const updatedCards = cards.map((card) => {
      if (card.id === updatedCard.id) {
        return updatedCard;
      }
      return card;
    });
    setCards(updatedCards);
  };

  const getActiveCard = () => {
    return cards.find(({ id }) => id === selectedPatient);
  };

  return (
    <div className="App">
      <PatientCards
        cards={cards}
        setCards={setCards}
        cardAdd={cardAdd}
        cardDelete={cardDelete}
        selectedPatient={selectedPatient}
        setSelectedPatient={setSelectedPatient}
        cardsContainerRef={cardsContainerRef}
      />

      <PatientInfo
        cardDelete={cardDelete}
        selectedPatient={getActiveCard()}
        updateCard={updateCard}
      />
    </div>
  );
}

export default App;
