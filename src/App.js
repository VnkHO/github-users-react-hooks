import React, { useState } from 'react'

import Form from '../src/components/Form'
import CardList from '../src/components/CardList'

import './App.css';

function App() {
  const [cards, setCards] = useState([])

  const addNewCard = cardInfo => {
    setCards(cards.concat(cardInfo))
  }

  return (
    <div className="App">
      <Form onSubmit={addNewCard} />
      <CardList cards={cards} />
    </div>
  )
}

export default App;
