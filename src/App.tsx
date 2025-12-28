import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DestinationCard from './components/DestinationCard';
import Footer from './components/Footer';
import { destinations } from './data/mockData';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Experience the Nomadic Soul</h2>
              <p className="text-lg text-slate-600 mb-8">
                Mongolia is one of the last places on earth where nomadic life is still a living tradition.
                With a history dating back to the Mongol Empire, our culture is deeply rooted in respect for nature,
                hospitality, and the freedom of the endless steppe.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="p-6 bg-slate-50 rounded-lg">
                  <h3 className="font-bold text-xl mb-2">Culture</h3>
                  <p className="text-slate-600">Immerse yourself in Naadam Festival and throat singing.</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-lg">
                  <h3 className="font-bold text-xl mb-2">Nature</h3>
                  <p className="text-slate-600">From the Gobi Desert to the Taiga forests.</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-lg">
                  <h3 className="font-bold text-xl mb-2">History</h3>
                  <p className="text-slate-600">Walk the lands of Genghis Khan.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Destinations Section */}
        <section id="destinations" className="py-20 bg-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Popular Destinations</h2>
              <p className="text-lg text-slate-600">Explore the must-visit locations across the country</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations.map((dest) => (
                <DestinationCard key={dest.id} destination={dest} />
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-mongolia-blue">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready for an Adventure?</h2>
            <p className="text-xl mb-8 opacity-90">
              Book your trip today and experience the magic of Mongolia.
            </p>
            <button className="bg-white text-mongolia-blue font-bold py-3 px-8 rounded-full hover:bg-slate-100 transition-colors shadow-lg">
              Plan Your Trip
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;