import * as React from 'react';
import Navbar from './components/Navbar.jsx';
import Banner from './components/Banner.jsx';
import CardSection from './components/CardSection.jsx';
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

  const cardsSections = [
    {
      title: 'FRONT END',
      color: 'sky-300',
      cards: [
        { title: 'Variables en JS', image: front_1 },
        { title: 'JavaScript', image: front_2 },
        { title: 'Equipo Front End', image: front_3 }
      ]
    },
    {
      title: 'BACK END',
      color: 'green-500',
      cards: [
        { title: 'Spring Framework', image: back_1 },
        { title: 'SQL vs NoSQL', image: back_2 },
        { title: 'Java Enum', image: back_3 }
      ]
    },
    {
      title: 'INNOVACIÓN Y GESTIÓN',
      color: 'yellow-500',
      cards: [
        { title: 'Que son las Soft Skills', image: soft_1 },
        { title: '7 Soft Skills mas deseadas', image: soft_2 },
        { title: 'Metodologías Ágiles', image: soft_3 }
      ]
    }
  ];

  return (
    <>
      <Navbar />
      <Banner />
      <CardForm />
      { cardsSections.map((cardSection) => <CardSection cardSection={cardSection} key={cardSection.title} />) }
      <Footer />
    </>
  )
}

export default App
