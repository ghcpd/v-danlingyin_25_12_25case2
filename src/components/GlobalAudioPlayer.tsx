import React, { useEffect, useMemo } from 'react';
import { useAudioPlayer } from '../hooks/useAudioPlayer';
import ProgressBar from './ProgressBar';
import VolumeControl from './VolumeControl';

const GlobalAudioPlayer: React.FC = () => {
  const { currentEpisode, isPlaying, progress, volume, seek, togglePlay, playNext, playPrevious, setVolume } =
    useAudioPlayer();

  const duration = useMemo(() => currentEpisode?.duration ?? 0, [currentEpisode]);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.code === 'Space') {
        event.preventDefault();
        togglePlay();
      }
      if (event.code === 'ArrowRight') {
        playNext();
      }
      if (event.code === 'ArrowLeft') {
        playPrevious();
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [togglePlay, playNext, playPrevious]);

  if (!currentEpisode) {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/5 bg-secondary/90 px-4 py-3 text-sm text-gray-300">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <span>No episode playing. Choose one to start listening.</span>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/5 bg-secondary/95 px-4 py-3">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-3">
          <button
            className="rounded-full border border-white/10 px-3 py-2 text-sm hover:border-primary"
            onClick={playPrevious}
            aria-label="Previous episode"
          >
            ⏮
          </button>
          <button
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-soft hover:bg-primary/90"
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <button
            className="rounded-full border border-white/10 px-3 py-2 text-sm hover:border-primary"
            onClick={playNext}
            aria-label="Next episode"
          >
            ⏭
          </button>
          <div className="ml-3">
            <p className="text-sm font-semibold">{currentEpisode.title}</p>
            <p className="text-xs text-gray-300">{currentEpisode.podcastId}</p>
          </div>
        </div>
        <ProgressBar value={progress} max={duration} onChange={seek} />
        <VolumeControl value={volume} onChange={setVolume} />
      </div>
    </div>
  );
};

export default GlobalAudioPlayer;
