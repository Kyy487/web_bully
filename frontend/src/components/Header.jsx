import React from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-icon">💙</span>
          <span className="logo-text">Bully Support</span>
        </Link>

        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Beranda
          </Link>
          <Link to="/stories" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Cerita Komunitas
          </Link>
          <Link to="/resources" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Sumber Daya
          </Link>
          <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Tentang Kami
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
