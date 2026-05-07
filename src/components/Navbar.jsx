import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import '../styles/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  // On the /apply page, section links navigate back to home with the hash.
  // On the home page, they scroll in-page.
  const sectionHref = (hash) =>
    location.pathname === '/' ? hash : `/${hash}`;

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
          <li><a href={sectionHref('#home')} onClick={closeMenu}>Home</a></li>
          <li><a href={sectionHref('#about')} onClick={closeMenu}>About</a></li>
          <li><a href={sectionHref('#services')} onClick={closeMenu}>Services</a></li>
          <li><a href={sectionHref('#testimonials')} onClick={closeMenu}>Testimonials</a></li>
          <li>
            <a href={sectionHref('#contact')} className="btn btn-primary" onClick={closeMenu} style={{ color: 'white' }}>
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;