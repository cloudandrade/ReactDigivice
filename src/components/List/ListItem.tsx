import React from 'react';
import { DigiItem } from '../../types/DigiTypes';
import DigimonCard from '../Card/DigimonCard'
interface ListItemProps {
  digimon: DigiItem;
  onClick: () => void;
}

const ListItem: React.FC<ListItemProps> = ({ digimon, onClick }) => {
  return (
    <DigimonCard 
    digimon={digimon}
    key={digimon.id}
    onClick={onClick}
    />

  );
};

export default ListItem;
