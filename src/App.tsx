import React from 'react';
import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Manifesto } from './components/sections/Manifesto';
import { Projects } from './components/sections/Projects';
import { Arsenal } from './components/sections/Arsenal';
import { Education } from './components/sections/Education';
import { GlobalImpact } from './components/sections/GlobalImpact';
import { Contact } from './components/sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-white text-black font-sans selection:bg-black selection:text-white relative">
      <div className="bg-noise" aria-hidden="true"></div>
      
      <Navigation />
      <main>
        <Hero />
        <Manifesto />
        <Projects />
        <Arsenal />
        <Education />
        <GlobalImpact />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
