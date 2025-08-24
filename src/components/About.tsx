import React from 'react';
import { GraduationCap, Award, Users, Rocket } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16">
            About Me
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-cyan-500 to-purple-600 p-1">
                  <img
                    src="src/components/088c5aaa-29a0-4a2b-a94a-db7f606ff0e6.JPG"
                    alt="Bethu Lokendra Srisai"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                AI/ML Engineer & Researcher
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Driven by curiosity and purpose, I apply machine learning to neural data, lead research-backed 
                innovations, and build data-driven systems across government labs and startup environments. 
                Skilled in deploying scalable models, managing signal pipelines, and translating research into 
                cloud-ready solutions.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                I am passionate about AI at the intersection of neuroscience, healthcare, and cognitive tech, 
                with experience spanning from ISRO research to startup co-founding and Microsoft Student Chapter leadership.
              </p>
              
              {/* Achievement Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <GraduationCap className="mx-auto mb-2 text-blue-600 dark:text-blue-400" size={24} />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">MS</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Computer Science</div>
                </div>
                <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <Award className="mx-auto mb-2 text-purple-600 dark:text-purple-400" size={24} />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">2</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">IEEE Publications</div>
                </div>
                <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <Users className="mx-auto mb-2 text-green-600 dark:text-green-400" size={24} />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">Ex-ISRO</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Intern</div>
                </div>
                <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <Rocket className="mx-auto mb-2 text-orange-600 dark:text-orange-400" size={24} />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">Co-Founder</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">NeuroCortex</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;