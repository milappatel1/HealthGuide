import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Search } from 'lucide-react';
import { 
  Heart, 
  Zap, 
  Apple, 
  Brain, 
  Bone, 
  Sun as Lung, 
  Shield,
  Sun,
  Droplets,
  Baby,
  Activity,
  Eye
} from 'lucide-react';
import { bodySystems, diseases } from '../data/diseases';

const BodySystemDiseases: React.FC = () => {
  const { systemId } = useParams<{ systemId: string }>();
  const system = bodySystems.find(s => s.id === systemId);
  const systemDiseases = diseases.filter(disease => disease.bodySystem === systemId);

  const getIconComponent = (iconName: string) => {
    const icons = {
      Heart,
      Zap,
      Apple,
      Brain,
      Bone,
      Lung,
      Shield,
      Sun,
      Droplets,
      Baby,
      Activity,
      Eye
    };
    return icons[iconName as keyof typeof icons] || Heart;
  };

  if (!system) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Body System Not Found
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Sorry, we couldn't find information about this body system.
        </p>
        <Link
          to="/body-systems"
          className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors duration-200"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Browse All Body Systems
        </Link>
      </div>
    );
  }

  const IconComponent = getIconComponent(system.icon);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <div className="mb-8">
        <Link
          to="/body-systems"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Body Systems
        </Link>
      </div>

      {/* System Header */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 mb-8">
        <div className="flex items-center mb-6">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-3xl flex items-center justify-center mr-6">
            <IconComponent className="h-10 w-10 text-white" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              {system.name}
            </h1>
            <div className="text-lg text-gray-500 dark:text-gray-400">
              {systemDiseases.length} condition{systemDiseases.length !== 1 ? 's' : ''}
            </div>
          </div>
        </div>
        
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          {system.description}
        </p>
      </div>

      {/* Diseases List */}
      {systemDiseases.length === 0 ? (
        <div className="text-center py-16">
          <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
            No conditions available yet
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            We're working on adding more conditions for the {system.name.toLowerCase()}. 
            Check back soon for updates!
          </p>
          <Link
            to="/diseases"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors duration-200"
          >
            Browse All Diseases
          </Link>
        </div>
      ) : (
        <>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              Conditions Affecting the {system.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Learn about {systemDiseases.length} condition{systemDiseases.length !== 1 ? 's' : ''} that can affect this body system
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {systemDiseases.map((disease) => (
              <Link
                key={disease.id}
                to={`/disease/${disease.id}`}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-start justify-between mb-4">
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
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {disease.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  {disease.category}
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
                  {disease.summary}
                </p>

                {/* Preview of symptoms */}
                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Common symptoms:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {disease.symptoms.slice(0, 3).map((symptom, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full"
                      >
                        {symptom.length > 20 ? `${symptom.substring(0, 20)}...` : symptom}
                      </span>
                    ))}
                    {disease.symptoms.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                        +{disease.symptoms.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}

      {/* Educational Section */}
      <div className="mt-16 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-3xl p-8 md:p-12">
        <div className="text-center space-y-4 mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto">
            <IconComponent className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
            Understanding the {system.name}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {system.description}
          </p>
        </div>

        <div className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 text-center">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Want to learn about other body systems?
          </h3>
          <Link
            to="/body-systems"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors duration-200"
          >
            Explore All Body Systems
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BodySystemDiseases;