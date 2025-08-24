import React from 'react';
import { Github, ExternalLink, Star, GitFork, Award } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Brain Stroke Prediction',
      subtitle: 'Conference Presentation',
      description: 'Achieved 99% accuracy using Deep Neural Networks (DNNs) in Python. Presented at an international AI conference showcasing early diagnosis methods using tabular health datasets.',
      techStack: ['Python', 'TensorFlow', 'Deep Learning', 'Healthcare AI', 'Data Analysis'],
      githubUrl: 'https://github.com/lokendra-bethu/brain-stroke-prediction',
      demoUrl: '#',
      image: 'https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg?auto=compress&cs=tinysrgb&w=800',
      stars: 45,
      forks: 12,
      status: 'Published',
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'EEG-Based Music Therapy',
      subtitle: 'Outstanding Capstone Project',
      description: 'Designed a dynamic stress detection system integrating neural signals and machine learning models. Awarded Best Capstone Project at VIT for innovation in data-driven emotion monitoring.',
      techStack: ['Python', 'EEG Processing', 'Machine Learning', 'Signal Processing', 'Real-time Systems'],
      githubUrl: 'https://github.com/lokendra-bethu/eeg-music-therapy',
      demoUrl: '#',
      image: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=800',
      stars: 67,
      forks: 23,
      status: 'Award Winner',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Imagined Motor Activity Recognition',
      subtitle: 'Published IEEE Paper',
      description: 'Applied Convolutional Neural Networks (CNNs) to classify motor imagery signals. The research was peer-reviewed and published in an International-indexed journal.',
      techStack: ['Python', 'CNNs', 'EEG Analysis', 'Motor Imagery', 'IEEE Publication'],
      githubUrl: 'https://github.com/lokendra-bethu/motor-imagery-recognition',
      demoUrl: '#',
      image: 'https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg?auto=compress&cs=tinysrgb&w=800',
      stars: 89,
      forks: 34,
      status: 'Published',
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Projects & Research
          </h2>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80`}></div>
                  <div className="absolute inset-0 bg-black/20"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white ${
                      project.status === 'Published' ? 'bg-green-500' : 
                      project.status === 'Award Winner' ? 'bg-yellow-500' : 'bg-blue-500'
                    }`}>
                      <Award className="w-3 h-3 mr-1" />
                      {project.status}
                    </span>
                  </div>
                  
                  {/* Project Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {project.subtitle}
                    </p>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* GitHub Stats */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        {project.stars}
                      </div>
                      <div className="flex items-center">
                        <GitFork className="w-4 h-4 mr-1" />
                        {project.forks}
                      </div>
                    </div>
                  </div>
                  
                  {/* Project Links */}
                  <div className="flex space-x-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gray-900 dark:bg-gray-600 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-500 transition-colors text-sm font-medium"
                    >
                      <Github className="mr-2" size={16} />
                      GitHub
                    </a>
                    <a
                      href={project.demoUrl}
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm font-medium"
                    >
                      <ExternalLink className="mr-2" size={16} />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;