import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Episode, PlayerState } from '../types';

interface PlayerContextValue extends PlayerState {
  playEpisode: (episode: Episode, queue?: Episode[]) => void;
  togglePlay: () => void;
  seek: (progress: number) => void;
  setVolume: (volume: number) => void;
  playNext: () => void;
  playPrevious: () => void;
}

const PlayerContext = createContext<PlayerContextValue | undefined>(undefined);

export const PlayerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [state, setState] = useState<PlayerState>({
    queue: [],
    isPlaying: false,
    volume: 0.8,
    progress: 0
  });

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
      audioRef.current.preload = 'metadata';
    }

    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      setState(prev => ({
        ...prev,
        progress: audio.currentTime
      }));
    };

    const handleEnded = () => {
      setState(prev => ({ ...prev, isPlaying: false }));
      playNext();
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = state.volume;
    }
  }, [state.volume]);

  const playEpisode = (episode: Episode, queue: Episode[] = state.queue) => {
    if (!audioRef.current) return;
    const audio = audioRef.current;
    audio.src = episode.audioUrl;
    audio.play().catch(() => undefined);
    setState(prev => ({
      ...prev,
      currentEpisode: episode,
      queue,
      isPlaying: true,
      progress: 0
    }));
  };

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (!state.currentEpisode) return;
    if (state.isPlaying) {
      audio.pause();
      setState(prev => ({ ...prev, isPlaying: false }));
    } else {
      audio.play().catch(() => undefined);
      setState(prev => ({ ...prev, isPlaying: true }));
    }
  };

  const seek = (progress: number) => {
    const audio = audioRef.current;
    if (!audio || !state.currentEpisode) return;
    audio.currentTime = progress;
    setState(prev => ({ ...prev, progress }));
  };

  const setVolume = (volume: number) => {
    setState(prev => ({ ...prev, volume }));
  };

  const playNext = () => {
    if (!state.currentEpisode) return;
    const currentIndex = state.queue.findIndex(ep => ep.id === state.currentEpisode?.id);
    const nextEpisode = state.queue[currentIndex + 1];
    if (nextEpisode) {
      playEpisode(nextEpisode, state.queue);
    }
  };

  const playPrevious = () => {
    if (!state.currentEpisode) return;
    const currentIndex = state.queue.findIndex(ep => ep.id === state.currentEpisode?.id);
    const previousEpisode = state.queue[currentIndex - 1];
    if (previousEpisode) {
      playEpisode(previousEpisode, state.queue);
    }
  };

  const value = useMemo<PlayerContextValue>(
    () => ({
      ...state,
      playEpisode,
      togglePlay,
      seek,
      setVolume,
      playNext,
      playPrevious
    }),
    [state]
  );

  return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>;
};

export const usePlayer = () => {
  const ctx = useContext(PlayerContext);
  if (!ctx) throw new Error('usePlayer must be used within PlayerProvider');
  return ctx;
};
