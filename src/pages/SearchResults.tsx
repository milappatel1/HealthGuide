import React, { useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, ArrowLeft } from 'lucide-react';
import { diseases } from '../data/diseases';
import SearchBar from '../components/SearchBar';

const SearchResults: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];

    const lowerQuery = query.toLowerCase();
    const results: Array<{
      disease: typeof diseases[0];
      matchType: 'name' | 'category' | 'symptom' | 'summary';
      matchedText: string;
    }> = [];

    diseases.forEach(disease => {
      // Check disease name
      if (disease.name.toLowerCase().includes(lowerQuery)) {
        results.push({
          disease,
          matchType: 'name',
          matchedText: disease.name
        });
        return;
      }

      // Check category
      if (disease.category.toLowerCase().includes(lowerQuery)) {
        results.push({
          disease,
          matchType: 'category',
          matchedText: disease.category
        });
        return;
      }

      // Check symptoms
      const matchedSymptom = disease.symptoms.find(symptom => 
        symptom.toLowerCase().includes(lowerQuery)
      );
      if (matchedSymptom) {
        results.push({
          disease,
          matchType: 'symptom',
          matchedText: matchedSymptom
        });
        return;
      }

      // Check summary
      if (disease.summary.toLowerCase().includes(lowerQuery)) {
        results.push({
          disease,
          matchType: 'summary',
          matchedText: disease.summary
        });
      }
    });

    return results;
  }, [query]);

  const getMatchTypeLabel = (matchType: string) => {
    switch (matchType) {
      case 'name': return 'Disease name';
      case 'category': return 'Category';
      case 'symptom': return 'Symptom';
      case 'summary': return 'Description';
      default: return 'Match';
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <Link
          to="/"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
        
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Search Results
        </h1>
        
        {query && (
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 break-words">
            Showing results for: <span className="font-semibold">"{query}"</span>
          </p>
        )}

        {/* Search Bar */}
        <SearchBar />
      </div>

      {/* Results */}
      {!query.trim() ? (
        <div className="text-center py-16">
          <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
            No search query provided
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 px-4">
            Please enter a search term to find health conditions, symptoms, or categories.
          </p>
        </div>
      ) : searchResults.length === 0 ? (
        <div className="text-center py-16">
          <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
            No results found
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 px-4 break-words">
            We couldn't find any conditions matching "{query}". Try:
          </p>
          <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 space-y-1 px-4">
            <p>• Checking your spelling</p>
            <p>• Using different keywords</p>
            <p>• Searching for symptoms instead of condition names</p>
            <p>• Browsing our <Link to="/diseases" className="text-blue-600 dark:text-blue-400 hover:underline">complete list of conditions</Link></p>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''}
          </p>
          
          <div className="space-y-4">
            {searchResults.map((result, index) => (
              <Link
                key={`${result.disease.id}-${index}`}
                to={`/disease/${result.disease.id}`}
                className="block bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
              >
                {/* Header section with responsive layout */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 space-y-2 sm:space-y-0">
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 min-w-0 flex-1">
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight break-words">
                      {result.disease.name}
                    </h2>
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full self-start whitespace-nowrap">
                      {getMatchTypeLabel(result.matchType)}
                    </span>
                  </div>
                  <div className="flex space-x-2 flex-shrink-0">
                    <div className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                      result.disease.severity === 'mild' 
                        ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                        : result.disease.severity === 'moderate'
                        ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300'
                        : 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300'
                    }`}>
                      {result.disease.severity}
                    </div>
                  </div>
                </div>
                
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-3">
                  {result.disease.category}
                </p>
                
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed break-words">
                  {result.disease.summary}
                </p>
                
                {result.matchType === 'symptom' && (
                  <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 break-words">
                      <span className="font-medium">Matched symptom:</span> {result.matchedText}
                    </p>
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
