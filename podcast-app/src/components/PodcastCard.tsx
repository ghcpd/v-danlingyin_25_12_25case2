import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Star, Users, Play } from 'lucide-react';
import { PodcastCardProps } from '../types';
import { formatNumberAbbreviated, formatRating } from '../utils';
import SubscribeButton from './SubscribeButton';

const PodcastCard: React.FC<PodcastCardProps> = memo(({
  podcast,
  size = 'medium',
  showSubscribeButton = true,
  className = '',
}) => {
  const sizeClasses = {
    small: 'w-36',
    medium: 'w-full',
    large: 'w-full lg:w-80',
  };

  const imageSizes = {
    small: 'h-36',
    medium: 'h-48',
    large: 'h-56',
  };

  return (
    <article
      className={`group relative bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden ${sizeClasses[size]} ${className}`}
    >
      <Link
        to={`/podcast/${podcast.id}`}
        className="block focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-xl"
        aria-label={`View ${podcast.title} by ${podcast.author}`}
      >
        {/* Cover Image */}
        <div className={`relative ${imageSizes[size]} overflow-hidden`}>
          <img
            src={podcast.coverImage}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          {/* Play overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
              <Play className="w-6 h-6 text-primary-600 fill-primary-600 ml-1" aria-hidden="true" />
            </div>
          </div>
          {/* Category Badge */}
          {podcast.category[0] && (
            <span className="absolute top-3 left-3 px-2 py-1 bg-white/90 dark:bg-gray-800/90 text-xs font-medium text-gray-700 dark:text-gray-200 rounded-full">
              {podcast.category[0]}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 dark:text-white truncate group-hover:text-primary-600 transition-colors">
            {podcast.title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 truncate">
            {podcast.author}
          </p>
          
          {size !== 'small' && (
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 line-clamp-2">
              {podcast.description}
            </p>
          )}

          {/* Stats */}
          <div className="flex items-center gap-4 mt-3 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" aria-hidden="true" />
              <span>{formatRating(podcast.rating)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" aria-hidden="true" />
              <span>{formatNumberAbbreviated(podcast.subscribers)}</span>
            </div>
            <span>{podcast.episodeCount} eps</span>
          </div>
        </div>
      </Link>

      {/* Subscribe Button */}
      {showSubscribeButton && (
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <SubscribeButton podcastId={podcast.id} size="small" />
        </div>
      )}
    </article>
  );
});

PodcastCard.displayName = 'PodcastCard';

export default PodcastCard;
