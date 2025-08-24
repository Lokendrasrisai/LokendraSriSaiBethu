import React from 'react';
import { Download, Mail, ArrowDown, Brain, Cpu } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Advanced AI-themed Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Neural Network Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 left-60 w-1 h-1 bg-blue-400 rounded-full animate-pulse animation-delay-500"></div>
          <div className="absolute top-60 left-40 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-40 right-20 w-2 h-2 bg-cyan-400 rounded-full animate-pulse animation-delay-1500"></div>
          <div className="absolute bottom-60 right-60 w-1 h-1 bg-blue-400 rounded-full animate-pulse animation-delay-2000"></div>
          
          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full">
            <line x1="80" y1="80" x2="240" y2="160" stroke="rgba(96, 165, 250, 0.3)" strokeWidth="1" className="animate-pulse" />
            <line x1="240" y1="160" x2="160" y2="240" stroke="rgba(147, 51, 234, 0.3)" strokeWidth="1" className="animate-pulse" />
            <line x1="160" y1="240" x2="320" y2="320" stroke="rgba(34, 211, 238, 0.3)" strokeWidth="1" className="animate-pulse" />
          </svg>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-5xl mx-auto">
          {/* AI Icons */}
          <div className="flex justify-center space-x-8 mb-8 animate-fade-in-up">
            <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
              <Brain className="w-8 h-8 text-cyan-400" />
            </div>
            <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
              <Cpu className="w-8 h-8 text-purple-400" />
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in-up bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Bethu Lokendra Srisai
          </h1>
          <p className="text-2xl md:text-3xl mb-8 opacity-90 animate-fade-in-up animation-delay-200 font-light">
            AI/ML Engineer | Researcher | Entrepreneur
          </p>
          <p className="text-lg md:text-xl mb-12 opacity-80 max-w-3xl mx-auto animate-fade-in-up animation-delay-400 leading-relaxed">
            Building intelligent systems at the intersection of neuroscience, healthcare, and cloud technology. 
            Transforming research into scalable AI solutions.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up animation-delay-600">
            <a
              href="/Bethu_LokendrasrisaiResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-cyan-500/25"
            >
              <Download className="mr-3 group-hover:animate-bounce" size={20} />
              Download Resume
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="group inline-flex items-center px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="mr-3 group-hover:animate-pulse" size={20} />
              Contact Me
            </button>
          </div>
          
          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <button
              onClick={() => scrollToSection('about')}
              className="inline-flex items-center text-white/80 hover:text-white transition-colors group"
            >
              <ArrowDown size={24} className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -left-4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-8 -right-8 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl animate-pulse animation-delay-2000"></div>
      </div>
    </section>
  );
};

export default Hero;