import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { scrollToSection } from './Navbar';
import '../styles/Hero.css';

const Hero = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const go = (id) => scrollToSection(id, navigate, location);

  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <h1 data-aos="fade-up" data-aos-duration="1000">
            Guided Care for Your <span>Path to Parenthood</span>
          </h1>
          <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            We provide ethical, supportive surrogacy consulting dedicated to making your dream of family a reality.
          </p>
          <div className="hero-btns" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
            <button className="btn btn-secondary" onClick={() => go('contact')}>
              Book Consultation <FiArrowRight style={{ marginLeft: '8px' }} />
            </button>
            <button className="btn btn-outline" onClick={() => go('about')} style={{ borderColor: 'white', color: 'white' }}>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;