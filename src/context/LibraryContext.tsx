import React, { createContext, useContext, useMemo } from 'react';
import { LibraryState } from '../types';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface LibraryContextValue extends LibraryState {
  toggleSubscribe: (podcastId: string) => void;
  toggleFavorite: (episodeId: string) => void;
  addToHistory: (episodeId: string) => void;
}

const LibraryContext = createContext<LibraryContextValue | undefined>(undefined);

export const LibraryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useLocalStorage<LibraryState>('podcast-library', {
    subscriptions: [],
    favorites: [],
    history: []
  });

  const toggleSubscribe = (podcastId: string) => {
    setState(prev => ({
      ...prev,
      subscriptions: prev.subscriptions.includes(podcastId)
        ? prev.subscriptions.filter(id => id !== podcastId)
        : [...prev.subscriptions, podcastId]
    }));
  };

  const toggleFavorite = (episodeId: string) => {
    setState(prev => ({
      ...prev,
      favorites: prev.favorites.includes(episodeId)
        ? prev.favorites.filter(id => id !== episodeId)
        : [...prev.favorites, episodeId]
    }));
  };

  const addToHistory = (episodeId: string) => {
    setState(prev => ({
      ...prev,
      history: [episodeId, ...prev.history.filter(id => id !== episodeId)].slice(0, 100)
    }));
  };

  const value = useMemo(
    () => ({
      ...state,
      toggleSubscribe,
      toggleFavorite,
      addToHistory
    }),
    [state]
  );

  return <LibraryContext.Provider value={value}>{children}</LibraryContext.Provider>;
};

export const useLibrary = () => {
  const ctx = useContext(LibraryContext);
  if (!ctx) throw new Error('useLibrary must be used within LibraryProvider');
  return ctx;
};
