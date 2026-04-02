import React, { useState } from 'react';
import Modal from './Modal';
import '../styles/Footer.css';

const Footer = () => {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (type) => {
    setModalContent(type);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/logo2.png" alt="Surrogacy Consulting logo" className="footer-logo" />
            <p>Providing premium, trusted, and ethically guided surrogacy coordination services in Nigeria. We are here to bring families together.</p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Legal & Information</h4>
            <ul>
              <li><button onClick={() => openModal('faq')}>FAQs</button></li>
              <li><button onClick={() => openModal('privacy')}>Privacy Policy</button></li>
              <li><button onClick={() => openModal('terms')}>Terms of Service</button></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Surrogacy Consulting Limited. All Rights Reserved.</p>
        </div>
      </div>

      {/* Dynamic Modal */}
      <Modal 
        isOpen={modalContent !== null} 
        onClose={closeModal} 
        title={
          modalContent === 'faq' ? 'Frequently Asked Questions' : 
          modalContent === 'privacy' ? 'Privacy Policy' : 'Terms of Service'
        }
      >
        {modalContent === 'faq' && (
          <div>
            <h4>1. How long does the matching process take?</h4>
            <p>The timeline varies but typically takes between 1 to 4 months to find a fully vetted surrogate who matches your criteria.</p>
            <h4>2. Are the legal agreements secure?</h4>
            <p>Yes, all agreements are drafted by specialized family lawyers ensuring strict compliance with local regulations.</p>
            <h4>3. Do you provide medical services?</h4>
            <p>We do not provide medical services directly, but we coordinate with top-tier IVF clinics in Abuja and beyond.</p>
          </div>
        )}

        {modalContent === 'privacy' && (
          <div>
            <p>At Surrogacy Consulting, we prioritize your privacy and confidentiality. Any information submitted through our site is encrypted and strictly used for the purpose of consultation and coordination.</p>
            <p>We do not sell, trade, or transfer your personally identifiable information to outside parties without your explicit consent.</p>
          </div>
        )}

        {modalContent === 'terms' && (
          <div>
            <p>By accessing our website and services, you agree to be bound by our terms and conditions. The content provided is for informational purposes only and does not constitute medical or legal advice.</p>
            <p>Surrogacy Consulting acts as a coordinating entity. All medical and legal services are provided by independent third-party professionals.</p>
          </div>
        )}
      </Modal>
    </footer>
  );
};

export default Footer;
