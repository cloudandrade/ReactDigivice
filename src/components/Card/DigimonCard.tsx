import React from 'react';
import { DigiItem } from '../../types/DigiTypes';
import './DigimonCard.css';

interface DigimonCardProps {
  digimon: DigiItem;
}

const DigimonCard: React.FC<DigimonCardProps> = ({ digimon }) => (
  <div className="digimon-card">
    <img src={digimon.image} alt={digimon.name} className="digimon-image" />
    <h3 className="digimon-name">{digimon.name}</h3>
    <p className="digimon-description">{digimon.description}</p>
  </div>
);

export default DigimonCard;