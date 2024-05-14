import React, { useRef } from 'react';
import logo from '../Assets/placeholder.jpg';
import './CardCarousel.css';

const CardCarousel = () => {
  const cards = [
    { id: 1, imageUrl: logo, title: 'Feature 1', description: 'Description for Feature 1' },
    { id: 2, imageUrl: logo, title: 'Feature 2', description: 'Description for Feature 2' },
    { id: 3, imageUrl: logo, title: 'Feature 3', description: 'Description for Feature 3' },
    { id: 4, imageUrl: logo, title: 'Feature 4', description: 'Description for Feature 4' },
    { id: 5, imageUrl: logo, title: 'Feature 5', description: 'Description for Feature 5' },
    { id: 6, imageUrl: logo, title: 'Feature 6', description: 'Description for Feature 6' },
    { id: 7, imageUrl: logo, title: 'Feature 7', description: 'Description for Feature 7' },
    // Add more cards as needed
  ];

  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: carouselRef.current.scrollLeft - 300, // Adjust this value as needed for scrolling distance
        behavior: 'smooth', // Smooth scroll animation
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: carouselRef.current.scrollLeft + 300, // Adjust this value as needed for scrolling distance
        behavior: 'smooth', // Smooth scroll animation
      });
    }
  };

  return (
    <div className="card-carousel-container">
      <button className="scroll-btn" onClick={scrollLeft}>{'<'}</button>
      <div className="card-carousel" ref={carouselRef}>
        {cards.map(card => (
          <div key={card.id} className="card">
            <img src={card.imageUrl} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
      <button className="scroll-btn" onClick={scrollRight}>{'>'}</button>
    </div>
  );
}

export default CardCarousel;