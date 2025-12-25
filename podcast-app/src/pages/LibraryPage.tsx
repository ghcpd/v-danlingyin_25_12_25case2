import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Library, Heart, Clock, Trash2 } from 'lucide-react';
import { LibraryTabs, PodcastCard, EpisodeItem, EmptyState } from '../components';
import { useLibraryStore } from '../context/LibraryContext';
import { mockPodcasts, mockEpisodes, getPodcastById } from '../data/mockPodcasts';
import { LibraryTab } from '../types';
import { formatRelativeDate } from '../utils';

const LibraryPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<LibraryTab>('subscribed');
  
  const { 
    subscriptions, 
    favorites, 
    history, 
    clearHistory 
  } = useLibraryStore();

  // Get subscribed podcasts
  const subscribedPodcasts = useMemo(() => {
    return mockPodcasts.filter((podcast) => subscriptions.includes(podcast.id));
  }, [subscriptions]);

  // Get favorite episodes with their podcasts
  const favoriteEpisodes = useMemo(() => {
    return mockEpisodes
      .filter((episode) => favorites.includes(episode.id))
      .map((episode) => ({
        episode,
        podcast: getPodcastById(episode.podcastId)!,
      }))
      .filter((item) => item.podcast);
  }, [favorites]);

  // Get history entries with episodes and podcasts
  const historyEntries = useMemo(() => {
    return history
      .map((entry) => {
        const episode = mockEpisodes.find((ep) => ep.id === entry.episodeId);
        const podcast = episode ? getPodcastById(episode.podcastId) : undefined;
        return episode && podcast ? { entry, episode, podcast } : null;
      })
      .filter((item): item is NonNullable<typeof item> => item !== null);
  }, [history]);

  const counts = {
    subscribed: subscribedPodcasts.length,
    favorites: favoriteEpisodes.length,
    history: historyEntries.length,
  };

  return (
    <main role="main" className="min-h-screen pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            My Library
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Your subscriptions, favorites, and listening history
          </p>
        </div>

        {/* Tabs */}
        <LibraryTabs
          activeTab={activeTab}
          onTabChange={setActiveTab}
          counts={counts}
        />

        {/* Tab Content */}
        <div className="mt-8">
          {/* Subscribed Podcasts */}
          {activeTab === 'subscribed' && (
            <section
              id="subscribed-panel"
              role="tabpanel"
              aria-labelledby="subscribed-tab"
            >
              {subscribedPodcasts.length === 0 ? (
                <EmptyState
                  title="No Subscriptions Yet"
                  description="Subscribe to your favorite podcasts to see them here. You'll never miss a new episode!"
                  icon={<Library className="w-16 h-16" />}
                  action={{
                    label: 'Discover Podcasts',
                    onClick: () => navigate('/'),
                  }}
                />
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                  {subscribedPodcasts.map((podcast) => (
                    <PodcastCard key={podcast.id} podcast={podcast} />
                  ))}
                </div>
              )}
            </section>
          )}

          {/* Favorite Episodes */}
          {activeTab === 'favorites' && (
            <section
              id="favorites-panel"
              role="tabpanel"
              aria-labelledby="favorites-tab"
            >
              {favoriteEpisodes.length === 0 ? (
                <EmptyState
                  title="No Favorites Yet"
                  description="Heart your favorite episodes to save them here for easy access."
                  icon={<Heart className="w-16 h-16" />}
                  action={{
                    label: 'Browse Episodes',
                    onClick: () => navigate('/'),
                  }}
                />
              ) : (
                <div className="space-y-4">
                  {favoriteEpisodes.map(({ episode, podcast }) => (
                    <EpisodeItem
                      key={episode.id}
                      episode={episode}
                      podcast={podcast}
                      showPodcastInfo
                    />
                  ))}
                </div>
              )}
            </section>
          )}

          {/* Listening History */}
          {activeTab === 'history' && (
            <section
              id="history-panel"
              role="tabpanel"
              aria-labelledby="history-tab"
            >
              {historyEntries.length === 0 ? (
                <EmptyState
                  title="No Listening History"
                  description="Your recently played episodes will appear here."
                  icon={<Clock className="w-16 h-16" />}
                  action={{
                    label: 'Start Listening',
                    onClick: () => navigate('/'),
                  }}
                />
              ) : (
                <div>
                  {/* Clear History Button */}
                  <div className="flex justify-end mb-4">
                    <button
                      onClick={clearHistory}
                      className="flex items-center gap-2 text-sm text-gray-500 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" aria-hidden="true" />
                      Clear History
                    </button>
                  </div>

                  <div className="space-y-4">
                    {historyEntries.map(({ entry, episode, podcast }) => (
                      <div key={`${entry.episodeId}-${entry.lastPlayedAt}`} className="relative">
                        <EpisodeItem
                          episode={episode}
                          podcast={podcast}
                          showPodcastInfo
                        />
                        {/* Progress indicator */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100 dark:bg-gray-700 rounded-b-xl overflow-hidden">
                          <div
                            className={`h-full ${entry.completed ? 'bg-green-500' : 'bg-primary-500'}`}
                            style={{
                              width: `${entry.completed ? 100 : (entry.progress / episode.duration) * 100}%`,
                            }}
                          />
                        </div>
                        {/* Timestamp */}
                        <span className="absolute top-4 right-4 text-xs text-gray-400">
                          {formatRelativeDate(entry.lastPlayedAt)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>
          )}
        </div>
      </div>
    </main>
  );
};

export default LibraryPage;
