import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Lokendra Srisai Bethu</h3>
              <p className="text-gray-400">AI/ML Engineer | Researcher | Innovator</p>
            </div>
            
            <div className="flex items-center space-x-6">
              <button
                onClick={scrollToTop}
                className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors"
                aria-label="Scroll to top"
              >
                <ArrowUp size={20} />
              </button>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 flex items-center justify-center">
              Made with <Heart className="mx-2 text-red-500" size={16} /> by Lokendra Srisai Bethu
            </p>
            <p className="text-gray-500 mt-2 text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;