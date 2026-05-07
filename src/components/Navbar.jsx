import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { scrollToSection } from '../utils/scrollToSection';
import '../styles/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      const id = location.state.scrollTo;
      const t = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        navigate('/', { replace: true, state: {} });
      }, 80);
      return () => clearTimeout(t);
    }
  }, [location, navigate]);

  const closeMenu = () => setMenuOpen(false);

  const handleNav = (id) => {
    closeMenu();
    scrollToSection(id, navigate, location);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src="/logo2.png" alt="Surrogacy Consulting logo" className="navbar-logo-img" />
        </Link>

        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Navigation"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <li><button className="nav-link-btn" onClick={() => handleNav('home')}>Home</button></li>
          <li><button className="nav-link-btn" onClick={() => handleNav('about')}>About</button></li>
          <li><button className="nav-link-btn" onClick={() => handleNav('services')}>Services</button></li>
          <li><button className="nav-link-btn" onClick={() => handleNav('testimonials')}>Testimonials</button></li>
          <li>
            <button
              className="nav-link-btn btn btn-primary"
              onClick={() => handleNav('contact')}
              style={{ color: 'white' }}
            >
              Contact Us
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;