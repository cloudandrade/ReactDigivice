import React from 'react';
import { DigiItem } from '../../types/DigiTypes';
import './DigimonCard.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

interface DigimonCardProps {
  digimon: DigiItem;
  onClick: () => void;
}


const DigimonCard: React.FC<DigimonCardProps> = ({ digimon, onClick }) => {
  const isDarkMode = useSelector((state: RootState) => state.darkMode.isDarkMode);
  return (
    <div className={isDarkMode ? 'digimon-card dark' : 'digimon-card'} onClick={onClick}>
        <img src={digimon.image} alt={digimon.name} className={isDarkMode ? 'digimon-image darkened-image' : 'digimon-image'} />
        <div className="digimon-details">
          <h2 className={isDarkMode ? 'digimon-name dark' : 'digimon-name'}>{digimon.name}</h2>
        </div>
      </div>
  );
} 

export default DigimonCard;