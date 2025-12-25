import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search } from 'lucide-react';
import { SearchBar, FilterPanel, PodcastCard, EmptyState } from '../components';
import { useDebounce } from '../hooks';
import { mockPodcasts } from '../data/mockPodcasts';
import { SearchFilters, SortOption, Category } from '../types';

const SearchPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const initialQuery = searchParams.get('q') || '';
  const initialSort = (searchParams.get('sort') as SortOption) || SortOption.Relevance;

  const [query, setQuery] = useState(initialQuery);
  const [filters, setFilters] = useState<SearchFilters>({
    query: initialQuery,
    categories: [],
    sortBy: initialSort,
  });

  const debouncedQuery = useDebounce(query, 300);

  // Update URL when query changes
  React.useEffect(() => {
    if (debouncedQuery) {
      searchParams.set('q', debouncedQuery);
    } else {
      searchParams.delete('q');
    }
    setSearchParams(searchParams, { replace: true });
  }, [debouncedQuery, searchParams, setSearchParams]);

  // Filter and sort podcasts
  const filteredPodcasts = useMemo(() => {
    let results = [...mockPodcasts];

    // Filter by query
    if (debouncedQuery) {
      const lowerQuery = debouncedQuery.toLowerCase();
      results = results.filter(
        (podcast) =>
          podcast.title.toLowerCase().includes(lowerQuery) ||
          podcast.author.toLowerCase().includes(lowerQuery) ||
          podcast.description.toLowerCase().includes(lowerQuery) ||
          podcast.category.some((cat) => cat.toLowerCase().includes(lowerQuery))
      );
    }

    // Filter by categories
    if (filters.categories.length > 0) {
      results = results.filter((podcast) =>
        podcast.category.some((cat) => filters.categories.includes(cat as Category))
      );
    }

    // Filter by rating
    if (filters.minRating !== undefined) {
      results = results.filter((podcast) => podcast.rating >= filters.minRating!);
    }

    // Sort results
    switch (filters.sortBy) {
      case SortOption.Rating:
        results.sort((a, b) => b.rating - a.rating);
        break;
      case SortOption.Recent:
        results.sort((a, b) => 
          new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
        );
        break;
      case SortOption.Popular:
        results.sort((a, b) => b.subscribers - a.subscribers);
        break;
      case SortOption.Relevance:
      default:
        // Keep original order (or could implement relevance scoring)
        break;
    }

    return results;
  }, [debouncedQuery, filters]);

  const handleQueryChange = (newQuery: string) => {
    setQuery(newQuery);
    setFilters((prev) => ({ ...prev, query: newQuery }));
  };

  return (
    <main role="main" className="min-h-screen pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Search Podcasts
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Discover your next favorite podcast
          </p>
        </div>

        {/* Search Bar */}
        <SearchBar
          value={query}
          onChange={handleQueryChange}
          placeholder="Search by title, author, or category..."
          className="mb-6"
        />

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
          <aside className="lg:w-80 flex-shrink-0">
            <FilterPanel
              filters={filters}
              onFiltersChange={setFilters}
            />
          </aside>

          {/* Results */}
          <section className="flex-1" aria-label="Search results">
            {/* Results count */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600 dark:text-gray-400">
                {filteredPodcasts.length === 0 ? (
                  'No results found'
                ) : (
                  <>
                    Showing <span className="font-medium text-gray-900 dark:text-white">
                      {filteredPodcasts.length}
                    </span> {filteredPodcasts.length === 1 ? 'result' : 'results'}
                    {debouncedQuery && (
                      <> for "<span className="font-medium text-gray-900 dark:text-white">
                        {debouncedQuery}
                      </span>"</>
                    )}
                  </>
                )}
              </p>
            </div>

            {/* Results Grid */}
            {filteredPodcasts.length === 0 ? (
              <EmptyState
                title="No podcasts found"
                description={
                  debouncedQuery
                    ? `We couldn't find any podcasts matching "${debouncedQuery}". Try adjusting your search or filters.`
                    : 'Try searching for a podcast or adjusting your filters.'
                }
                icon={<Search className="w-16 h-16" />}
                action={{
                  label: 'Clear filters',
                  onClick: () => {
                    setQuery('');
                    setFilters({
                      query: '',
                      categories: [],
                      sortBy: SortOption.Relevance,
                    });
                  },
                }}
              />
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
                {filteredPodcasts.map((podcast) => (
                  <PodcastCard key={podcast.id} podcast={podcast} />
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
};

export default SearchPage;
