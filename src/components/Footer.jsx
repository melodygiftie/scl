import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import '../styles/Footer.css';

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.097 2.795.141v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.592 1.323-1.324V1.324C24 .593 23.408 0 22.676 0z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.631L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
  </svg>
);

const Footer = () => {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (type) => setModalContent(type);
  const closeModal = () => setModalContent(null);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">

          <div className="footer-brand">
            <img src="/logo2.png" alt="Surrogacy Consulting logo" className="footer-logo" />
            <p>Providing premium, trusted, and ethically guided surrogacy coordination services in Nigeria. We are here to bring families together.</p>
            <div className="footer-socials">
              <a href="https://web.facebook.com/surrogacyconsults" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="https://www.instagram.com/surrogacyconsults/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="https://www.tiktok.com/@surrogacyconsults" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <TikTokIcon />
              </a>
              <a href="https://x.com/surrogacyL" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                <XIcon />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/#home">Home</a></li>
              <li><a href="/#about">About Us</a></li>
              <li><a href="/#services">Our Services</a></li>
              <li><a href="/#contact">Contact</a></li>
              <li><Link to="/apply">Apply as Surrogate</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Legal &amp; Information</h4>
            <ul>
              <li><button onClick={() => openModal('faq')}>FAQs</button></li>
              <li><button onClick={() => openModal('privacy')}>Privacy Policy</button></li>
              <li><button onClick={() => openModal('terms')}>Terms of Service</button></li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Surrogacy Consulting Limited. All Rights Reserved.</p>
          <div className="footer-bottom-credit">
            <span className="label">Designed &amp; Developed by</span>
            <span className="divider">|</span>
            <a href="https://www.discoverytechhub.com" target="_blank" rel="noopener noreferrer">DiscoveryTech Hub</a>
          </div>
        </div>

      </div>

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