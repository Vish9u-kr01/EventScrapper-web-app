import React from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './globals.css'; // Your global styles
import HeroSection from './components/Herosection';


export default function Home() {
  return (
    <>
   <div className="min-h-screen flex flex-col">
  <Navbar />
  <main className="flex-grow">
    <HeroSection />
  </main>
  <Footer />
</div>
    </>
  );
}
