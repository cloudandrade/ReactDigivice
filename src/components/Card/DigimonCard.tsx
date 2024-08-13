import React from 'react';
import { DigiItem } from '../../types/DigiTypes';
import './DigimonCard.css';

interface DigimonCardProps {
  digimon: DigiItem;
  onClick: () => void;
}


const DigimonCard: React.FC<DigimonCardProps> = ({ digimon, onClick }) => (
  <div className="digimon-card" onClick={onClick}>
      <img src={digimon.image} alt={digimon.name} className="digimon-image" />
      <div className="digimon-details">
        <h2 className="digimon-name">{digimon.name}</h2>
      </div>
    </div>
);

export default DigimonCard;