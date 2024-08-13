import React from 'react';
import { ttsService } from '../../services/ttsService';
import './TextToSpeechButton.css';

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