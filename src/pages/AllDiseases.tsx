import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Grid2x2 as Grid, List } from 'lucide-react';
import { bodySystems } from '../data/diseases';
import SearchBar from '../components/SearchBar';
import { getAllConditions } from '../services/medicalConditionsApi';

interface ConditionResult {
  name: string;
  id: string;
}

const AllDiseases: React.FC = () => {
  const [allDiseases, setAllDiseases] = useState<ConditionResult[]>([]);
  const [filteredDiseases, setFilteredDiseases] = useState<ConditionResult[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    async function loadDiseases() {
      try {
        const conditions = await getAllConditions(100);
        const results = conditions.map(condition => ({
          name: condition.name,
          id: condition.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
        }));
        setAllDiseases(results);
        setFilteredDiseases(results);
      } catch (error) {
        console.error('Error loading diseases:', error);
      } finally {
        setLoading(false);
      }
    }

    loadDiseases();
  }, []);

  useEffect(() => {
    if (searchQuery === '') {
      setFilteredDiseases(allDiseases);
    } else {
      const lowerQuery = searchQuery.toLowerCase();
      const filtered = allDiseases.filter(disease =>
        disease.name.toLowerCase().includes(lowerQuery)
      );
      setFilteredDiseases(filtered);
    }
  }, [searchQuery, allDiseases]);

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

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">View:</span>
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
          Showing {filteredDiseases.length} conditions
        </p>
      </div>

      {loading ? (
        <div className={viewMode === 'grid'
          ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
          : 'space-y-4'
        }>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 animate-pulse"
            >
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-3"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
          ))}
        </div>
      ) : filteredDiseases.length === 0 ? (
        <div className="text-center py-16">
          <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
            No conditions found
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Try adjusting your search terms.
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
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {disease.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Click to view detailed information about this condition.
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllDiseases;
