import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { PlayerStore, Episode, Podcast, PlaybackSpeed } from '../types';

const initialState = {
  currentEpisode: null,
  currentPodcast: null,
  isPlaying: false,
  currentTime: 0,
  duration: 0,
  volume: 1,
  isMuted: false,
  playbackSpeed: PlaybackSpeed.Normal,
  isExpanded: false,
  queue: [] as Episode[],
};

export const usePlayerStore = create<PlayerStore>()(
  persist(
    (set, get) => ({
      ...initialState,

      play: (episode: Episode, podcast: Podcast) => {
        set({
          currentEpisode: episode,
          currentPodcast: podcast,
          isPlaying: true,
          currentTime: 0,
          duration: episode.duration,
        });
      },

      pause: () => {
        set({ isPlaying: false });
      },

      resume: () => {
        set({ isPlaying: true });
      },

      stop: () => {
        set({
          ...initialState,
          volume: get().volume,
          isMuted: get().isMuted,
          playbackSpeed: get().playbackSpeed,
          queue: get().queue,
        });
      },

      seek: (time: number) => {
        const { duration } = get();
        const clampedTime = Math.max(0, Math.min(time, duration));
        set({ currentTime: clampedTime });
      },

      setVolume: (volume: number) => {
        const clampedVolume = Math.max(0, Math.min(1, volume));
        set({ volume: clampedVolume, isMuted: clampedVolume === 0 });
      },

      toggleMute: () => {
        set((state) => ({ isMuted: !state.isMuted }));
      },

      setPlaybackSpeed: (speed: PlaybackSpeed) => {
        set({ playbackSpeed: speed });
      },

      toggleExpanded: () => {
        set((state) => ({ isExpanded: !state.isExpanded }));
      },

      skipForward: (seconds: number = 15) => {
        const { currentTime, duration } = get();
        const newTime = Math.min(currentTime + seconds, duration);
        set({ currentTime: newTime });
      },

      skipBackward: (seconds: number = 15) => {
        const { currentTime } = get();
        const newTime = Math.max(currentTime - seconds, 0);
        set({ currentTime: newTime });
      },

      playNext: () => {
        const { queue, currentPodcast } = get();
        if (queue.length > 0) {
          const nextEpisode = queue[0];
          const remainingQueue = queue.slice(1);
          set({
            currentEpisode: nextEpisode,
            queue: remainingQueue,
            currentTime: 0,
            isPlaying: true,
          });
          // Keep current podcast if same podcast ID
          if (currentPodcast && nextEpisode.podcastId !== currentPodcast.id) {
            // Would need to fetch podcast data - for now keep current
          }
        }
      },

      playPrevious: () => {
        const { currentTime } = get();
        // If more than 3 seconds in, restart current episode
        // Otherwise, this would typically go to previous in history
        if (currentTime > 3) {
          set({ currentTime: 0 });
        }
      },

      addToQueue: (episode: Episode) => {
        set((state) => ({
          queue: [...state.queue, episode],
        }));
      },

      removeFromQueue: (episodeId: string) => {
        set((state) => ({
          queue: state.queue.filter((ep) => ep.id !== episodeId),
        }));
      },

      clearQueue: () => {
        set({ queue: [] });
      },

      updateTime: (time: number) => {
        set({ currentTime: time });
      },

      setDuration: (duration: number) => {
        set({ duration });
      },
    }),
    {
      name: 'podcast-player-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        volume: state.volume,
        isMuted: state.isMuted,
        playbackSpeed: state.playbackSpeed,
        queue: state.queue,
      }),
    }
  )
);
