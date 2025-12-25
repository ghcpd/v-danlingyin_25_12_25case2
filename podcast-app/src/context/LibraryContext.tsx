import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { LibraryStore, HistoryEntry } from '../types';

export const useLibraryStore = create<LibraryStore>()(
  persist(
    (set, get) => ({
      subscriptions: [],
      favorites: [],
      history: [],

      subscribe: (podcastId: string) => {
        set((state) => {
          if (state.subscriptions.includes(podcastId)) {
            return state;
          }
          return {
            subscriptions: [...state.subscriptions, podcastId],
          };
        });
      },

      unsubscribe: (podcastId: string) => {
        set((state) => ({
          subscriptions: state.subscriptions.filter((id) => id !== podcastId),
        }));
      },

      isSubscribed: (podcastId: string) => {
        return get().subscriptions.includes(podcastId);
      },

      addToFavorites: (episodeId: string) => {
        set((state) => {
          if (state.favorites.includes(episodeId)) {
            return state;
          }
          return {
            favorites: [...state.favorites, episodeId],
          };
        });
      },

      removeFromFavorites: (episodeId: string) => {
        set((state) => ({
          favorites: state.favorites.filter((id) => id !== episodeId),
        }));
      },

      isFavorite: (episodeId: string) => {
        return get().favorites.includes(episodeId);
      },

      addToHistory: (entry: Omit<HistoryEntry, 'lastPlayedAt'>) => {
        set((state) => {
          // Check if episode already exists in history
          const existingIndex = state.history.findIndex(
            (h) => h.episodeId === entry.episodeId
          );

          const newEntry: HistoryEntry = {
            ...entry,
            lastPlayedAt: new Date().toISOString(),
          };

          if (existingIndex !== -1) {
            // Update existing entry
            const updatedHistory = [...state.history];
            updatedHistory[existingIndex] = newEntry;
            // Move to front of array (most recent)
            updatedHistory.unshift(updatedHistory.splice(existingIndex, 1)[0]);
            return { history: updatedHistory };
          }

          // Add new entry at the beginning
          return {
            history: [newEntry, ...state.history].slice(0, 100), // Keep last 100 entries
          };
        });
      },

      getHistory: () => {
        return get().history;
      },

      clearHistory: () => {
        set({ history: [] });
      },
    }),
    {
      name: 'podcast-library-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
