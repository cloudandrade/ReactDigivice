import React from 'react';
import './Nav.css'; // Importar o CSS para estilizar

const Nav: React.FC = () => {
  return (
    <nav className="nav-bar">
     {/*  <img
        src="https://static.wikia.nocookie.net/digimon-adventure5140/images/f/fd/Digivice_tri.png/revision/latest?cb=20170328025147"
        alt="Digivice"
        className="nav-logo"
      /> */}
      <h1 className="nav-title">Digivice</h1>
    </nav>
  );
};

export default Nav;