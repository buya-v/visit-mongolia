import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DestinationCard } from './components/DestinationCard';
import { CultureSection } from './components/CultureSection';
import { Footer } from './components/Footer';
import { destinations } from './data/content';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Header />
      
      <main>
        <Hero />

        {/* Destinations Section */}
        <section id="destinations" className="py-20 container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Unforgettable Landscapes</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From the golden sands of the Gobi to the crystal clear waters of Khuvsgul.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((dest) => (
              <DestinationCard key={dest.id} destination={dest} />
            ))}
          </div>
        </section>

        <CultureSection />
        
        {/* Call to Action */}
        <section className="py-20 bg-blue-900 text-white text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for your adventure?</h2>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-10">
            Start planning your trip to Mongolia today and experience the hospitality of the nomads.
          </p>
          <button className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-transform hover:scale-105">
            Book a Consultation
          </button>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;