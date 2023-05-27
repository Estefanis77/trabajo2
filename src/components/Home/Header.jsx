import React from 'react';
import alvaro from '../../assets/alumno.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header-container">
      <img src={alvaro} alt='yo' className="header-image" />
      <Link to="/" className="header-link">ir a inicio</Link>
      <Link to="/contact" className="header-link">ir a contacto</Link>
    </div>
  );
}

export default Header;