import React from 'react';
import { ttsService } from '../../services/ttsService';
import './TextToSpeechButton.css'; // Estilos específicos do botão

interface TextToSpeechButtonProps {
  text: string;
}

const TextToSpeechButton: React.FC<TextToSpeechButtonProps> = ({ text }) => {
  const handleClick = () => {
    ttsService.speak(text);
  };

  return (
    <button onClick={handleClick} className="tts-button">
      🔊
    </button>
  );
};

export default TextToSpeechButton;