import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Grid, List } from 'lucide-react';
import { diseases } from '../data/diseases';
import SearchBar from '../components/SearchBar';

const AllDiseases: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [severityFilter, setSeverityFilter] = useState<string>('all');
  const [commonnessFilter, setCommonnessFilter] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredDiseases = useMemo(() => {
    return diseases.filter(disease => {
      const matchesSearch = searchQuery === '' || 
        disease.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        disease.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        disease.symptoms.some(symptom => symptom.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesSeverity = severityFilter === 'all' || disease.severity === severityFilter;
      const matchesCommonness = commonnessFilter === 'all' || disease.commonness === commonnessFilter;
      
      return matchesSearch && matchesSeverity && matchesCommonness;
    });
  }, [searchQuery, severityFilter, commonnessFilter]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
          All Medical Conditions
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Browse our comprehensive collection of medical conditions with easy-to-understand explanations.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="space-y-6 mb-8">
        {/* Search */}
        <div className="max-w-2xl mx-auto">
          <SearchBar 
            onSearch={setSearchQuery}
            placeholder="Search diseases, symptoms, or categories..."
          />
        </div>

        {/* Filters and View Toggle */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Filters:</span>
            </div>
            
            <select
              value={severityFilter}
              onChange={(e) => setSeverityFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Severities</option>
              <option value="mild">Mild</option>
              <option value="moderate">Moderate</option>
              <option value="severe">Severe</option>
            </select>

            <select
              value={commonnessFilter}
              onChange={(e) => setCommonnessFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Commonness</option>
              <option value="very-common">Very Common</option>
              <option value="common">Common</option>
              <option value="uncommon">Uncommon</option>
              <option value="rare">Rare</option>
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid'
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
                  : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <Grid className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'list'
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
                  : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-600 dark:text-gray-400">
          Showing {filteredDiseases.length} of {diseases.length} conditions
        </p>
      </div>

      {/* Diseases Grid/List */}
      {filteredDiseases.length === 0 ? (
        <div className="text-center py-16">
          <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
            No conditions found
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Try adjusting your search terms or filters.
          </p>
        </div>
      ) : (
        <div className={viewMode === 'grid' 
          ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
          : 'space-y-4'
        }>
          {filteredDiseases.map((disease) => (
            <Link
              key={disease.id}
              to={`/disease/${disease.id}`}
              className={`group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 ${
                viewMode === 'grid' ? 'p-6' : 'p-6 flex items-center space-x-6'
              }`}
            >
              {viewMode === 'grid' ? (
                <>
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
                </>
              ) : (
                <>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {disease.name}
                      </h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {disease.category}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {disease.summary}
                    </p>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className={`px-3 py-1 rounded-full text-xs font-medium text-center ${
                      disease.severity === 'mild' 
                        ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                        : disease.severity === 'moderate'
                        ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300'
                        : 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300'
                    }`}>
                      {disease.severity}
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium text-center ${
                      disease.commonness === 'very-common'
                        ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`}>
                      {disease.commonness.replace('-', ' ')}
                    </div>
                  </div>
                </>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllDiseases;