import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  ChevronUp, 
  ChevronDown,
  X,
  Gauge
} from 'lucide-react';
import { usePlayerStore } from '../context/PlayerContext';
import { useLibraryStore } from '../context/LibraryContext';
import { formatDuration } from '../utils';
import ProgressBar from './ProgressBar';
import VolumeControl from './VolumeControl';
import { PlaybackSpeed } from '../types';

const GlobalAudioPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  
  const {
    currentEpisode,
    currentPodcast,
    isPlaying,
    currentTime,
    duration,
    volume,
    isMuted,
    playbackSpeed,
    isExpanded,
    pause,
    resume,
    stop,
    setVolume,
    toggleMute,
    setPlaybackSpeed,
    toggleExpanded,
    updateTime,
    setDuration,
  } = usePlayerStore();

  const { addToHistory } = useLibraryStore();

  // Audio element effects
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => updateTime(audio.currentTime);
    const handleDurationChange = () => setDuration(audio.duration || 0);
    const handleEnded = () => {
      if (currentEpisode && currentPodcast) {
        addToHistory({
          episodeId: currentEpisode.id,
          podcastId: currentPodcast.id,
          progress: audio.duration,
          completed: true,
        });
      }
      pause();
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('durationchange', handleDurationChange);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('durationchange', handleDurationChange);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [updateTime, setDuration, pause, currentEpisode, currentPodcast, addToHistory]);

  // Handle source changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !currentEpisode) return;

    if (audio.src !== currentEpisode.audioUrl) {
      audio.src = currentEpisode.audioUrl;
      audio.load();
    }
  }, [currentEpisode]);

  // Handle play/pause
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch(console.error);
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  // Handle volume
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  // Handle playback speed
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.playbackRate = playbackSpeed;
    }
  }, [playbackSpeed]);

  // Save progress periodically
  useEffect(() => {
    if (!currentEpisode || !currentPodcast || currentTime < 5) return;
    
    const timer = setInterval(() => {
      addToHistory({
        episodeId: currentEpisode.id,
        podcastId: currentPodcast.id,
        progress: currentTime,
        completed: false,
      });
    }, 30000); // Save every 30 seconds

    return () => clearInterval(timer);
  }, [currentEpisode, currentPodcast, currentTime, addToHistory]);

  const handleSeek = (time: number) => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = time;
      updateTime(time);
    }
  };

  const handleSkipForward = () => {
    const audio = audioRef.current;
    if (audio) {
      const newTime = Math.min(audio.currentTime + 15, audio.duration);
      audio.currentTime = newTime;
      updateTime(newTime);
    }
  };

  const handleSkipBackward = () => {
    const audio = audioRef.current;
    if (audio) {
      const newTime = Math.max(audio.currentTime - 15, 0);
      audio.currentTime = newTime;
      updateTime(newTime);
    }
  };

  const handleClose = () => {
    stop();
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  };

  const playbackSpeedOptions: PlaybackSpeed[] = [
    PlaybackSpeed.Slow,
    PlaybackSpeed.Normal,
    PlaybackSpeed.Fast,
    PlaybackSpeed.VeryFast,
  ];

  const cyclePlaybackSpeed = () => {
    const currentIndex = playbackSpeedOptions.indexOf(playbackSpeed);
    const nextIndex = (currentIndex + 1) % playbackSpeedOptions.length;
    setPlaybackSpeed(playbackSpeedOptions[nextIndex]);
  };

  // Don't render if no episode is playing
  if (!currentEpisode || !currentPodcast) {
    return <audio ref={audioRef} className="hidden" />;
  }

  return (
    <>
      <audio ref={audioRef} className="hidden" preload="metadata" />
      
      <div 
        className={`fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-lg transition-all duration-300 ${
          isExpanded ? 'h-auto' : ''
        }`}
        role="region"
        aria-label="Audio player"
      >
        {/* Expanded View */}
        {isExpanded && (
          <div className="max-w-7xl mx-auto px-4 py-6 animate-fade-in">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              {/* Cover Art */}
              <Link to={`/podcast/${currentPodcast.id}`}>
                <img
                  src={currentPodcast.coverImage}
                  alt={`${currentPodcast.title} cover`}
                  className="w-48 h-48 rounded-xl shadow-lg object-cover"
                />
              </Link>

              {/* Info & Controls */}
              <div className="flex-1 text-center md:text-left">
                <Link 
                  to={`/podcast/${currentPodcast.id}`}
                  className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                >
                  {currentPodcast.title}
                </Link>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1">
                  {currentEpisode.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
                  {currentEpisode.description}
                </p>

                {/* Large Progress Bar */}
                <div className="mt-6">
                  <ProgressBar
                    currentTime={currentTime}
                    duration={duration || currentEpisode.duration}
                    onSeek={handleSeek}
                  />
                </div>

                {/* Controls */}
                <div className="flex items-center justify-center md:justify-start gap-4 mt-4">
                  <button
                    onClick={cyclePlaybackSpeed}
                    className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    aria-label={`Playback speed: ${playbackSpeed}x`}
                  >
                    <Gauge className="w-4 h-4" aria-hidden="true" />
                    <span>{playbackSpeed}x</span>
                  </button>

                  <button
                    onClick={handleSkipBackward}
                    className="p-3 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    aria-label="Skip back 15 seconds"
                  >
                    <SkipBack className="w-6 h-6" aria-hidden="true" />
                  </button>

                  <button
                    onClick={isPlaying ? pause : resume}
                    className="p-4 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/30"
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? (
                      <Pause className="w-8 h-8 fill-current" aria-hidden="true" />
                    ) : (
                      <Play className="w-8 h-8 fill-current ml-1" aria-hidden="true" />
                    )}
                  </button>

                  <button
                    onClick={handleSkipForward}
                    className="p-3 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    aria-label="Skip forward 15 seconds"
                  >
                    <SkipForward className="w-6 h-6" aria-hidden="true" />
                  </button>

                  <VolumeControl
                    volume={volume}
                    isMuted={isMuted}
                    onVolumeChange={setVolume}
                    onToggleMute={toggleMute}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Compact View */}
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-4">
            {/* Cover & Info */}
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <Link to={`/podcast/${currentPodcast.id}`} className="flex-shrink-0">
                <img
                  src={currentPodcast.coverImage}
                  alt=""
                  aria-hidden="true"
                  className="w-12 h-12 rounded-lg object-cover"
                />
              </Link>
              <div className="min-w-0">
                <h4 className="font-medium text-gray-900 dark:text-white truncate text-sm">
                  {currentEpisode.title}
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                  {currentPodcast.title}
                </p>
              </div>
            </div>

            {/* Mini Controls */}
            <div className="flex items-center gap-2">
              {/* Progress Bar - Hidden on small screens */}
              <div className="hidden md:block w-48 lg:w-80">
                <ProgressBar
                  currentTime={currentTime}
                  duration={duration || currentEpisode.duration}
                  onSeek={handleSeek}
                />
              </div>

              <button
                onClick={handleSkipBackward}
                className="hidden sm:block p-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Skip back 15 seconds"
              >
                <SkipBack className="w-5 h-5" aria-hidden="true" />
              </button>

              <button
                onClick={isPlaying ? pause : resume}
                className="p-2.5 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 fill-current" aria-hidden="true" />
                ) : (
                  <Play className="w-5 h-5 fill-current ml-0.5" aria-hidden="true" />
                )}
              </button>

              <button
                onClick={handleSkipForward}
                className="hidden sm:block p-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Skip forward 15 seconds"
              >
                <SkipForward className="w-5 h-5" aria-hidden="true" />
              </button>

              {/* Volume Control - Hidden on mobile */}
              <div className="hidden lg:block">
                <VolumeControl
                  volume={volume}
                  isMuted={isMuted}
                  onVolumeChange={setVolume}
                  onToggleMute={toggleMute}
                />
              </div>

              {/* Expand/Collapse */}
              <button
                onClick={toggleExpanded}
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label={isExpanded ? 'Collapse player' : 'Expand player'}
                aria-expanded={isExpanded}
              >
                {isExpanded ? (
                  <ChevronDown className="w-5 h-5" aria-hidden="true" />
                ) : (
                  <ChevronUp className="w-5 h-5" aria-hidden="true" />
                )}
              </button>

              {/* Close */}
              <button
                onClick={handleClose}
                className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Close player"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Mobile Progress Bar */}
          <div className="md:hidden mt-2">
            <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
              <span>{formatDuration(currentTime)}</span>
              <div 
                className="flex-1 h-1 bg-gray-200 dark:bg-gray-700 rounded-full cursor-pointer"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const percent = (e.clientX - rect.left) / rect.width;
                  handleSeek(percent * (duration || currentEpisode.duration));
                }}
              >
                <div 
                  className="h-full bg-primary-600 rounded-full"
                  style={{ width: `${(currentTime / (duration || currentEpisode.duration)) * 100}%` }}
                />
              </div>
              <span>{formatDuration(duration || currentEpisode.duration)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content from being hidden behind player */}
      <div className={`h-${isExpanded ? '80' : '24'} transition-all duration-300`} />
    </>
  );
};

export default GlobalAudioPlayer;
