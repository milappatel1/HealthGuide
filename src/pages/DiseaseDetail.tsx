import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, AlertCircle, Stethoscope, Shield, Heart, Baby } from 'lucide-react';
import { diseases } from '../data/diseases';

const DiseaseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const disease = diseases.find(d => d.id === id);

  if (!disease) {
    return (
      <div className="w-full px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Disease Not Found
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Sorry, we couldn't find information about this condition.
        </p>
        <Link
          to="/diseases"
          className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors duration-200"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Browse All Diseases
        </Link>
      </div>
    );
  }

  const sections = [
    { id: 'symptoms', title: 'Symptoms', icon: AlertCircle, items: disease.symptoms },
    { id: 'causes', title: 'Causes', icon: Stethoscope, items: disease.causes },
    { id: 'diagnosis', title: 'Diagnosis', icon: Heart, items: disease.diagnosis },
    { id: 'treatment', title: 'Treatment', icon: Shield, items: disease.treatment },
    { id: 'prevention', title: 'Prevention', icon: Shield, items: disease.prevention }
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <div className="mb-8">
        <Link
          to="/diseases"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to All Diseases
        </Link>
      </div>

      {/* Header */}
      <div className="w-full bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 mb-8">
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <div className={`px-4 py-2 rounded-full text-sm font-medium ${
            disease.severity === 'mild' 
              ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
              : disease.severity === 'moderate'
              ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300'
              : 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300'
          }`}>
            {disease.severity} severity
          </div>
          <div className={`px-4 py-2 rounded-full text-sm font-medium ${
            disease.commonness === 'very-common'
              ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
          }`}>
            {disease.commonness.replace('-', ' ')}
          </div>
          <div className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
            {disease.category}
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          {disease.name}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          {disease.summary}
        </p>
      </div>

      {/* Simple Explanation for Kids */}
      <div className="w-full bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 rounded-2xl p-8 mb-8 border border-pink-100 dark:border-pink-800">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-xl flex items-center justify-center mr-4">
            <Baby className="h-6 w-6 text-pink-600 dark:text-pink-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Simple Explanation
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(disease.simpleExplanation).map(([key, value]) => (
            <div key={key} className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                {key === 'whatIs' ? 'What is it?' :
                 key === 'howYouGet' ? 'How do you get it?' :
                 key === 'howToFeel' ? 'How will you feel?' :
                 'How to get better?'}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Medical Information Sections */}
      <div className="space-y-8">
        {sections.map((section) => {
          const IconComponent = section.icon;
          return (
            <div key={section.id} className="w-full bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mr-4">
                  <IconComponent className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {section.title}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.items.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Disclaimer */}
      <div className="mt-12 w-full p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-2xl">
        <div className="flex items-start space-x-3">
          <AlertCircle className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="text-sm font-semibold text-yellow-800 dark:text-yellow-200 mb-1">
              Important Medical Disclaimer
            </h3>
            <p className="text-sm text-yellow-700 dark:text-yellow-300 leading-relaxed">
              This information is for educational purposes only and should not replace professional medical advice. 
              Always consult with a healthcare provider for proper diagnosis and treatment of medical conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiseaseDetail;
