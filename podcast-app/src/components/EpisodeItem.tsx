import React from 'react';
import { Play, Pause, Heart, Clock, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { EpisodeItemProps } from '../types';
import { formatDuration, formatDurationVerbose, formatRelativeDate } from '../utils';
import { usePlayerStore } from '../context/PlayerContext';
import { useLibraryStore } from '../context/LibraryContext';

const EpisodeItem: React.FC<EpisodeItemProps> = ({
  episode,
  podcast,
  showPodcastInfo = false,
  compact = false,
  className = '',
}) => {
  const { play, pause, resume, currentEpisode, isPlaying } = usePlayerStore();
  const { isFavorite, addToFavorites, removeFromFavorites } = useLibraryStore();

  const isCurrentEpisode = currentEpisode?.id === episode.id;
  const episodeIsFavorite = isFavorite(episode.id);

  const handlePlayClick = () => {
    if (isCurrentEpisode) {
      if (isPlaying) {
        pause();
      } else {
        resume();
      }
    } else {
      play(episode, podcast);
    }
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (episodeIsFavorite) {
      removeFromFavorites(episode.id);
    } else {
      addToFavorites(episode.id);
    }
  };

  if (compact) {
    return (
      <article
        className={`group flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${className}`}
      >
        <button
          onClick={handlePlayClick}
          className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
            isCurrentEpisode && isPlaying
              ? 'bg-primary-600 text-white'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-primary-100 hover:text-primary-600'
          }`}
          aria-label={isCurrentEpisode && isPlaying ? `Pause ${episode.title}` : `Play ${episode.title}`}
        >
          {isCurrentEpisode && isPlaying ? (
            <Pause className="w-4 h-4 fill-current" aria-hidden="true" />
          ) : (
            <Play className="w-4 h-4 fill-current ml-0.5" aria-hidden="true" />
          )}
        </button>

        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-gray-900 dark:text-white truncate">
            {episode.title}
          </h4>
          <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
            <span>{formatDurationVerbose(episode.duration)}</span>
            <span>•</span>
            <span>{formatRelativeDate(episode.releaseDate)}</span>
          </div>
        </div>

        <button
          onClick={handleFavoriteClick}
          className={`flex-shrink-0 p-2 rounded-full transition-colors ${
            episodeIsFavorite
              ? 'text-red-500'
              : 'text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100'
          }`}
          aria-label={episodeIsFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart className={`w-5 h-5 ${episodeIsFavorite ? 'fill-current' : ''}`} aria-hidden="true" />
        </button>
      </article>
    );
  }

  return (
    <article
      className={`group bg-white dark:bg-gray-800 rounded-xl p-4 hover:shadow-md transition-shadow ${className}`}
    >
      <div className="flex gap-4">
        {/* Thumbnail or Play Button */}
        <div className="flex-shrink-0">
          {episode.thumbnail ? (
            <div className="relative w-20 h-20 rounded-lg overflow-hidden">
              <img
                src={episode.thumbnail}
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <button
                onClick={handlePlayClick}
                className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label={isCurrentEpisode && isPlaying ? `Pause ${episode.title}` : `Play ${episode.title}`}
              >
                {isCurrentEpisode && isPlaying ? (
                  <Pause className="w-8 h-8 text-white fill-white" aria-hidden="true" />
                ) : (
                  <Play className="w-8 h-8 text-white fill-white ml-1" aria-hidden="true" />
                )}
              </button>
            </div>
          ) : (
            <button
              onClick={handlePlayClick}
              className={`w-20 h-20 rounded-lg flex items-center justify-center transition-colors ${
                isCurrentEpisode && isPlaying
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-primary-100 hover:text-primary-600'
              }`}
              aria-label={isCurrentEpisode && isPlaying ? `Pause ${episode.title}` : `Play ${episode.title}`}
            >
              {isCurrentEpisode && isPlaying ? (
                <Pause className="w-8 h-8 fill-current" aria-hidden="true" />
              ) : (
                <Play className="w-8 h-8 fill-current ml-1" aria-hidden="true" />
              )}
            </button>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {showPodcastInfo && (
            <Link
              to={`/podcast/${podcast.id}`}
              className="text-sm text-primary-600 hover:text-primary-700 font-medium"
            >
              {podcast.title}
            </Link>
          )}
          
          <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">
            <span className="text-gray-500 dark:text-gray-400 mr-2">#{episode.episodeNumber}</span>
            {episode.title}
          </h3>
          
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 line-clamp-2">
            {episode.description}
          </p>

          {/* Meta Info */}
          <div className="flex items-center gap-4 mt-3 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" aria-hidden="true" />
              <span>{formatDuration(episode.duration)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" aria-hidden="true" />
              <span>{formatRelativeDate(episode.releaseDate)}</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex-shrink-0 flex flex-col items-center gap-2">
          <button
            onClick={handleFavoriteClick}
            className={`p-2 rounded-full transition-colors ${
              episodeIsFavorite
                ? 'text-red-500 bg-red-50 dark:bg-red-900/20'
                : 'text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20'
            }`}
            aria-label={episodeIsFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            <Heart className={`w-5 h-5 ${episodeIsFavorite ? 'fill-current' : ''}`} aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default EpisodeItem;
