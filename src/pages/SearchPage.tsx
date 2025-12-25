import React, { useMemo, useState } from 'react';
import podcasts from '../data/mockPodcasts';
import SearchBar from '../components/SearchBar';
import FilterPanel from '../components/FilterPanel';
import SearchResults from '../components/SearchResults';
import { Category } from '../types';
import { useDebounce } from '../hooks/useDebounce';

const SearchPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<string | undefined>();
  const [duration, setDuration] = useState<string | undefined>();
  const [rating, setRating] = useState<string | undefined>();
  const [sort, setSort] = useState('relevance');
  const debouncedQuery = useDebounce(query, 250);

  const results = useMemo(() => {
    const normalizedQuery = debouncedQuery.toLowerCase().trim();
    let filtered = podcasts.filter(podcast => {
      const matchesQuery = normalizedQuery
        ? podcast.title.toLowerCase().includes(normalizedQuery) ||
          podcast.description.toLowerCase().includes(normalizedQuery) ||
          podcast.author.toLowerCase().includes(normalizedQuery)
        : true;

      const matchesCategory = category ? podcast.category.includes(category as Category) : true;
      const matchesRating = rating ? podcast.rating >= Number(rating) : true;

      const matchesDuration = (() => {
        if (!duration) return true;
        const avgDuration =
          podcast.episodes.reduce((sum, ep) => sum + ep.duration, 0) / podcast.episodes.length;
        if (duration === 'short') return avgDuration < 900;
        if (duration === 'medium') return avgDuration >= 900 && avgDuration <= 1800;
        return avgDuration > 1800;
      })();

      return matchesQuery && matchesCategory && matchesRating && matchesDuration;
    });

    if (sort === 'rating') {
      filtered = filtered.sort((a, b) => b.rating - a.rating);
    } else if (sort === 'recent') {
      filtered = filtered.sort(
        (a, b) =>
          new Date(b.episodes[0].releaseDate).getTime() - new Date(a.episodes[0].releaseDate).getTime()
      );
    } else if (sort === 'relevance' && normalizedQuery) {
      filtered = filtered.sort((a, b) => {
        const score = (value: string) =>
          value.includes(normalizedQuery) ? 2 : value.split(' ').some(word => word.startsWith(normalizedQuery)) ? 1 : 0;
        const scoreA = score(a.title.toLowerCase()) + score(a.description.toLowerCase());
        const scoreB = score(b.title.toLowerCase()) + score(b.description.toLowerCase());
        return scoreB - scoreA;
      });
    }

    return filtered;
  }, [debouncedQuery, category, duration, rating, sort]);

  return (
    <main role="main" className="mx-auto max-w-6xl px-4 pb-28 pt-24 lg:px-6">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">Search</h1>
          <p className="text-sm text-gray-300">Find podcasts by topic, host, or vibe.</p>
        </div>
        <SearchBar value={query} onChange={setQuery} className="w-full" />
        <FilterPanel
          categories={Object.values(Category)}
          selectedCategory={category}
          onCategoryChange={setCategory}
          durationFilter={duration}
          onDurationChange={setDuration}
          ratingFilter={rating}
          onRatingChange={setRating}
          sort={sort}
          onSortChange={setSort}
        />
      </div>

      <div className="mt-6">
        <SearchResults podcasts={results} query={debouncedQuery} />
      </div>
    </main>
  );
};

export default SearchPage;
