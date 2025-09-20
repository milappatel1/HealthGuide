import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Search, Users, Shield, BookOpen, Zap } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import { diseases, bodySystems } from '../data/diseases';

const HomePage: React.FC = () => {
  const featuredDiseases = diseases.slice(0, 3);
  const featuredSystems = bodySystems.slice(0, 3);

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="text-center space-y-6 sm:space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              Understanding Health
              <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Made Simple
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Learn about medical conditions, symptoms, and treatments in clear, 
              easy-to-understand language. Perfect for patients, families, and anyone 
              curious about health.
            </p>

            {/* Search Bar */}
            <div className="max-w-md sm:max-w-lg mx-auto mt-4">
              <SearchBar />
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-8 sm:mt-12">
              {[
                { value: `${diseases.length}+`, label: 'Conditions Explained', color: 'text-blue-600 dark:text-blue-400' },
                { value: bodySystems.length, label: 'Body Systems', color: 'text-green-600 dark:text-green-400' },
                { value: '100%', label: 'Free Access', color: 'text-purple-600 dark:text-purple-400' },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl px-6 py-4 border border-gray-200 dark:border-gray-700 w-36 text-center"
                >
                  <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
            Why Choose HealthExplain?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I make complex medical information accessible to everyone, from curious kids to concerned adults.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
              <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2 sm:mb-3">
              Simple Explanations
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              Complex medical terms broken down into everyday language that anyone can understand, 
              including special sections for children.
            </p>
          </div>

          <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
              <Shield className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2 sm:mb-3">
              Medically Accurate
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              All content is carefully researched and presented accurately, 
              ensuring you get reliable health information you can trust.
            </p>
          </div>

          <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
              <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2 sm:mb-3">
              Family Friendly
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              Content suitable for all ages with accessibility features like 
              adjustable fonts and dark mode for comfortable reading.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Diseases */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8">
          <div className="mb-4 sm:mb-0">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-1">
              Commonly Visited Conditions
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              Learn about the most frequently asked about health conditions
            </p>
          </div>
          <Link 
            to="/diseases"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredDiseases.map((disease) => (
            <Link
              key={disease.id}
              to={`/disease/${disease.id}`}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex flex-wrap justify-between mb-2 sm:mb-4 gap-2">
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                  disease.severity === 'mild' 
                    ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                    : disease.severity === 'moderate'
                    ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300'
                    : 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300'
                }`}>
                  {disease.severity}
                </div>
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                  disease.commonness === 'very-common'
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                }`}>
                  {disease.commonness.replace('-', ' ')}
                </div>
              </div>
              
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {disease.name}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                {disease.summary}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Body Systems */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8">
          <div className="mb-4 sm:mb-0">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-1">
              Explore Body Systems
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              Learn how different parts of your body work together
            </p>
          </div>
          <Link 
            to="/body-systems"
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredSystems.map((system) => {
            const IconComponent = system.icon === 'Heart' ? Heart : system.icon === 'Zap' ? Zap : BookOpen;
            return (
              <Link
                key={system.id}
                to="/body-systems"
                className="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="h-6 sm:h-8 w-6 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {system.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  {system.description}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-8 sm:p-12 text-center text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Start Learning Today
          </h2>
          <p className="text-base sm:text-lg md:text-xl opacity-90 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Join thousands of people who trust HealthExplain for clear, 
            reliable health information that's easy to understand.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              to="/diseases"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Browse All Diseases
            </Link>
            <Link
              to="/common-questions"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Common Questions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
