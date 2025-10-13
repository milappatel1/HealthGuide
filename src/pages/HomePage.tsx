import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Search, Users, Shield, BookOpen, Zap } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import { diseases, bodySystems } from '../data/diseases';

const HomePage: React.FC = () => {
  const featuredDiseases = diseases.slice(0, 3);
  const featuredSystems = bodySystems.slice(0, 3);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
          {/* Hero Section */}
          <section className="pt-8 sm:pt-12 lg:pt-16">
            <div className="text-center space-y-6 sm:space-y-8">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
                  <span className="block">Understanding Health</span>
                  <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                    Made Simple
                  </span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed px-2">
                  Learn about medical conditions, symptoms, and treatments in clear, 
                  easy-to-understand language. Perfect for patients, families, and anyone 
                  curious about health.
                </p>
              </div>

              <div className="max-w-md mx-auto px-4">
                <SearchBar />
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-4">
                {[
                  { value: `${diseases.length}+`, label: 'Conditions Explained', color: 'text-blue-600 dark:text-blue-400' },
                  { value: bodySystems.length, label: 'Body Systems', color: 'text-green-600 dark:text-green-400' },
                  { value: '100%', label: 'Free Access', color: 'text-purple-600 dark:text-purple-400' },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl px-4 py-4 border border-gray-200 dark:border-gray-700 text-center"
                  >
                    <div className={`text-2xl font-bold mb-1 ${stat.color}`}>{stat.value}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 leading-snug">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section>
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
                Why Choose MedExplained?
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-2">
                I make complex medical information accessible to everyone, from curious kids to concerned adults.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 leading-tight">
                  Simple Explanations
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  Complex medical terms broken down into everyday language that anyone can understand, including special sections for children.
                </p>
              </div>

              <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 leading-tight">
                  Medically Accurate
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  All content is carefully researched and presented accurately, ensuring you get reliable health information you can trust.
                </p>
              </div>

              <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 leading-tight">
                  Family Friendly
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  Content suitable for all ages with accessibility features like adjustable fonts and dark mode for comfortable reading.
                </p>
              </div>
            </div>
          </section>

          {/* Featured Diseases */}
          <section>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
                  Commonly Visited Conditions
                </h2>
                <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  Learn about the most frequently asked about health conditions
                </p>
              </div>
              <Link 
                to="/diseases"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors duration-200 shadow-lg hover:shadow-xl whitespace-nowrap"
              >
                View All
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredDiseases.map((disease) => (
                <Link
                  key={disease.id}
                  to={`/disease/${disease.id}`}
                  className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex flex-wrap gap-2 mb-4">
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      disease.severity === 'mild' 
                        ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                        : disease.severity === 'moderate'
                        ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300'
                        : 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300'
                    }`}>
                      {disease.severity}
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      disease.commonness === 'very-common'
                        ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`}>
                      {disease.commonness.replace('-', ' ')}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                    {disease.name}
                  </h3>
                  <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    {disease.summary}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          {/* Body Systems */}
          <section>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
                  Explore Body Systems
                </h2>
                <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  Learn how different parts of your body work together
                </p>
              </div>
              <Link 
                to="/body-systems"
                className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-medium transition-colors duration-200 shadow-lg hover:shadow-xl whitespace-nowrap"
              >
                View All
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredSystems.map((system) => {
                const IconComponent = system.icon === 'Heart' ? Heart : system.icon === 'Zap' ? Zap : BookOpen;
                return (
                  <Link
                    key={system.id}
                    to={`/body-system/${system.id}`}
                    className="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                  >
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                      {system.name}
                    </h3>
                    <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                      {system.description}
                    </p>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* CTA Section */}
          <section className="pb-8 sm:pb-12 lg:pb-16">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-8 sm:p-12 text-center text-white">
              <div className="max-w-3xl mx-auto space-y-6">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                  Start Learning Today
                </h2>
                <p className="text-base sm:text-lg lg:text-xl opacity-90 leading-relaxed">
                  Join thousands of people who trust MedExplained for clear, 
                  reliable health information that's easy to understand.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                  <Link
                    to="/diseases"
                    className="px-8 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl"
                  >
                    Browse All Diseases
                  </Link>
                  <Link
                    to="/common-questions"
                    className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
                  >
                    Common Questions
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
