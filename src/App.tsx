import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import DestinationCard from './components/DestinationCard';
import Footer from './components/Footer';
import { destinations, cultureItems } from './data/content';
import { Mountain, Tent, Calendar } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <Section id="about" title="About Mongolia" className="bg-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-lg text-slate-600">
              <p>
                Known as the "Land of the Eternal Blue Sky," Mongolia is a country of vast rugged expanses 
                and nomadic culture. Sandwiched between China and Russia, it remains one of the last 
                truly wild places on earth.
              </p>
              <p>
                From the arid Gobi Desert in the south to the mountainous regions of the north and west, 
                Mongolia offers landscapes that are as diverse as they are breathtaking. It is the 
                birthplace of Genghis Khan and home to a hospitable people who have lived in harmony 
                with nature for thousands of years.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1605626569658-5d152c16c021?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Mongolian Landscape" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Section>

        <Section id="destinations" title="Top Destinations" className="bg-slate-50">
          <div className="grid md:grid-cols-3 gap-8">
            {destinations.map((dest) => (
              <DestinationCard 
                key={dest.id} 
                title={dest.title} 
                description={dest.description} 
                imageUrl={dest.imageUrl}
                tag={dest.region}
              />
            ))}
          </div>
        </Section>

        <Section id="culture" title="Culture & Experiences" className="bg-white">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
              <Tent className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Nomadic Lifestyle</h3>
              <p className="text-slate-600">Stay in a traditional Ger and experience the hospitality of nomadic families on the steppe.</p>
            </div>
            <div className="p-6 border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
              <Mountain className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Nature & Wildlife</h3>
              <p className="text-slate-600">Spot wild horses (Takhi), eagles, and camels in their natural untouched habitats.</p>
            </div>
            <div className="p-6 border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
              <Calendar className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Naadam Festival</h3>
              <p className="text-slate-600">Witness the "Three Manly Games" of wrestling, horse racing, and archery every July.</p>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default App;