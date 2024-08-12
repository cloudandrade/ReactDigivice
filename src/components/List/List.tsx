import React, { useState } from 'react';
import ListItem from './ListItem';
import { DigiItem, DetailedDigiItem } from '../../types/DigiTypes'; 
import './List.css'; 
import Modal from './../Modal/Modal';
import { getDigimonDetails } from '../../api/digiApi';

interface ListProps {
  digimons: DigiItem[];
}

const List: React.FC<ListProps> = ({ digimons }) => {
  const [selectedDigimon, setSelectedDigimon] = useState<DetailedDigiItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const returnDigimonDetailed = async (digimon: DigiItem) => {
    const DigimonDetailed: DetailedDigiItem = await getDigimonDetails(Number(digimon.id));
    return DigimonDetailed;
  }

  const handleOpenModal = (digimon: DetailedDigiItem) => {
    setSelectedDigimon(digimon);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDigimon(null);
  };

  return (
    <div className="digimon-list">
      {digimons.map((digimon) => (
        <ListItem
          key={digimon.id}
          digimon={digimon}
          onClick={async () => handleOpenModal(await returnDigimonDetailed(digimon))}
        />
      ))}
      {selectedDigimon && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          digimon={selectedDigimon}
        />
      )}
    </div>
  );
};

export default List;
