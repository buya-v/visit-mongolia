import { Mountain, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <Mountain className="h-8 w-8 text-mongolia-sky" />
            <span className="font-serif font-bold text-xl">Visit Mongolia</span>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Visit Mongolia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}