import React from 'react';
import { Episode } from '../types';
import { formatDuration } from '../utils/formatDuration';
import { formatDate } from '../utils/formatDate';
import { useAudioPlayer } from '../hooks/useAudioPlayer';
import { useLibrary } from '../context/LibraryContext';
import PlayButton from './PlayButton';
import { clsx } from 'clsx';

interface EpisodeItemProps {
  episode: Episode;
  isActive?: boolean;
  queue?: Episode[];
}

const EpisodeItem: React.FC<EpisodeItemProps> = ({ episode, isActive, queue }) => {
  const { playEpisode, togglePlay, isPlaying, currentEpisode } = useAudioPlayer();
  const { favorites, toggleFavorite, addToHistory } = useLibrary();
  const isFavorite = favorites.includes(episode.id);
  const active = isActive || currentEpisode?.id === episode.id;

  const handlePlay = () => {
    if (active) {
      togglePlay();
    } else {
      playEpisode(episode, queue ?? [episode]);
      addToHistory(episode.id);
    }
  };

  return (
    <div className={clsx(
      'flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-primary/60',
      active && 'border-primary/80 bg-primary/5'
    )}
    >
      <div className="flex items-start gap-3">
        <PlayButton
          size="sm"
          isPlaying={active && isPlaying}
          onClick={handlePlay}
          label={active ? 'Pause episode' : 'Play episode'}
        />
        <div className="flex-1">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className="text-xs text-gray-400">Episode {episode.episodeNumber}</p>
              <h4 className="text-base font-semibold">{episode.title}</h4>
            </div>
            <div className="flex items-center gap-3 text-xs text-gray-300">
              <span>{formatDuration(episode.duration)}</span>
              <span className="hidden sm:inline">·</span>
              <span className="hidden sm:inline">{formatDate(episode.releaseDate)}</span>
            </div>
          </div>
          <p className="mt-2 text-sm text-gray-300 line-clamp-2">{episode.description}</p>
        </div>
        <button
          className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-200 hover:border-accent hover:text-accent"
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          onClick={() => toggleFavorite(episode.id)}
        >
          {isFavorite ? '★' : '☆'}
        </button>
      </div>
    </div>
  );
};

export default EpisodeItem;
