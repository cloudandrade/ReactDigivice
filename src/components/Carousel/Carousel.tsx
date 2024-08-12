import React from 'react';
import './Carousel.css'

type CarouselProps = {
  items: {
    id: number;
    digimon: string;
    image: string;
  }[];
};

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  if (items.length === 0) return <p>No evolutions available.</p>;

  return (
    <div className="carousel">
      {items.map(item => (
        <div key={item.id} className="carousel-item">
          <img src={item.image} alt={item.digimon} />
          <p>{item.digimon}</p>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
