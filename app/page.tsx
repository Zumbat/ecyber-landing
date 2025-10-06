
import ParticleBackground from './components/3d_scenes/ParticleBackground';
import Scene from './components/3d_scenes/Scene';
import HeroSection from './components/sections/Hero';
import WhatSection from './components/sections/What';
import HowSection from './components/sections/How';
import BenefitsSection from './components/sections/Benefits';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Radar from './components/sections/How/Radar';
import MacbookScrollDemo from './components/macbook-scroll-demo';
import ScreenshotSection from './components/sections/Screenshot';
import WavyBackgroundDemo from './components/wavy-background-demo';

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
      <section className="w-full bg-[#111111] h-[700px] relative pt-20">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(/assets/footer_effect_noise2.svg)'}}/>
      </section>
      <Footer />
    </div>
  );
}
