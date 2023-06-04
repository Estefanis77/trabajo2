//import React from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsGithub, BsInstagram, BsWhatsapp } from 'react-icons/Bs';

const Footer = () => {
  return (
    <div className="footer-container">
      <h1 className="footer-title">Mis redes sociales</h1>
      <div className="social-icons">
        <Link to="https://www.facebook.com/" className="social-icon">
          <BsFacebook size={32} />
        </Link>
        <Link to="https://instagram.com/" className="social-icon">
          <BsInstagram size={32} />
        </Link>
        <Link to="https:github.com" className="social-icon">
          <BsGithub size={32} />
        </Link>
        <Link to="https://whatsapp.com" className="social-icon">
          <BsWhatsapp size={32} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;