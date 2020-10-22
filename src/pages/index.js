import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjTwo, homeObjThree } from '../components/InfoSection/Data';
import Services from '../components/Services';
import Footer from '../components/Footer';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonials';
import Whatsapp from '../components/Whatsapp';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjTwo} />
      <Services />
      <Projects />
      <Testimonials />
      <InfoSection {...homeObjThree} />
      <Contact />
      <Footer />
      <Whatsapp />
    </>
  );
};

export default Home;
