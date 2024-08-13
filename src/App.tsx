import React from 'react';
import Home from './pages/Home';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';

const App: React.FC = () => {
  const isDarkMode = useSelector((state: RootState) => state.darkMode.isDarkMode);
  return (
    <div className={isDarkMode ? 'app dark-mode' : 'app'}>
      <Home />
    </div>
  );
}

export default App;
