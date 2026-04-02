import React, { useState } from 'react';
import { FiMapPin } from 'react-icons/fi';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.name && formData.email && formData.phone) {
      setSubmitted(true);
      // Reset form
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Start Your Journey</h2>
          <p>Schedule a confidential consultation to explore your options and see how we can assist you.</p>
          <div style={{ marginTop: '1.5rem', fontWeight: '500', fontSize: '1.1rem', color: 'var(--text-dark)' }}>
            <p><strong>Phone:</strong> +2348184323182, +2348114466180</p>
            <p><strong>Email:</strong> info@surrogacyconsultingltd.com</p>
          </div>
        </div>

        <div className="contact-grid">
          <div className="contact-form-container" data-aos="fade-right">
            <h3>Request a Consultation</h3>
            
            {submitted && (
              <div className="form-alert">
                Thank you! Your request has been sent. We will contact you within 24 hours.
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />
              </div>
              
              <div className="form-group" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="email">Email Address *</label>
                  <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="phone">Phone Number *</label>
                  <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="service">Service of Interest</label>
                <select id="service" name="service" value={formData.service} onChange={handleChange}>
                  <option value="">Select a service</option>
                  <option value="medical">Medical Coordination</option>
                  <option value="legal">Legal & Compliance</option>
                  <option value="full">Full Surrogacy Journey</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Additional Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange}></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                Submit Request
              </button>
            </form>
          </div>

          <div className="map-container" data-aos="fade-left">
            <iframe 
              src="https://maps.google.com/maps?q=Plot%20740%20Kano%20Crescent%20Wuse%20Zone%202&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Abuja Location"
            ></iframe>
            <a className="map-link" href="https://www.google.com/maps/search/Plot+740+Kano+Crescent+Wuse+Zone+2+Abuja" target="_blank" rel="noreferrer">
              View on Google Maps
            </a>
            <div className="address-overlay">
              <FiMapPin className="address-icon" />
              <div>
                <p>Abuja Headquarters</p>
                <span>
                  Plot 740 Kano Cresent Wuse Zone 2<br/>
                  +2348184323182, +2348114466180<br/>
                  info@surrogacyconsultingltd.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
