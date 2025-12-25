import React, { useMemo, useState } from 'react';
import podcasts from '../data/mockPodcasts';
import Hero from '../components/Hero';
import PodcastList from '../components/PodcastList';
import CategoryPill from '../components/CategoryPill';
import { Category } from '../types';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  const featured = podcasts[0];

  const trending = useMemo(() => podcasts.slice(0, 8), []);
  const recent = useMemo(() => podcasts.slice().reverse(), []);

  const filtered = useMemo(
    () =>
      activeCategory === 'All'
        ? podcasts
        : podcasts.filter(podcast => podcast.category.includes(activeCategory as Category)),
    [activeCategory]
  );

  return (
    <main role="main" className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-28 pt-4 lg:px-6">
      <Hero featured={featured} />

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Trending Now</h2>
          <Link to="/search" className="text-sm text-gray-300 hover:text-accent">
            View all
          </Link>
        </div>
        <PodcastList podcasts={trending} />
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Categories</h2>
          <button
            onClick={() => setActiveCategory('All')}
            className="text-sm text-gray-300 hover:text-accent"
            aria-label="Clear category filter"
          >
            Clear
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {['All', ...Object.values(Category)].map(cat => (
            <CategoryPill key={cat} category={cat} active={activeCategory === cat} onSelect={value => setActiveCategory(value as Category)} />
          ))}
        </div>
        <PodcastList podcasts={filtered.slice(0, 6)} />
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Recently Added</h2>
          <Link to="/search" className="text-sm text-gray-300 hover:text-accent">
            Discover more
          </Link>
        </div>
        <PodcastList podcasts={recent.slice(0, 6)} />
      </section>
    </main>
  );
};

export default HomePage;
