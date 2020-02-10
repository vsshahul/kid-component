import React, { useState } from 'react';
import './App.css';
import Header from './header/header';
import Card from './card/card';
import Modal from './modal/modal';
import CreateCard from './createCard/createCard';
import '@mdi/font/css/materialdesignicons.min.css';

import avatar from './assets/avatar.jpg';
import avatar1 from './assets/avatar1.jpg';
import avatar2 from './assets/avatar2.jpg';
import avatar3 from './assets/avatar3.jpg';

function App() {

  const [isModelOpen,setModel] = useState(false);

  const [cardState, setCardState] = useState(
    [
      {
        isActive : true,
        image: avatar,
        title: 'Alan Backer',
        subtitle: 'American school foundation',
        desc: 'Middle School',
        subjects: [
          { name: 'Mathematics', percentage: 90, color: 'progressBlue' },
          { name: 'Chemistry', percentage: 66, color: 'progressYellow' },
          { name: 'Physics', percentage: 56, color: 'progressRed' },
          { name: 'English', percentage: 76, color: 'progressGreen' }
        ]
      },
      {
        isActive : true,
        image: avatar1,
        title: 'Ray Cooper',
        subtitle: 'American school foundation',
        desc: 'Middle School',
        subjects: [
          { name: 'Mathematics', percentage: 60, color: 'progressBlue' },
          { name: 'Chemistry', percentage: 46, color: 'progressYellow' },
          { name: 'Physics', percentage: 76, color: 'progressRed' },
          { name: 'English', percentage: 66, color: 'progressGreen' }
        ]
      },
      {
        isActive : true,
        image: avatar2,
        title: 'Pew Die pie',
        subtitle: 'American school foundation',
        desc: 'Middle School',
        subjects: [
          { name: 'Mathematics', percentage: 88, color: 'progressBlue' },
          { name: 'Chemistry', percentage: 55, color: 'progressYellow' },
          { name: 'Physics', percentage: 46, color: 'progressRed' },
          { name: 'English', percentage: 75, color: 'progressGreen' }
        ]
      },
      {
        isActive : false,
        image: avatar3,
        title: 'Geralt',
        subtitle: 'American school foundation',
        desc: 'Middle School',
        isCardState: 'inactive',
        subjects: [
          { name: 'Mathematics', percentage: 76, color: 'progressBlue' },
          { name: 'Chemistry', percentage: 56, color: 'progressYellow' },
          { name: 'Physics', percentage: 63, color: 'progressRed' },
          { name: 'English', percentage: 84, color: 'progressGreen' }
        ]
      }
    ]
  );

  return (
    <div className="App">
      <Header />
      <main className='main'>
        <h1 className='primaryHeading'>My Kids</h1>
        <div className='flexContainer'>
          {
            cardState.map((card, index) => {
              return <Card
                key={card.title}
                {...{card, setCardState, cardState, index}}
              />
            })
          }
          <CreateCard 
          setModel={setModel}
          />
        </div>
        {
            <Modal 
            cardState={cardState}
            setCardState={setCardState}
            setModel={setModel}
            isModelOpen={isModelOpen}
            key={cardState}
            />
        }
      </main>
    </div>
  );
}

export default App;