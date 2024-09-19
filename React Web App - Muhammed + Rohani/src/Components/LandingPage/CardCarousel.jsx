import React, { useRef } from 'react';
// import logo from '../Assets/placeholder.jpg';
import './CardCarousel.css';
import image1 from '../Assets/image1.png'
import image2 from '../Assets/image2.png'
import image3 from '../Assets/image3.jfif'

const CardCarousel = () => {
  const cards = [
    { id: 1, imageUrl: image1, title: 'Support for Seniors facing abuse', description: "If informed of elder abuse, provide immediate, confidential support, prioritize the individual's safety, listen empathetically, document carefully, and connect them with appropriate resources."},
    { id: 2, imageUrl: image2, title: 'Social and Community', description: 'Provide information about local community programs, clubs, and social activities tailored for seniors, promoting social engagement and reducing isolation.' },
    { id: 3, imageUrl: image3, title: 'Financial and Legal', description: 'Help seniors determine eligibility for benefits and entitlements, provide access to financial advisors for budgeting and retirement planning, and offer legal aid for issues like wills and power of attorney' },

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
