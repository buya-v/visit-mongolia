import { destinations } from '../data/content';
import { MapPin } from 'lucide-react';

export default function Destinations() {
  return (
    <section id="destinations" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-mongolia-sky uppercase tracking-wider mb-2">Discover</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">Top Destinations</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <div key={dest.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={dest.imageUrl} 
                  alt={dest.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/70 to-transparent w-full">
                  <div className="flex items-center text-white/90 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    {dest.location}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-slate-900 mb-2">{dest.title}</h4>
                <p className="text-slate-600 leading-relaxed">
                  {dest.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}