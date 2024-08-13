// Modal.tsx
import React from 'react';
import { DetailedDigiItem } from '../../types/DigiTypes';
import './Modal.css'; // Importar o CSS para estilizar
import Carousel from '../Carousel/Carousel';
import TextToSpeechButton from '../TextToSpeechButton/TextToSpeechButton';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  digimon: DetailedDigiItem;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, digimon }) => {
  if (!isOpen) return null;



  const { name, images, types, descriptions, priorEvolutions, nextEvolutions } = digimon;
  const mainImage = images[0];
  const description = descriptions.filter(desc => desc.language === 'en_us')[0].description
  const typesString = types.map(type => type.type).join(', ');

  const digimonAudioFullDescription = `${name}, ${typesString}, ${description}`

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="close-button">X</button>
        <h2>{name}</h2>
        <img src={mainImage.href} alt={name} className="modal-image" />
        <h2>{name} <TextToSpeechButton text={digimonAudioFullDescription} /></h2>
        <p>Type: {typesString}</p>
        <p>Description: {description}</p>
        <h3>Prior Evolutions</h3>
        <div className="carousel-container">
        <Carousel 
          items={priorEvolutions}
        />
        </div>
       <h3>Next Evolutions</h3>
       <div className="carousel-container">
       <Carousel 
          items={nextEvolutions}
        />
       </div>
       
      </div>
    </div>
  );
};

export default Modal;
