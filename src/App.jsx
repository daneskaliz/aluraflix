import * as React from 'react';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Banner from './components/Banner.jsx';
import Category from './components/Category.jsx';
import Footer from './components/Footer.jsx';
import CardForm from './components/CardForm.jsx';

import front_1 from './assets/front_1.png';
import front_2 from './assets/front_2.png';
import front_3 from './assets/front_3.png';
import back_1 from './assets/back_1.png';
import back_2 from './assets/back_2.png';
import back_3 from './assets/back_3.png';
import soft_1 from './assets/soft_1.png';
import soft_2 from './assets/soft_2.png';
import soft_3 from './assets/soft_3.png';

function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [formData, setFormData] = useState({ title: '', imageURL: '', description: '', videoURL: '', category: 'Front End' });
  const [selectedCardIndex, setselectedCardIndex] = useState(null);
  const openForm = () => setFormOpen(true);
  const clearForm = () => setFormData({ title: '', imageURL: '', description: '', videoURL: '', category: 'Front End' });
  const closeForm = () => {
    clearForm();
    setFormOpen(false);
  };
  const [cards, setCards] = useState([
    { title: 'Variables en JS', imageURL: front_1, description: 'Video 1 serie Front End', videoURL: 'https://www.youtube.com/watch?v=PztCEdIJITY', category: 'Front End' },
    { title: 'JavaScript', imageURL: front_2, description: 'Video 2 serie Front End', videoURL: 'https://www.youtube.com/watch?v=GJfOSoaXk4s', category: 'Front End' },
    { title: 'Equipo Front End', imageURL: front_3, description: 'Video 3 serie Front End', videoURL: 'https://www.youtube.com/watch?v=rpvrLaBQwgg', category: 'Front End' },
    { title: 'Spring Framework', imageURL: back_1, description: 'Video 1 serie Backend', videoURL: 'https://www.youtube.com/watch?v=t-iqt1b2qqk', category: 'Back End' },
    { title: 'SQL vs NoSQL', imageURL: back_2, description: 'Video 2 serie Back End', videoURL: 'https://www.youtube.com/watch?v=cLLKVd5CNLc', category: 'Back End' },
    { title: 'Java Enum', imageURL: back_3, description: 'Video 3 serie Backend', videoURL: 'https://www.youtube.com/watch?v=EoPvlE85XAQ', category: 'Back End' },
    { title: 'Que son las Soft Skills', imageURL: soft_1, description: 'Video 1 serie Soft Skills', videoURL: 'https://www.youtube.com/watch?v=vhwspfvI52k', category: 'Innovación y Gestión' },
    { title: '7 Soft Skills mas deseadas', imageURL: soft_2, description: 'Video 2 serie Soft Skills', videoURL: 'https://www.youtube.com/watch?v=YhR7Zp8NUzE', category: 'Innovación y Gestión' },
    { title: 'Metodologías Ágiles', imageURL: soft_3, description: 'Video 1 serie Soft Skills', videoURL: 'https://www.youtube.com/watch?v=6N3OkLCfK-0', category: 'Innovación y Gestión' },
  ]);
  
  const [categories, setCategories] = useState([
    { title: 'Front End', color: 'sky-300', cards: [] },
    { title: 'Back End', color: 'green-500', cards: [] },
    { title: 'Innovación y Gestión', color: 'yellow-500', cards: [] },
  ]);

  function updateCategories() {
    const categoriesUpdated = categories.map(category => {
      return { ...category, cards: cards.filter(card => card.category == category.title) };
    });
    setCategories(categoriesUpdated);
  }

  function updateCard(formUpdates) {
    const currentCards = [...cards];
    currentCards[selectedCardIndex] = formUpdates;
    setCards(currentCards);
    closeForm();
  }

  function selectCardForEdition(title) {
    const cardIndex = cards.findIndex(card => card.title == title);
    setselectedCardIndex(cardIndex);
    setFormData(cards[cardIndex]);
    openForm();
  }

  useEffect(() => updateCategories(), [cards])

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
      cards={cards}
      /> : ''}

      { categories.map((category) => (
        <Category
        key={category.title}
        category={category}
        selectCardForEdition={selectCardForEdition}
      />)
      ) }
      <Footer />
    </>
  )
}

export default App
