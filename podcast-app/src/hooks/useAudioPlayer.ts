import { useRef, useCallback, useEffect } from 'react';
import { usePlayerStore } from '../context/PlayerContext';
import { Episode, Podcast, PlaybackSpeed } from '../types';

/**
 * Custom hook for managing audio playback
 * Provides a clean interface to interact with the audio player
 */
export function useAudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  const {
    currentEpisode,
    currentPodcast,
    isPlaying,
    currentTime,
    duration,
    volume,
    isMuted,
    playbackSpeed,
    queue,
    play,
    pause,
    resume,
    stop,
    seek,
    setVolume,
    toggleMute,
    setPlaybackSpeed,
    skipForward,
    skipBackward,
    playNext,
    playPrevious,
    addToQueue,
    removeFromQueue,
    clearQueue,
    updateTime,
    setDuration,
  } = usePlayerStore();

  // Initialize audio element
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
      audioRef.current.preload = 'metadata';
    }

    const audio = audioRef.current;

    // Event listeners
    const handleTimeUpdate = () => {
      updateTime(audio.currentTime);
    };

    const handleDurationChange = () => {
      setDuration(audio.duration);
    };

    const handleEnded = () => {
      if (queue.length > 0) {
        playNext();
      } else {
        pause();
      }
    };

    const handleError = (e: Event) => {
      console.error('Audio error:', e);
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('durationchange', handleDurationChange);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('durationchange', handleDurationChange);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
    };
  }, [updateTime, setDuration, queue, playNext, pause]);

  // Handle play state changes
  useEffect(() => {
    if (audioRef.current && currentEpisode) {
      if (audioRef.current.src !== currentEpisode.audioUrl) {
        audioRef.current.src = currentEpisode.audioUrl;
        audioRef.current.load();
      }

      if (isPlaying) {
        audioRef.current.play().catch(console.error);
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentEpisode]);

  // Handle volume changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  // Handle playback speed changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = playbackSpeed;
    }
  }, [playbackSpeed]);

  // Handle seek
  const handleSeek = useCallback((time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      seek(time);
    }
  }, [seek]);

  // Play episode
  const playEpisode = useCallback((episode: Episode, podcast: Podcast) => {
    if (audioRef.current) {
      audioRef.current.src = episode.audioUrl;
      audioRef.current.load();
      play(episode, podcast);
      audioRef.current.play().catch(console.error);
    }
  }, [play]);

  // Skip forward/backward
  const handleSkipForward = useCallback((seconds: number = 15) => {
    if (audioRef.current) {
      const newTime = Math.min(audioRef.current.currentTime + seconds, audioRef.current.duration);
      audioRef.current.currentTime = newTime;
      skipForward(seconds);
    }
  }, [skipForward]);

  const handleSkipBackward = useCallback((seconds: number = 15) => {
    if (audioRef.current) {
      const newTime = Math.max(audioRef.current.currentTime - seconds, 0);
      audioRef.current.currentTime = newTime;
      skipBackward(seconds);
    }
  }, [skipBackward]);

  return {
    // State
    currentEpisode,
    currentPodcast,
    isPlaying,
    currentTime,
    duration,
    volume,
    isMuted,
    playbackSpeed,
    queue,
    
    // Actions
    play: playEpisode,
    pause,
    resume,
    stop,
    seek: handleSeek,
    setVolume,
    toggleMute,
    setPlaybackSpeed: (speed: PlaybackSpeed) => setPlaybackSpeed(speed),
    skipForward: handleSkipForward,
    skipBackward: handleSkipBackward,
    playNext,
    playPrevious,
    addToQueue,
    removeFromQueue,
    clearQueue,
    
    // Audio ref for advanced use
    audioRef,
  };
}

export default useAudioPlayer;
