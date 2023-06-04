import estefi from '../../assets/alumno.jpeg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header-container">
      <img src={estefi} alt='yo' className="header-image" />
      <Link to="/" className="header-link">Ir a inicio</Link>
      <Link to="/contact" className="header-link">Ir a contacto</Link>
    </div>
  );
}

export default Header;