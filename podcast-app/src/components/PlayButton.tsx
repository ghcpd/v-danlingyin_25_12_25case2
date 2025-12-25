import React from 'react';
import { Play, Pause } from 'lucide-react';
import { PlayButtonProps } from '../types';
import { usePlayerStore } from '../context/PlayerContext';

const PlayButton: React.FC<PlayButtonProps> = ({
  episode,
  podcast,
  size = 'medium',
  className = '',
}) => {
  const { play, pause, resume, currentEpisode, isPlaying } = usePlayerStore();

  const isCurrentEpisode = currentEpisode?.id === episode.id;
  const isCurrentlyPlaying = isCurrentEpisode && isPlaying;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
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

  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16',
  };

  const iconSizes = {
    small: 'w-4 h-4',
    medium: 'w-5 h-5',
    large: 'w-7 h-7',
  };

  return (
    <button
      onClick={handleClick}
      className={`
        ${sizeClasses[size]}
        rounded-full flex items-center justify-center
        transition-all duration-200
        ${isCurrentlyPlaying
          ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30'
          : 'bg-primary-600 text-white hover:bg-primary-700 hover:scale-105'
        }
        focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
        ${className}
      `}
      aria-label={isCurrentlyPlaying ? `Pause ${episode.title}` : `Play ${episode.title}`}
    >
      {isCurrentlyPlaying ? (
        <Pause className={`${iconSizes[size]} fill-current`} aria-hidden="true" />
      ) : (
        <Play className={`${iconSizes[size]} fill-current ml-0.5`} aria-hidden="true" />
      )}
    </button>
  );
};

export default PlayButton;
