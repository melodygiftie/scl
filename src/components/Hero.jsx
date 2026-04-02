import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import '../styles/Hero.css';

const Hero = () => {
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
            <a href="#contact" className="btn btn-secondary">
              Book Consultation <FiArrowRight style={{ marginLeft: '8px' }} />
            </a>
            <a href="#about" className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
