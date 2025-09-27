import type React from "react"
import { Link } from "react-router-dom"
import { Heart, Zap, Apple, Brain, Bone, Bug as Lung, Shield, Sun, Droplets, Baby, Activity, Eye } from "lucide-react"
import { bodySystems, diseases } from "../data/diseases"

const BodySystems: React.FC = () => {
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
      Eye,
    }
    return icons[iconName as keyof typeof icons] || Heart
  }

  const getSystemDiseases = (systemId: string) => {
    return diseases.filter((disease) => disease.bodySystem === systemId)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">Body Systems</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Explore how different parts of your body work together and learn about conditions that can affect each system.
        </p>
      </div>

      {/* Body Systems Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {bodySystems.map((system) => {
          const IconComponent = getIconComponent(system.icon)
          const systemDiseases = getSystemDiseases(system.id)

          return (
            <Link
              to={`/body-system/${system.id}`}
              key={system.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              {/* System Icon and Name */}
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors break-words leading-tight hyphens-auto">
                    {system.name}
                  </h2>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {systemDiseases.length} condition{systemDiseases.length !== 1 ? "s" : ""}
                  </div>
                </div>
              </div>

              {/* System Description */}
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{system.description}</p>

              {/* Associated Diseases */}
              {systemDiseases.length > 0 ? (
                <div className="space-y-3">
                  <div className="space-y-2">
                    {systemDiseases.slice(0, 3).map((disease) => (
                      <Link
                        key={disease.id}
                        to={`/disease/${disease.id}`}
                        className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors group/disease"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-gray-100 group-hover/disease:text-blue-600 dark:group-hover/disease:text-blue-400 transition-colors">
                              {disease.name}
                            </h4>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
                              {disease.summary}
                            </p>
                          </div>
                          <div
                            className={`px-2 py-1 rounded-full text-xs font-medium ml-3 flex-shrink-0 ${
                              disease.commonness === "very-common"
                                ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                                : "bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300"
                            }`}
                          >
                            {disease.commonness.replace("-", " ")}
                          </div>
                        </div>
                      </Link>
                    ))}
                    {systemDiseases.length > 3 && (
                      <Link
                        to={`/body-system/${system.id}`}
                        className="block p-3 text-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm transition-colors"
                      >
                        View {systemDiseases.length - 3} more condition{systemDiseases.length - 3 !== 1 ? "s" : ""}
                      </Link>
                    )}
                  </div>
                </div>
              ) : (
                <div className="text-center py-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    More conditions coming soon for this system.
                  </p>
                </div>
              )}
            </Link>
          )
        })}
      </div>

      {/* Educational Section */}
      <div className="mt-16 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-3xl p-8 md:p-12">
        <div className="text-center space-y-4 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">Understanding Your Body</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Your body is an amazing machine made up of different systems that work together to keep you healthy and
            functioning. Each system has its own special job, but they all need to work as a team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Heart className="h-6 w-6 text-red-600 dark:text-red-400" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Cardiovascular System</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Like a delivery service, pumping blood with oxygen and nutrients to every part of your body.
            </p>
          </div>

          <div className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Lung className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Respiratory System</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Your breathing system that brings in fresh oxygen and removes waste gases from your body.
            </p>
          </div>

          <div className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Brain className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Nervous System</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Your body's command center that controls everything you do, think, and feel.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BodySystems
