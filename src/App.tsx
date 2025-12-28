import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DestinationCard from './components/DestinationCard';
import CultureSection from './components/CultureSection';
import Footer from './components/Footer';
import { destinations, cultureItems } from './data/mongoliaData';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar appName="visit mongolia" />
      
      <main>
        <Hero />

        {/* Destinations Section */}
        <section id="destinations" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Unforgettable Destinations</h2>
              <div className="w-24 h-1 bg-mongolia-blue mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations.map((dest) => (
                <DestinationCard key={dest.id} destination={dest} />
              ))}
            </div>
          </div>
        </section>

        {/* Banner Section */}
        <section className="py-20 bg-mongolia-blue text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready for an Adventure?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Book your trip today and witness the majestic landscapes of the steppe.
            </p>
            <button className="bg-white text-mongolia-blue font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors shadow-lg">
              Plan Your Trip
            </button>
          </div>
        </section>

        <CultureSection items={cultureItems} />
      </main>

      <Footer />
    </div>
  );
}

export default App;