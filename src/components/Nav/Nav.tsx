import React from 'react';
import './Nav.css'; // Importar o CSS para estilizar
import digiviceImg from '../../assets/images/Digivice.png'

const Nav: React.FC = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-content">
        <div className="nav-logo-title">
          <img src={digiviceImg} alt="Digivice" className="nav-logo" />
          <h1 className="nav-title">Digivice</h1>
        </div>
        <div className="nav-search">
          <input type="text" placeholder="Search Digimon..." className="nav-search-input" />
          <button className="nav-search-button">Search</button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;