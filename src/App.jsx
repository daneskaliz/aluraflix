import * as React from 'react';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Banner from './components/Banner.jsx';
import Category from './components/Category.jsx';
import Footer from './components/Footer.jsx';
import CardForm from './components/CardForm.jsx';
import * as placeHolders from '../db.json';

function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [formData, setFormData] = useState({ title: '', imageURL: '', description: '', videoURL: '', category: 'Front End' });
  const [selectedCardIndex, setselectedCardIndex] = useState(null);
  const openForm = () => setFormOpen(true);
  const clearForm = () => setFormData({ title: '', imageURL: '', description: '', videoURL: '', category: 'Front End' });
  const closeForm = () => {
    clearForm();
    setselectedCardIndex(null);
    setFormOpen(false);
  };
  const [cards, setCards] = useState([]);
  
  const [categories, setCategories] = useState([
    { title: 'Front End', color: 'sky-300', cards: [] },
    { title: 'Back End', color: 'green-500', cards: [] },
    { title: 'Innovación y Gestión', color: 'yellow-500', cards: [] },
  ]);

  function updateCategories() {
    const categoriesUpdated = categories.map(category => {
      return {
        ...category,
        cards: cards.filter(card => card.category == category.title),
      } });
      setCategories(categoriesUpdated);
  }

  function updateCard(cardUpdates) {
    const currentCards = [...cards];
    currentCards[selectedCardIndex] = cardUpdates;
    setCards(currentCards);
    closeForm();
    alert("Los cambios fueron guardados.")
  }

  function createCard(cardData) {
    const currentCards = [...cards];
    currentCards.push(cardData);
    setCards([...currentCards]);
    closeForm();
    alert("El video fue agregado.")
  }

  function selectCardForEdition(title) {
    const cardIndex = cards.findIndex(card => card.title == title);
    setselectedCardIndex(cardIndex);
    setFormData(cards[cardIndex]);
    openForm();
  }

  function selectCardForDeletion(title) {
    const deletionConfirmed = confirm("El video se borrará permanentemente si aceptas.");
    if (!deletionConfirmed) return;
    const cardIndex = cards.findIndex(card => card.title == title);
    const currentCards = [...cards];
    currentCards.splice(cardIndex, 1);
    setCards(currentCards);
  }

  function getDataFromAPI() {
    fetch("http://localhost:3000/data")
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch((e) => (e.message == "Failed to fetch") ? setCards(placeHolders.data) : console.error(e))
  }

  useEffect(() => updateCategories(), [cards]);
  useEffect(() => getDataFromAPI(), []);

  return (
    <>
      <Navbar openForm={openForm} />
      <Banner />

      { formOpen == true ? <CardForm
      closeForm={closeForm}
      formData={formData}
      categories={categories}
      selectedCardIndex={selectedCardIndex}
      updateCard={updateCard}
      createCard={createCard}
      cards={cards}
      /> : ''}

      { categories.map((category) => (
        <Category
        key={category.title}
        category={category}
        selectCardForEdition={selectCardForEdition}
        selectCardForDeletion={selectCardForDeletion}
      />)
      ) }
      <Footer />
    </>
  )
}

export default App
