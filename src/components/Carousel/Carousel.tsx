import React from 'react';
import './Carousel.css'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

type CarouselProps = {
  items: {
    id: number;
    digimon: string;
    image: string;
  }[];
};

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const isDarkMode = useSelector((state: RootState) => state.darkMode.isDarkMode);

  if (items.length === 0) return <p>No evolutions available.</p>;

  return (
    <div className="carousel">
      {items.map(item => (
        <div key={item.id} className={isDarkMode ? 'carousel-item darkened-image' : 'carousel-item'}>
          <img src={item.image} alt={item.digimon} />
          <p>{item.digimon}</p>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
