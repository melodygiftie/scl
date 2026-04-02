import React from 'react';
import { FiTarget, FiEye } from 'react-icons/fi';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-grid">
          
          <div className="about-image" data-aos="fade-right" data-aos-duration="1000">
            <div className="about-shape"></div>
            <div className="about-image-inner">
              <img 
                src="/about.png" 
                alt="Compassionate surrogacy consulting" 
              />
            </div>
          </div>

          <div className="about-content" data-aos="fade-left" data-aos-duration="1000">
            <h2>
              Dedicated to Your Family 
              <span>Based in Abuja, Nigeria</span>
            </h2>
            <p>
              At Surrogacy Consulting Services Limited, we believe that everyone deserves the joy of parenthood. 
              We offer discreet, compassionate, and highly professional coordination services connecting 
              intended parents with trusted legal and medical partners.
            </p>

            <div className="mission-vision">
              <div className="mv-box">
                <h3><FiTarget className="mv-icon"/> Our Mission</h3>
                <p>To guide, protect, and support intended parents through a transparent and ethical surrogacy journey.</p>
              </div>
              <div className="mv-box" style={{ backgroundColor: 'var(--pink)' }}>
                <h3><FiEye className="mv-icon" /> Our Vision</h3>
                <p>To be Africa's most trusted consulting firm for safe, legally compliant surrogacy processes.</p>
              </div>
            </div>

            <a href="#services" className="btn btn-outline">
              Explore Our Services
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
