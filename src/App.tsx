import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DestinationsGrid } from './components/DestinationsGrid';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 font-sans">
      <Navbar />
      <main>
        <Hero />
        <DestinationsGrid />
        
        {/* About Section Teaser */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">A Land of Contrast</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Mongolia is one of the world's last surviving nomadic cultures. 
                  For millennia, the pastoral way of life has continued virtually unchanged 
                  on the vast steppes.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  However, Mongolia is also a country of rapid modernization, with 
                  Ulaanbaatar standing as a testament to the nation's future.
                </p>
                <button className="px-8 py-3 border-2 border-mongolia-blue text-mongolia-blue font-bold rounded-full hover:bg-mongolia-blue hover:text-white transition-all">
                  Read Our History
                </button>
              </div>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1605218427368-35b86fc4c32b?q=80&w=1200&auto=format&fit=crop" 
                  alt="Mongolian Ger in the steppe" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;