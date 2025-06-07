import React, { useState } from 'react';
import './App.css';

const sections = [
  {
    name: 'Men',
    frontImg: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=facearea&w=600&h=400',
    backImg: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=facearea&w=600&h=400',
    link: 'https://api-ssl.shoppersstop.com/men/c-A10',
  },
  {
    name: 'Women',
    frontImg: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=600&h=400',
    backImg: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=600&h=400',
    link: 'https://api-ssl.shoppersstop.com/women/c-A20',
  },
  {
    name: 'Beauty',
    frontImg: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=600&h=400',
    backImg: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=600&h=400',
    link: 'https://api-ssl.shoppersstop.com/beauty/c-B10',
  },
  {
    name: 'Kids',
    frontImg: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=600&h=400',
    backImg: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=facearea&w=600&h=400',
    link: 'https://api-ssl.shoppersstop.com/kids/c-A40',
  },
  {
    name: 'Homestop',
    frontImg: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=facearea&w=600&h=400',
    backImg: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=facearea&w=600&h=400',
    link: 'https://api-ssl.shoppersstop.com/homeware/c-A80',
  },
  {
    name: 'Watches',
    frontImg: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=600&h=400',
    backImg: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=facearea&w=600&h=400',
    link: 'https://www.shoppersstop.com/category/watches',
  },
];

function Card({ section }) {
  const [flipped, setFlipped] = useState(false);
  const handleFlip = (e) => {
    e.stopPropagation();
    setFlipped(f => !f);
  };
  const handleNavigate = (e) => {
    e.stopPropagation();
    window.open(section.link, '_blank');
  };
  return (
    <div className={`flip-card${flipped ? ' flipped' : ''}`} onClick={handleFlip} tabIndex={0} role="button" aria-label={section.name}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={section.frontImg} alt={section.name + ' front'} className="card-img" />
        </div>
        <div className="flip-card-back">
          <img src={section.backImg} alt={section.name + ' back'} className="card-img" />
          <button className="card-btn" onClick={handleNavigate}>Shop Now</button>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div className="wall-header">
        <div className="wall-title-row">
          <span className="wall-flag left-flag" aria-hidden="true"></span>
          <span className="wall-title-main">WALL <span className="wall-title-of">- of -</span> FAME</span>
          <span className="wall-flag right-flag" aria-hidden="true"></span>
        </div>
        <div className="wall-subtitle">YOUR FAVORITE PREMIUM BRANDS, WITH THE BEST DEALS!</div>
      </div>
      <div className="card-grid">
        {sections.map(section => (
          <Card key={section.name} section={section} />
        ))}
      </div>
      <div className="wall-footer-bar">
        <span className="footer-dot"></span>
        <span className="footer-line"></span>
        <span className="wall-footer">CLICK ON YOUR FAVORITE BRAND TO REVEAL THE DISCOUNT.</span>
        <span className="footer-line"></span>
        <span className="footer-dot"></span>
      </div>
    </div>
  );
}

export default App;
