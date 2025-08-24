import React from 'react';
import { Users, Award, Calendar, TrendingUp } from 'lucide-react';

const Leadership: React.FC = () => {
  const leadership = [
    {
      title: 'President',
      organization: 'Microsoft Student Chapter',
      period: '2022 - 2024',
      description: 'Led workshops, hackathons, and peer learning initiatives to expand Microsoft tech adoption on campus.',
      achievements: [
        'Organized 15+ technical workshops and hackathons',
        'Increased chapter membership by 200%',
        'Recognized by university leadership for outstanding community engagement'
      ],
      icon: Users,
      color: 'from-blue-500 to-blue-700',
      logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      title: 'Organizer',
      organization: 'V-TAPP (International Tech Fest)',
      period: '2023',
      description: 'Managed logistics, sponsorships, and budgeting for VIT-AP\'s largest tech festival with record participation.',
      achievements: [
        'Managed ₹10L+ event budget and logistics',
        'Secured 20+ corporate sponsorships',
        'Achieved record 5000+ participant registration'
      ],
      icon: Award,
      color: 'from-purple-500 to-purple-700',
      logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      title: 'PR Head',
      organization: 'Null Infosec Chapter',
      period: '2022 - 2023',
      description: 'Handled branding and outreach; awarded "Best Team" for excellence in cybersecurity community events.',
      achievements: [
        'Led cybersecurity awareness campaigns',
        'Organized 10+ security workshops',
        'Awarded "Best Team" for community impact'
      ],
      icon: TrendingUp,
      color: 'from-green-500 to-green-700',
      logo: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  ];

  const publications = [
    {
      title: 'Advanced BCI Systems Using Transformer Architecture',
      venue: 'IEEE Conference on Neural Engineering',
      year: '2024',
      status: 'Published',
      type: 'Conference Paper'
    },
    {
      title: 'Machine Learning Applications in Remote Sensing Data Analysis',
      venue: 'International Journal of Remote Sensing Applications',
      year: '2024',
      status: 'Published',
      type: 'Journal Article'
    }
  ];

  return (
    <section id="leadership" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Leadership & Achievements
          </h2>
          
          {/* Leadership Roles */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {leadership.map((role, index) => (
              <div
                key={role.title}
                className="group bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-center mb-6">
                  <div className="relative inline-block">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${role.color} p-1 shadow-lg group-hover:scale-110 transition-transform mx-auto mb-4`}>
                      <img
                        src={role.logo}
                        alt={role.organization}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br ${role.color} flex items-center justify-center shadow-lg`}>
                      <role.icon className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {role.title}
                  </h3>
                  <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                    {role.organization}
                  </h4>
                  <div className="flex items-center justify-center text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <Calendar size={14} className="mr-1" />
                    {role.period}
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {role.description}
                </p>
                
                <div>
                  <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Key Achievements:
                  </h5>
                  <ul className="space-y-1">
                    {role.achievements.map((achievement, i) => (
                      <li key={i} className="text-xs text-gray-600 dark:text-gray-300 flex items-start">
                        <span className="w-1 h-1 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          {/* Publications Section */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center flex items-center justify-center">
              <Award className="mr-3 text-yellow-500" size={28} />
              Publications & Research
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {publications.map((pub, index) => (
                <div
                  key={pub.title}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      pub.status === 'Published' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                    }`}>
                      {pub.status}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                      {pub.type}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 leading-tight">
                    {pub.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-2 text-sm">
                    {pub.venue}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {pub.year}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;