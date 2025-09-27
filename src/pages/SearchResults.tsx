import React, { useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, ArrowLeft } from 'lucide-react';
import { diseases } from '../data/diseases';
import SearchBar from '../components/SearchBar';

// Define the expected structure for a single disease item for better type safety
// Assuming disease now includes 'severity' and 'commonness' properties.
type Disease = typeof diseases[0] & {
  severity: 'mild' | 'moderate' | 'severe';
  commonness: 'rare' | 'uncommon' | 'common' | 'very common';
};

// Update the search results type
type SearchResult = {
  disease: Disease;
  matchType: 'name' | 'category' | 'symptom' | 'summary';
  matchedText: string;
};

const SearchResults: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];

    const lowerQuery = query.toLowerCase();
    // Enforce the new type for results array
    const results: Array<SearchResult> = [];

    // Cast 'diseases' to the expected Disease array type for safe property access
    (diseases as Disease[]).forEach(disease => {
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

  // Helper function for commonness styling
  const getCommonnessClass = (commonness: Disease['commonness']) => {
    switch (commonness) {
      case 'very common': return 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300';
      case 'common': return 'bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300';
      case 'uncommon': return 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300';
      case 'rare': return 'bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300';
      default: return 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300';
    }
  };

  // Helper function for severity styling
  const getSeverityClass = (severity: Disease['severity']) => {
    switch (severity) {
      case 'mild': return 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300';
      case 'moderate': return 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300';
      case 'severe': return 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300';
      default: return 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300';
    }
  };

  return (
    // FIX: Added 'w-full overflow-x-hidden' to ensure no horizontal scrolling outside the main content area
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
          // FIX: Added 'break-words' to prevent long queries from overflowing
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Showing results for: <span className="font-semibold break-words">"{query}"</span>
          </p>
        )}

        {/* Search Bar */}
        <SearchBar />
      </div>

      {/* Results */}
      {!query.trim() ? (
        // ... (No query UI)
        <div className="text-center py-16">
          <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
            No search query provided
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Please enter a search term to find health conditions, symptoms, or categories.
          </p>
        </div>
      ) : searchResults.length === 0 ? (
        // ... (No results UI)
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
                key={`${result.disease.id}-${index}`}
                to={`/disease/${result.disease.id}`}
                // FIX: Reduced padding for mobile
                className="block bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
              >
                {/* FIX: Use flex-wrap to allow elements to stack on small screens */}
                <div className="flex flex-wrap items-start justify-between mb-3 gap-2">
                  <div className="flex items-center space-x-3 min-w-0 flex-grow">
                    {/* FIX: Added 'truncate' and 'min-w-0' to prevent long disease names from pushing tags off-screen */}
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate min-w-0">
                      {result.disease.name}
                    </h2>
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full flex-shrink-0">
                      {getMatchTypeLabel(result.matchType)}
                    </span>
                  </div>

                  {/* Commonness and Severity Tags - FIX: Grouped and ensured they don't grow */}
                  <div className="flex space-x-2 flex-shrink-0">
                    {/* Commonness Tag */}
                    <div className={`px-3 py-1 rounded-full text-xs font-medium uppercase flex-shrink-0 ${getCommonnessClass(result.disease.commonness as Disease['commonness'])}`}>
                      {result.disease.commonness}
                    </div>
                    {/* Severity Tag */}
                    <div className={`px-3 py-1 rounded-full text-xs font-medium uppercase flex-shrink-0 ${getSeverityClass(result.disease.severity as Disease['severity'])}`}>
                      {result.disease.severity}
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  {result.disease.category}
                </p>
                
                {/* FIX: Added 'line-clamp-3' (requires line-clamp plugin) for summary to keep card size consistent on mobile */}
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
                  {result.disease.summary}
                </p>
                
                {result.matchType === 'symptom' && (
                  <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg overflow-x-auto">
                    <p className="text-sm text-gray-600 dark:text-gray-300">
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
