import React from 'react';
import '../styles/Path.css';

const steps = [
  {
    title: 'Initial Consultation',
    desc: 'We start with a confidential discussion to understand your unique needs, answer your questions, and outline the journey ahead.'
  },
  {
    title: 'Matching Strategy',
    desc: 'We assist in selecting a trusted IVF clinic and help coordinate the matching process with a fully vetted, healthy surrogate.'
  },
  {
    title: 'Legal Agreements',
    desc: 'Our partnered legal experts draft and finalize all necessary contracts to ensure your parental rights are secured from day one.'
  },
  {
    title: 'Medical Process',
    desc: 'The IVF process begins. We coordinate between you, the surrogate, and the clinic for embryo transfer and medical clearance.'
  },
  {
    title: 'Pregnancy Support',
    desc: 'Throughout the 9 months, we provide updates, facilitate communication, and offer emotional support to all parties involved.'
  },
  {
    title: 'Delivery & Aftercare',
    desc: 'We help prepare for the hospital stay, ensuring a smooth birth experience and assisting with post-birth legal documentation.'
  }
];

const Path = () => {
  return (
    <section id="path" className="section path">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Your Path to Parenthood</h2>
          <p>A transparent, 6-step guided system designed to give you peace of mind at every milestone.</p>
        </div>

        <div className="path-grid">
          {steps.map((step, index) => (
            <div 
              className="path-step" 
              key={index}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={(index % 2) * 150}
              data-aos-duration="800"
            >
              <div className="step-number">{index + 1}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Path;
