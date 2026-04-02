import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import '../styles/Testimonials.css';

const testimonialsData = [
  {
    quote: "The journey to parenthood felt overwhelming until we found Surrogacy Consulting. Their team handled every legal and medical detail with the utmost care, allowing us to focus on the joy of welcoming our baby. We couldn't have done it without them.",
    author: "Intended Parents, Abuja",
    delay: "0"
  },
  {
    quote: "Professional, discreet, and incredibly supportive. They guided us through a complex process with ethical integrity and genuine compassion. Knowing we had their expertise behind us brought immense peace of mind.",
    author: "Anonymous Client",
    delay: "200"
  },
  {
    quote: "From our very first consultation, we knew we were in safe hands. They connected us with the best medical professionals and ensured our rights were protected every step of the way. A truly life-changing experience.",
    author: "M. & K. (Confidential)",
    delay: "400"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Client Stories</h2>
          <p>Read what our clients have to say about their journey to parenthood with our guidance.</p>
        </div>

        <div className="testimonials-grid">
          {testimonialsData.map((item, index) => (
            <div 
              className="testimonial-card" 
              key={index} 
              data-aos="fade-up" 
              data-aos-delay={item.delay}
              data-aos-duration="1000"
            >
              <FaQuoteLeft className="quote-icon" />
              <p className="testimonial-text">"{item.quote}"</p>
              <h4 className="testimonial-author">— {item.author}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
