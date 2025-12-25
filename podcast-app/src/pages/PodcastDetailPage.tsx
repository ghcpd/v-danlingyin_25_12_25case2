import React, { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, Users, Calendar, ListOrdered, TrendingUp } from 'lucide-react';
import { 
  EpisodeItem, 
  SubscribeButton, 
  EmptyState,
  CategoryPill 
} from '../components';
import { getPodcastById, getEpisodesByPodcastId } from '../data/mockPodcasts';
import { formatNumberAbbreviated, formatRating, formatDate } from '../utils';
import { Category } from '../types';

type SortType = 'latest' | 'oldest' | 'popular';

const PodcastDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [sortBy, setSortBy] = useState<SortType>('latest');

  const podcast = id ? getPodcastById(id) : undefined;
  const episodes = useMemo(() => {
    if (!id) return [];
    const eps = getEpisodesByPodcastId(id);
    
    switch (sortBy) {
      case 'oldest':
        return [...eps].sort((a, b) => a.episodeNumber - b.episodeNumber);
      case 'popular':
        return [...eps].sort((a, b) => b.duration - a.duration); // Using duration as proxy for popularity
      case 'latest':
      default:
        return eps;
    }
  }, [id, sortBy]);

  if (!podcast) {
    return (
      <main role="main" className="min-h-screen pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <EmptyState
            title="Podcast Not Found"
            description="The podcast you're looking for doesn't exist or has been removed."
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
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          <span>Back to Discover</span>
        </Link>
      </div>

      {/* Podcast Header */}
      <header className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Cover Image */}
            <img
              src={podcast.coverImage}
              alt={`${podcast.title} cover`}
              className="w-48 h-48 md:w-64 md:h-64 rounded-2xl shadow-xl object-cover mx-auto md:mx-0"
            />

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-3">
                {podcast.category.map((cat) => (
                  <CategoryPill key={cat} category={cat as Category} />
                ))}
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {podcast.title}
              </h1>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                by {podcast.author}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap items-center gap-6 justify-center md:justify-start mb-6 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-1.5">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" aria-hidden="true" />
                  <span className="font-medium text-gray-900 dark:text-white">
                    {formatRating(podcast.rating)}
                  </span>
                  <span>rating</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-5 h-5" aria-hidden="true" />
                  <span className="font-medium text-gray-900 dark:text-white">
                    {formatNumberAbbreviated(podcast.subscribers)}
                  </span>
                  <span>subscribers</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-5 h-5" aria-hidden="true" />
                  <span>{podcast.episodeCount} episodes</span>
                </div>
              </div>

              {/* Subscribe Button */}
              <SubscribeButton podcastId={podcast.id} size="large" />
            </div>
          </div>

          {/* Description */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              About this podcast
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
              {podcast.description}
            </p>
          </div>
        </div>
      </header>

      {/* Episodes List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            All Episodes ({episodes.length})
          </h2>

          {/* Sort Options */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500 dark:text-gray-400">Sort by:</span>
            <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
              <button
                onClick={() => setSortBy('latest')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  sortBy === 'latest'
                    ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <ListOrdered className="w-4 h-4" aria-hidden="true" />
                Latest
              </button>
              <button
                onClick={() => setSortBy('oldest')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  sortBy === 'oldest'
                    ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Oldest
              </button>
              <button
                onClick={() => setSortBy('popular')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  sortBy === 'popular'
                    ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <TrendingUp className="w-4 h-4" aria-hidden="true" />
                Popular
              </button>
            </div>
          </div>
        </div>

        {/* Episodes */}
        {episodes.length === 0 ? (
          <EmptyState
            title="No Episodes Yet"
            description="This podcast doesn't have any episodes yet. Check back later!"
          />
        ) : (
          <div className="space-y-4">
            {episodes.map((episode) => (
              <EpisodeItem
                key={episode.id}
                episode={episode}
                podcast={podcast}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default PodcastDetailPage;
