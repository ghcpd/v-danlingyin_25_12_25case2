import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Tag } from 'lucide-react';
import { PodcastCard, EmptyState } from '../components';
import { mockPodcasts } from '../data/mockPodcasts';
import { Category } from '../types';
import { kebabToTitle } from '../utils';

// Category descriptions
const categoryDescriptions: Record<string, string> = {
  technology: 'Explore the latest in tech, from AI breakthroughs to startup stories and digital innovation.',
  business: 'Insights from entrepreneurs, CEOs, and thought leaders on building successful businesses.',
  'true-crime': 'Dive into gripping investigations, cold cases, and the psychology behind criminal minds.',
  comedy: 'Laugh out loud with stand-up, improv, and comedic commentary on life and culture.',
  education: 'Learn something new every day with engaging content on diverse topics.',
  'health-fitness': 'Transform your body and mind with expert advice on fitness, nutrition, and wellness.',
  news: 'Stay informed with breaking news, analysis, and in-depth reporting on current events.',
  sports: 'Get your game on with coverage, analysis, and interviews from the world of sports.',
  science: 'Unravel the mysteries of the universe with accessible explanations of complex concepts.',
  history: 'Journey through time with stories that shaped our world and continue to influence today.',
};

const CategoryPage: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  
  const categoryName = name ? kebabToTitle(name) : '';
  const description = name ? categoryDescriptions[name.toLowerCase()] || '' : '';

  // Find matching category enum value
  const categoryEnum = useMemo(() => {
    return Object.values(Category).find(
      (cat) => cat.toLowerCase().replace(/[^a-z]/g, '') === categoryName.toLowerCase().replace(/[^a-z]/g, '')
    );
  }, [categoryName]);

  // Filter podcasts by category
  const podcasts = useMemo(() => {
    if (!categoryEnum) return [];
    return mockPodcasts.filter((podcast) =>
      podcast.category.includes(categoryEnum)
    );
  }, [categoryEnum]);

  if (!categoryEnum) {
    return (
      <main role="main" className="min-h-screen pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <EmptyState
            title="Category Not Found"
            description="The category you're looking for doesn't exist."
            action={{
              label: 'Go to Discover',
              onClick: () => window.location.href = '/',
            }}
          />
        </div>
      </main>
    );
  }

  return (
    <main role="main" className="min-h-screen pb-24">
      {/* Header */}
      <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back Link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Back to Discover</span>
          </Link>

          {/* Category Info */}
          <div className="flex items-center gap-4 mb-4">
            <div className="p-4 bg-primary-100 dark:bg-primary-900/30 rounded-xl">
              <Tag className="w-8 h-8 text-primary-600 dark:text-primary-400" aria-hidden="true" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                {categoryEnum}
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                {podcasts.length} {podcasts.length === 1 ? 'podcast' : 'podcasts'}
              </p>
            </div>
          </div>

          {description && (
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Podcasts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {podcasts.length === 0 ? (
          <EmptyState
            title="No Podcasts Found"
            description={`We don't have any ${categoryEnum} podcasts yet. Check back later!`}
            icon={<Tag className="w-16 h-16" />}
            action={{
              label: 'Browse All Podcasts',
              onClick: () => window.location.href = '/search',
            }}
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {podcasts.map((podcast) => (
              <PodcastCard key={podcast.id} podcast={podcast} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default CategoryPage;
