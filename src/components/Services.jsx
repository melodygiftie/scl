import React from 'react';
import '../styles/Services.css';

const servicesData = [
  {
    title: 'Medical Coordination',
    description: 'We connect you with top-tier IVF clinics and experienced medical professionals, ensuring world-class care throughout the fertility process.',
    image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    delay: '0'
  },
  {
    title: 'Legal & Compliance',
    description: 'Navigate the complex legal landscape safely. We partner with specialized family lawyers to protect your rights and draft secure agreements.',
    image: '/legal.jfif',
    delay: '200'
  },
  {
    title: 'Emotional Support',
    description: 'A surrogacy journey is emotional. We provide continuous psychological and emotional guidance for both intended parents and surrogates.',
    image: '/support.jpeg',
    delay: '400'
  }
];

const Services = () => {
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Our Expertise</h2>
          <p>Comprehensive consulting services tailored to ensure a safe and legally sound pathway to building your family.</p>
        </div>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div 
              className="service-card" 
              key={index} 
              data-aos="fade-up" 
              data-aos-delay={service.delay}
              data-aos-duration="1000"
            >
              <div className="service-img">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
