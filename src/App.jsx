import * as React from 'react';
import { useState } from 'react';
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
  const [formData, setFormData] = useState({ title: '', imageURL: '', description: '', videoURL: '', category: '' });
  const openForm = () => setFormOpen(true);
  const closeForm = () => setFormOpen(false);
  const cards = [
    { title: 'Variables en JS', imageURL: front_1, description: '', videoURL: '', category: 'Front End' },
    { title: 'JavaScript', imageURL: front_2, description: '', videoURL: '', category: 'Front End' },
    { title: 'Equipo Front End', imageURL: front_3, description: '', videoURL: '', category: 'Front End' },
    { title: 'Spring Framework', imageURL: back_1, description: '', videoURL: '', category: 'Back End' },
    { title: 'SQL vs NoSQL', imageURL: back_2, description: '', videoURL: '', category: 'Back End' },
    { title: 'Java Enum', imageURL: back_3, description: '', videoURL: '', category: 'Back End' },
    { title: 'Que son las Soft Skills', imageURL: soft_1, description: '', videoURL: '', category: 'Innovación y Gestión' },
    { title: '7 Soft Skills mas deseadas', imageURL: soft_2, description: '', videoURL: '', category: 'Innovación y Gestión' },
    { title: 'Metodologías Ágiles', imageURL: soft_3, description: '', videoURL: '', category: 'Innovación y Gestión' },
  ];
  
  const categories = [
    { title: 'Front End', color: 'sky-300', cards: [] },
    { title: 'Back End', color: 'green-500', cards: [] },
    { title: 'Innovación y Gestión', color: 'yellow-500', cards: [] },
  ];

  (function pushCardsIntoCategories() {
    cards.forEach(card => {
      const categoryIndex = categories.findIndex(category => category.title == card.category);
      categories[categoryIndex].cards.push(card);
    });
  }())

  return (
    <>
      <Navbar openForm={openForm} closeForm={closeForm} />
      <Banner />
      {formOpen == true ? <CardForm closeForm={closeForm} formData={formData} categories={categories} /> : ''}
      { categories.map((category) => <Category category={category} key={category.title} />) }
      <Footer />
    </>
  )
}

export default App
