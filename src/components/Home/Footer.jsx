import React from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsGithub, BsInstagram, BsWhatsapp } from 'react-icons/Bs';

const Footer = () => {
  return (
    <div className="footer-container">
      <h1>Mis redes sociales</h1>
      <div className="social-icons">
        <Link to="https://www.facebook.com/m.alvaro.albornoz"><BsFacebook size={32} /></Link>
        <Link to="https://instagram.com/alvaroalbornozok"><BsInstagram size={32} /></Link>
        <Link to="https:github.com"><BsGithub size={32} /></Link>
        <Link to="https://whatsapp.com"><BsWhatsapp size={32} /></Link>
      </div>
    </div>
  );
};

export default Footer;