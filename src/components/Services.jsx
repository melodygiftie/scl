import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Stethoscope,
  Scale,
  HeartHandshake,
  ArrowRight,
  UserRound,
} from 'lucide-react';
import '../styles/Services.css';

const servicesData = [
  {
    title: 'Medical Coordination',
    description: 'We connect you with top-tier IVF clinics and experienced medical professionals, ensuring world-class care throughout the fertility process.',
    image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: Stethoscope,
    delay: '0',
  },
  {
    title: 'Legal & Compliance',
    description: 'Navigate the complex legal landscape safely. We partner with specialized family lawyers to protect your rights and draft secure agreements.',
    image: '/legal.jfif',
    icon: Scale,
    delay: '200',
  },
  {
    title: 'Emotional Support',
    description: 'A surrogacy journey is emotional. We provide continuous psychological and emotional guidance for both intended parents and surrogates.',
    image: '/support.jpeg',
    icon: HeartHandshake,
    delay: '400',
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="section services">
      <div className="container">

        <div className="section-title" data-aos="fade-up">
          <h2>Our Expertise</h2>
          <p>Comprehensive consulting services tailored to ensure a safe and legally sound pathway to building your family.</p>
        </div>

        <div className="services-grid">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                className="service-card"
                key={index}
                data-aos="fade-up"
                data-aos-delay={service.delay}
                data-aos-duration="1000"
              >
                <div className="service-img">
                  <img src={service.image} alt={service.title} />
                  <div className="service-icon-badge">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Surrogate CTA Banner */}
        <div className="surrogate-cta" data-aos="fade-up" data-aos-delay="200">
          <div className="surrogate-cta__left">
            <div className="surrogate-cta__icon">
              <UserRound size={32} strokeWidth={1.6} />
            </div>
            <div className="surrogate-cta__text">
              <h3>Interested in Becoming a Surrogate?</h3>
              <p>
                Join our carefully vetted programme. We guide you every step of the way medically, legally, and emotionally.
              </p>
              <ul className="surrogate-cta__perks">
                <li><span className="perk-dot" />Fully guided application process</li>
                <li><span className="perk-dot" />Legal protection &amp; fair compensation</li>
                <li><span className="perk-dot" />Ongoing medical &amp; emotional support</li>
              </ul>
            </div>
          </div>
          <div className="surrogate-cta__right">
            <button
              className="surrogate-cta__btn"
              onClick={() => navigate('/apply')}
            >
              Apply Now
              <ArrowRight size={18} strokeWidth={2} />
            </button>
            <p className="surrogate-cta__note">
              Confidential &bull; No obligation &bull; Reviewed within 3–5 days
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;