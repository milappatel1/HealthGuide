import React from 'react';
import { Heart, Users, Shield, BookOpen, Target, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center space-y-6 mb-16">
        <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-3xl flex items-center justify-center mx-auto">
          <Heart className="h-10 w-10 text-white" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
          About MedExplained
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Hey everyone, my name is Milap Patel, and I believe that everyone deserves to understand their health. 
          MedExplained makes complex medical information accessible, 
          clear, and easy to understand for people of all ages and backgrounds.
        </p>
      </div>

      {/* Mission Section */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 mb-12">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mr-4">
            <Target className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Our Mission
          </h2>
        </div>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
          To bridge the gap between complex medical terminology and everyday understanding. 
          I transformed complicated health information into clear, simple explanations that 
          empower people to better understand their health conditions, make informed decisions, 
          and communicate more effectively with their healthcare providers.
        </p>
      </div>

      {/* Values Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center mb-4">
            <Users className="h-6 w-6 text-green-600 dark:text-green-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Family-Centered
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            I designed my content for entire families, with special sections that help 
            children understand health conditions in age-appropriate, non-frightening ways.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center mb-4">
            <Shield className="h-6 w-6 text-purple-600 dark:text-purple-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Medically Accurate
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            All of my content is carefully researched and based on reliable medical sources, 
            ensuring you receive accurate, trustworthy health information. I use many reputable 
            databases, as well as carefully learning before including it in my website.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-xl flex items-center justify-center mb-4">
            <BookOpen className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Educational Focus
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            I'am committed to education, not medical advice. Our goal is to help you 
            understand health conditions so you can have better conversations with your healthcare team.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-xl flex items-center justify-center mb-4">
            <Lightbulb className="h-6 w-6 text-red-600 dark:text-red-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Accessibility First
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            I believe health information should be accessible to everyone, regardless of 
            reading level, age, or technical ability. That's why we offer multiple accessibility features.
          </p>
        </div>
      </div>

      {/* What Makes Us Different */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-2xl p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">
          What Makes MedExplained Different?
        </h2>
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white text-sm font-bold">1</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Simple Explanations for Everyone
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Every disease page includes a special "Simple Explanation" section that breaks down 
                complex medical concepts into everyday language, perfect for children or anyone who 
                prefers straightforward information.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white text-sm font-bold">2</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Organized by Body Systems
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                I organized health conditions by the body systems they affect, helping you understand 
                how different parts of your body work together and what can go wrong.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white text-sm font-bold">3</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Comprehensive Coverage
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                From symptoms and causes to diagnosis, treatment, and prevention, I cover all aspects 
                of each condition in a structured, easy-to-follow format.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Important Disclaimer */}
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-2xl p-8">
        <div className="flex items-start space-x-4">
          <Shield className="h-6 w-6 text-yellow-600 dark:text-yellow-400 mt-1 flex-shrink-0" />
          <div>
            <h2 className="text-xl font-semibold text-yellow-800 dark:text-yellow-200 mb-3">
              Important Medical Disclaimer
            </h2>
            <p className="text-yellow-700 dark:text-yellow-300 leading-relaxed mb-4">
              HealthExplain provides educational information for learning purposes only. 
              This website is not intended to replace professional medical advice, diagnosis, or treatment.
            </p>
            <div className="space-y-2 text-sm text-yellow-600 dark:text-yellow-400">
              <p>• Always consult with qualified healthcare professionals for medical concerns</p>
              <p>• Never ignore professional medical advice because of information on this website</p>
              <p>• In case of medical emergencies, contact emergency services immediately</p>
              <p>• Individual medical situations vary - what applies to one person may not apply to another</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="text-center mt-12 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
          Thank You for Visiting HealthExplain
        </h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          I am committed to making health information accessible and understandable for everyone. 
          I hope my resources help you better understand health conditions and feel more confident 
          in your healthcare journey.
        </p>
      </div>
    </div>
  );
};

export default About;
