
import Scene from './components/3d_scenes/Scene';
import GridScroll from './components/3d_scenes/GridScroll';
import HeroSection from './components/sections/Hero';
import WhatSection from './components/sections/What';
import HowSection from './components/sections/How';
import BenefitsSection from './components/sections/Benefits';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import MacbookScrollDemo from './components/macbook-scroll-demo';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Navbar */}
      <Navbar />
      <Scene />
      {/* Hero Section */}
      <HeroSection />
      <WhatSection />
      <HowSection />
      <BenefitsSection />
      {/* Macbook Scroll Demo */}
      <MacbookScrollDemo />
      {/* Grid Scroll Animation */}
      <GridScroll />
      <Footer />
    </div>
  );
}
