import React, { useState } from 'react';
import { FiMapPin, FiPhone, FiMail, FiClock, FiExternalLink } from 'react-icons/fi';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('subject', formData.service);
    data.append('message', formData.message);
    data.append('website', ''); // honeypot — always empty from real users

    try {
      const res = await fetch('mail.php', { method: 'POST', body: data });

      // Guard against non-JSON responses (e.g. PHP fatal errors returning HTML)
      const contentType = res.headers.get('Content-Type') || '';
      if (!contentType.includes('application/json')) {
        throw new Error('Unexpected server response.');
      }

      const result = await res.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        setTimeout(() => setSubmitted(false), 6000);
      } else {
        setError(result.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Unable to send message. Please try again or call us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Start Your Journey</h2>
          <p>Schedule a confidential consultation to explore your options and see how we can assist you.</p>
        </div>

        <div className="contact-grid">
          {/* ── Left: Form ── */}
          <div className="contact-form-container" data-aos="fade-right">
            <h3>Request a Consultation</h3>

            {submitted && (
              <div className="form-alert success">
                ✓ Thank you! Your request has been sent. We will contact you within 24 hours.
              </div>
            )}

            {error && (
              <div className="form-alert error">
                ⚠ {error}
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="e.g. Amina Okafor"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="+234 800 000 0000"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="service">Service of Interest</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">Select a service</option>
                  <option value="Medical Coordination">Medical Coordination</option>
                  <option value="Legal & Compliance">Legal &amp; Compliance</option>
                  <option value="Full Surrogacy Journey">Full Surrogacy Journey</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Additional Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us a little about your situation or any questions you have…"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              {/* Honeypot — hidden from users, catches bots */}
              <input
                type="text"
                name="website"
                style={{ display: 'none' }}
                tabIndex="-1"
                autoComplete="off"
              />

              <button
                type="submit"
                className="btn btn-primary submit-btn"
                disabled={loading}
              >
                {loading ? (
                  <span className="btn-loading">
                    <span className="spinner" /> Sending…
                  </span>
                ) : 'Submit Request'}
              </button>
            </form>
          </div>

          {/* ── Right: Enhanced Map Panel ── */}
          <div className="map-panel" data-aos="fade-left">
            {/* Info cards row */}
            <div className="map-info-bar">
              <div className="map-info-card">
                <FiPhone className="map-info-icon" />
                <div>
                  <p className="map-info-label">Call Us</p>
                  <a href="tel:+2348184323182" className="map-info-value">+234 818 432 3182</a>
                  <a href="tel:+2348114466180" className="map-info-value">+234 811 446 6180</a>
                </div>
              </div>
              <div className="map-info-card">
                <FiMail className="map-info-icon" />
                <div>
                  <p className="map-info-label">Email Us</p>
                  <a href="mailto:info@surrogacyconsultingltd.com" className="map-info-value">
                    info@surrogacyconsultingltd.com
                  </a>
                </div>
              </div>
              <div className="map-info-card">
                <FiClock className="map-info-icon" />
                <div>
                  <p className="map-info-label">Office Hours</p>
                  <span className="map-info-value">Mon – Fri: 8am – 6pm</span>
                  <span className="map-info-value">Sat: 9am – 2pm</span>
                </div>
              </div>
            </div>

            {/* Map embed */}
            <div className="map-embed-wrapper">
              <iframe
                src="https://maps.google.com/maps?q=Plot%20740%20Kano%20Crescent%20Wuse%20Zone%202%20Abuja&t=&z=15&ie=UTF8&iwloc=&output=embed"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Surrogacy Consulting Ltd – Abuja Location"
              />

              {/* Address chip overlay */}
              <div className="map-address-chip">
                <FiMapPin className="chip-icon" />
                <div>
                  <strong>Abuja Headquarters</strong>
                  <span>Plot 740 Kano Crescent, Wuse Zone 2, Abuja</span>
                </div>
              </div>
            </div>

            {/* CTA link */}
            <a
              className="map-directions-btn"
              href="https://www.google.com/maps/search/Plot+740+Kano+Crescent+Wuse+Zone+2+Abuja"
              target="_blank"
              rel="noreferrer"
            >
              <FiExternalLink style={{ marginRight: '0.4rem' }} />
              Get Directions on Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;