import React from 'react';
import { 
  Code2, 
  Brain, 
  Database, 
  Cloud, 
  GitBranch,
  Cpu,
  Eye,
  Zap,
  Globe,
  Settings
} from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming',
      skills: [
        { name: 'Python', icon: Code2, level: 95 },
        { name: '.NET', icon: Settings, level: 85 },
        { name: 'SQL', icon: Database, level: 90 },
        { name: 'JavaScript', icon: Globe, level: 80 }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'TensorFlow', icon: Brain, level: 95 },
        { name: 'PyTorch', icon: Cpu, level: 90 },
        { name: 'Keras', icon: Brain, level: 85 },
        { name: 'Scikit-learn', icon: Zap, level: 90 }
      ]
    },
    {
      title: 'Data Science & AI',
      skills: [
        { name: 'Machine Learning', icon: Brain, level: 95 },
        { name: 'Deep Learning', icon: Cpu, level: 90 },
        { name: 'NLP', icon: Eye, level: 85 },
        { name: 'Computer Vision', icon: Eye, level: 80 },
        { name: 'Model Deployment', icon: Cloud, level: 85 }
      ]
    },
    {
      title: 'Platforms & Tools',
      skills: [
        { name: 'Azure AI', icon: Cloud, level: 85 },
        { name: 'AWS', icon: Cloud, level: 80 },
        { name: 'Docker', icon: Settings, level: 85 },
        { name: 'Git', icon: GitBranch, level: 90 },
        { name: 'GitHub Actions', icon: Zap, level: 80 }
      ]
    }
  ];

  const getColorClass = (index: number) => {
    const colors = [
      'from-blue-500 to-cyan-500',
      'from-purple-500 to-pink-500',
      'from-green-500 to-teal-500',
      'from-orange-500 to-red-500'
    ];
    return colors[index % colors.length];
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${categoryIndex * 200}ms` }}
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  {category.title}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="group">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <div className={`p-2 rounded-lg bg-gradient-to-br ${getColorClass(categoryIndex)} text-white mr-3 group-hover:scale-110 transition-transform`}>
                            <skill.icon size={20} />
                          </div>
                          <span className="font-semibold text-gray-900 dark:text-white">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full bg-gradient-to-r ${getColorClass(categoryIndex)} transition-all duration-1000 ease-out`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 4 + skillIndex) * 200}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Specializations */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
              Specializations
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Neurotechnology', 'Brain-Computer Interfaces', 'EEG Signal Processing', 
                'Cognitive Computing', 'Real-time AI Systems', 'Cloud ML Deployment',
                'Research & Development', 'Startup Innovation', 'Team Leadership'
              ].map((spec) => (
                <span
                  key={spec}
                  className="px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:from-blue-200 hover:to-purple-200 dark:hover:from-blue-800/40 dark:hover:to-purple-800/40 transition-all cursor-pointer transform hover:scale-105"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;