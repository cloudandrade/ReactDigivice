// ListItem.tsx
import React from 'react';
import { DigiItem } from '../../types/DigiTypes';
import './ListItem.css'; // Importar o CSS para estilizar

interface ListItemProps {
  digimon: DigiItem;
  onClick: () => void;
}

const ListItem: React.FC<ListItemProps> = ({ digimon, onClick }) => {
  return (
    <div className="digimon-card" onClick={onClick}>
      <img src={digimon.image} alt={digimon.name} className="digimon-image" />
      <div className="digimon-details">
        <h2 className="digimon-name">{digimon.name}</h2>
        <p className="digimon-description">{digimon.description}</p>
      </div>
    </div>
  );
};

export default ListItem;
