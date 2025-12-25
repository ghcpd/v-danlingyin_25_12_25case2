import React from 'react';
import { useParams, Link } from 'react-router-dom';
import podcasts from '../data/mockPodcasts';
import PodcastList from '../components/PodcastList';
import EmptyState from '../components/EmptyState';

const CategoryPage: React.FC = () => {
  const { name } = useParams();
  const decoded = name ? decodeURIComponent(name) : '';
  const filtered = podcasts.filter(podcast => podcast.category.map(String).includes(decoded));

  return (
    <main role="main" className="mx-auto max-w-5xl px-4 pb-28 pt-24">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-300">Category</p>
          <h1 className="text-3xl font-bold">{decoded}</h1>
        </div>
        <Link to="/search" className="rounded-full border border-white/10 px-4 py-2 text-sm hover:border-primary">
          Back to search
        </Link>
      </div>

      <div className="mt-6">
        {filtered.length ? (
          <PodcastList podcasts={filtered} />
        ) : (
          <EmptyState title="Nothing here" description="No podcasts found for this category." />
        )}
      </div>
    </main>
  );
};

export default CategoryPage;
