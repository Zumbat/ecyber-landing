
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
      {/* <ScreenshotSection /> */}
      {/* <WavyBackgroundDemo/> */}
      {/* <section className="w-full bg-[#111111] h-[480px] relative pt-20">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(/assets/footer_effect_noise2.svg)', backgroundSize: 'cover', backgroundPosition: 'bottom'}}/>
      </section> */}
      {/* Grid Scroll Animation */}
      <GridScroll />
      <Footer />
    </div>
  );
}
