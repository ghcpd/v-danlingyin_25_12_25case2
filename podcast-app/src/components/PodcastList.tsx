import React from 'react';
import PodcastCard from './PodcastCard';
import { Podcast } from '../types';

interface PodcastListProps {
  podcasts: Podcast[];
  title?: string;
  emptyMessage?: string;
  columns?: 2 | 3 | 4;
  className?: string;
}

const PodcastList: React.FC<PodcastListProps> = ({
  podcasts,
  title,
  emptyMessage = 'No podcasts found',
  columns = 4,
  className = '',
}) => {
  const columnClasses = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  };

  if (podcasts.length === 0) {
    return (
      <div className={`text-center py-12 ${className}`}>
        <p className="text-gray-500 dark:text-gray-400">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <section className={className}>
      {title && (
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          {title}
        </h2>
      )}
      <div className={`grid ${columnClasses[columns]} gap-4 md:gap-6`}>
        {podcasts.map((podcast) => (
          <PodcastCard key={podcast.id} podcast={podcast} />
        ))}
      </div>
    </section>
  );
};

export default PodcastList;
