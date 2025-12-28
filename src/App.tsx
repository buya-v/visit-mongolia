import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DestinationCard from './components/DestinationCard';
import Footer from './components/Footer';
import { destinations, cultureFeatures } from './data/content';
import { Tent, Music, Sun, Ghost } from 'lucide-react';

const App: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'tent': return <Tent className="h-12 w-12 text-mongolia-blue mb-4" />;
      case 'music': return <Music className="h-12 w-12 text-mongolia-blue mb-4" />;
      case 'horse': return <Ghost className="h-12 w-12 text-mongolia-blue mb-4" />; // Using Ghost as placeholder for Animal/Horse if not available in subset
      case 'sun': return <Sun className="h-12 w-12 text-mongolia-blue mb-4" />;
      default: return <Sun className="h-12 w-12 text-mongolia-blue mb-4" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />

        {/* Destinations Section */}
        <section id="destinations" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Must-Visit Destinations</h2>
              <div className="w-24 h-1 bg-mongolia-red mx-auto"></div>
              <p className="mt-4 text-xl text-gray-600">Explore the diverse landscapes of Mongolia</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations.map((dest) => (
                <DestinationCard key={dest.id} destination={dest} />
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section id="culture" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nomadic Culture</h2>
              <div className="w-24 h-1 bg-mongolia-blue mx-auto"></div>
              <p className="mt-4 text-xl text-gray-600">A heritage preserved for generations</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {cultureFeatures.map((feature) => (
                <div key={feature.id} className="text-center p-6 border border-gray-100 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="flex justify-center">
                    {getIcon(feature.iconName)}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 bg-mongolia-blue text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for an Adventure?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Join us for a journey through the vast steppes and starry nights of Mongolia.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-mongolia-gold w-full"
              />
              <button className="bg-mongolia-gold text-gray-900 font-bold px-8 py-3 rounded-full hover:bg-yellow-400 transition-colors whitespace-nowrap">
                Get Guide
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;