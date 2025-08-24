import React from 'react';
import { Calendar, MapPin, Award, TrendingUp } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Co-Founder & Research Lead',
      company: 'NeuroCortex Mindtech',
      type: 'Early-Stage Startup',
      period: 'Aug 2023 - Aug 2024',
      location: 'Remote',
      description: 'Driven by a shared vision with my peer and mentor, I co-initiated this startup to pioneer innovation at the intersection of neuroscience and computing. The initiative focuses on leveraging AI for brain-computer interface research and real-time cognitive data processing.',
      achievements: [
        'Led 5+ AI-based neurotech projects involving EEG signal processing, BCI modeling, and cloud deployment',
        'Secured ₹2L+ in research grants and contributed to 2 IEEE publications on human-machine research',
        'Developed cognitive monitoring tools using Python, Azure AI, and open-source neural systems platforms',
        'Mentored cross-functional student teams, increasing project completion rate by 30%'
      ],
      color: 'from-purple-500 to-pink-500',
      logo: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      title: 'Project Intern',
      company: 'National Remote Sensing Centre (ISRO)',
      type: 'Government Research Lab',
      period: 'Jan 2024 - Jun 2024',
      location: 'Hyderabad, India',
      description: 'As part of a central government research initiative, I had the privilege of contributing at ISRO-NRSC under the guidance of senior scientists. This opportunity exposed me to high-impact public-sector projects, geospatial datasets, and model deployment in real-world conditions.',
      achievements: [
        'Built a scalable models prediction system using ML models and time-series analysis, achieving 75% classification accuracy',
        'Enhanced model performance by 15% through data preprocessing and optimization of training pipelines',
        'Spearheaded an agile dashboard development process using JavaScript and REST APIs to monitor high-frequency ISRO sensor data, conducting 5 rapid demo cycles with domain experts and improving usability ratings from 60% to 92%'
      ],
      color: 'from-blue-500 to-cyan-500',
      logo: 'https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      title: '.NET Developer Intern',
      company: 'XTGlobal Careers',
      type: 'Technology Company',
      period: 'Apr 2023 - Jul 2023',
      location: 'Remote',
      description: 'Completed this summer internship during my second year of undergraduate studies, where I gained early hands-on exposure to enterprise application development and agile team workflows in a corporate setting.',
      achievements: [
        'Engineered full-stack applications using .NET Core, C#, and SQL, automating 15+ manual data entry tasks per week, increasing efficiency by 20%',
        'Orchestrated deployment reliability initiatives by collaborating with QA and DevOps to embed automated API/smoke/regression tests into the CI pipeline, reducing pre-release defects by 85%'
      ],
      color: 'from-green-500 to-teal-500',
      logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Professional Experience
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className="group bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Company Logo & Timeline */}
                  <div className="flex-shrink-0">
                    <div className="flex flex-col items-center">
                      <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${exp.color} p-1 shadow-lg group-hover:scale-110 transition-transform`}>
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div className="mt-4 text-center">
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-1">
                          <Calendar size={14} className="mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <MapPin size={14} className="mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-grow">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {exp.title}
                      </h3>
                      <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-1">
                        {exp.company}
                      </h4>
                      <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
                        {exp.type}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    {/* Achievements */}
                    <div>
                      <h5 className="flex items-center text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        <TrendingUp className="mr-2 text-green-500" size={20} />
                        Key Achievements
                      </h5>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start text-gray-600 dark:text-gray-300">
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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

export default Experience;