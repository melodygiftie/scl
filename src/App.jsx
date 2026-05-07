import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import AOS from 'aos';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Path from './components/Path';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CookieBanner from './components/CookieBanner';
import SurrogateForm from './components/SurrogateForm';

// Scrolls to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Path />
      <Testimonials />
      <Contact />
    </>
  );
}

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 100,
      duration: 1000,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apply" element={<SurrogateForm />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </BrowserRouter>
  );
}

export default App;