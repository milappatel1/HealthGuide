import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, ArrowLeft } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import { searchConditions } from '../services/medicalConditionsApi';
import type { Disease } from '../types/Disease';

interface ConditionResult {
  name: string;
  id: string;
}

const SearchResults: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchResults, setSearchResults] = useState<ConditionResult[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function performSearch() {
      if (!query.trim()) {
        setSearchResults([]);
        return;
      }

      setLoading(true);
      try {
        const conditions = await searchConditions(query);
        const results = conditions.map(condition => ({
          name: condition.name,
          id: condition.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
        }));
        setSearchResults(results);
      } catch (error) {
        console.error('Error searching conditions:', error);
      } finally {
        setLoading(false);
      }
    }

    performSearch();
  }, [query]);


  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full overflow-x-hidden">
      {/* Header */}
      <div className="mb-8">
        <Link
          to="/"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
        
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Search Results
        </h1>
        
        {query && (
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Showing results for: <span className="font-semibold break-words">"{query}"</span>
          </p>
        )}

        {/* Search Bar */}
        <SearchBar />
      </div>

      {!query.trim() ? (
        <div className="text-center py-16">
          <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
            No search query provided
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Please enter a search term to find health conditions, symptoms, or categories.
          </p>
        </div>
      ) : loading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 dark:border-gray-700 animate-pulse"
            >
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-3 w-2/3"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
            </div>
          ))}
        </div>
      ) : searchResults.length === 0 ? (
        <div className="text-center py-16">
          <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
            No results found
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            We couldn't find any conditions matching "{query}". Try:
          </p>
          <div className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
            <p>• Checking your spelling</p>
            <p>• Using different keywords</p>
            <p>• Searching for symptoms instead of condition names</p>
            <p>• Browsing our <Link to="/diseases" className="text-blue-600 dark:text-blue-400 hover:underline">complete list of conditions</Link></p>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <p className="text-gray-600 dark:text-gray-400">
            Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''}
          </p>

          <div className="space-y-4">
            {searchResults.map((result, index) => (
              <Link
                key={`${result.id}-${index}`}
                to={`/disease/${result.id}`}
                className="block bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
              >
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                  {result.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Click to view detailed information about this condition.
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
