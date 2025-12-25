import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Hero, PodcastCard, PodcastList, CategoryPill } from '../components';
import { 
  getFeaturedPodcast, 
  getTrendingPodcasts, 
  getRecentlyAddedPodcasts, 
  getAllCategories 
} from '../data/mockPodcasts';

const HomePage: React.FC = () => {
  const featuredPodcast = getFeaturedPodcast();
  const trendingPodcasts = getTrendingPodcasts(8);
  const recentPodcasts = getRecentlyAddedPodcasts(6);
  const categories = getAllCategories();

  return (
    <main role="main" className="min-h-screen pb-24">
      {/* Hero Section */}
      <Hero podcast={featuredPodcast} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Categories Section */}
        <section className="mb-12" aria-labelledby="categories-heading">
          <h2 
            id="categories-heading" 
            className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Browse Categories
          </h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <CategoryPill key={category} category={category} />
            ))}
          </div>
        </section>

        {/* Trending Section */}
        <section className="mb-12" aria-labelledby="trending-heading">
          <div className="flex items-center justify-between mb-6">
            <h2 
              id="trending-heading"
              className="text-2xl font-bold text-gray-900 dark:text-white"
            >
              Trending Now
            </h2>
            <Link 
              to="/search?sort=popular"
              className="flex items-center gap-1 text-primary-600 hover:text-primary-700 font-medium text-sm"
            >
              View all
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {trendingPodcasts.map((podcast) => (
              <PodcastCard key={podcast.id} podcast={podcast} />
            ))}
          </div>
        </section>

        {/* Recently Added Section */}
        <section aria-labelledby="recent-heading">
          <div className="flex items-center justify-between mb-6">
            <h2 
              id="recent-heading"
              className="text-2xl font-bold text-gray-900 dark:text-white"
            >
              Recently Added
            </h2>
            <Link 
              to="/search?sort=recent"
              className="flex items-center gap-1 text-primary-600 hover:text-primary-700 font-medium text-sm"
            >
              View all
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
          
          {/* List View for Recent */}
          <div className="space-y-4">
            {recentPodcasts.map((podcast) => (
              <Link
                key={podcast.id}
                to={`/podcast/${podcast.id}`}
                className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl hover:shadow-md transition-shadow group"
              >
                <img
                  src={podcast.coverImage}
                  alt=""
                  aria-hidden="true"
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors truncate">
                    {podcast.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {podcast.author} • {podcast.episodeCount} episodes
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-2">
                  {podcast.category.slice(0, 2).map((cat) => (
                    <span 
                      key={cat}
                      className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default HomePage;
