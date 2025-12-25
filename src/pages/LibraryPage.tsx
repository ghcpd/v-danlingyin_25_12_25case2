import React, { useMemo, useState } from 'react';
import LibraryTabs, { LibraryTab } from '../components/LibraryTabs';
import podcasts from '../data/mockPodcasts';
import PodcastList from '../components/PodcastList';
import EmptyState from '../components/EmptyState';
import { useLibrary } from '../context/LibraryContext';
import EpisodeItem from '../components/EpisodeItem';

const LibraryPage: React.FC = () => {
  const [tab, setTab] = useState<LibraryTab>('subscriptions');
  const { subscriptions, favorites, history } = useLibrary();

  const podcastMap = useMemo(() => new Map(podcasts.map(p => [p.id, p])), []);
  const allEpisodes = useMemo(() => podcasts.flatMap(p => p.episodes), []);
  const episodeMap = useMemo(() => new Map(allEpisodes.map(ep => [ep.id, ep])), [allEpisodes]);

  const subscriptionList = subscriptions
    .map(id => podcastMap.get(id))
    .filter(Boolean);

  const favoriteEpisodes = favorites
    .map(id => episodeMap.get(id))
    .filter(Boolean);

  const historyEpisodes = history
    .map(id => episodeMap.get(id))
    .filter(Boolean);

  return (
    <main role="main" className="mx-auto max-w-5xl px-4 pb-28 pt-24">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold">My Library</h1>
        <p className="text-sm text-gray-300">Your subscriptions, favorites, and listening history.</p>
      </div>

      <div className="mt-4">
        <LibraryTabs active={tab} onChange={setTab} />
      </div>

      <div className="mt-6 space-y-4">
        {tab === 'subscriptions' && (
          subscriptionList.length ? (
            <PodcastList podcasts={subscriptionList} />
          ) : (
            <EmptyState
              title="No subscriptions yet"
              description="Subscribe to podcasts to build your library."
            />
          )
        )}

        {tab === 'favorites' && (
          favoriteEpisodes.length ? (
            <div className="space-y-3">
              {favoriteEpisodes.map(ep => (
                <EpisodeItem key={ep!.id} episode={ep!} />
              ))}
            </div>
          ) : (
            <EmptyState title="No favorites" description="Mark episodes as favorites to find them quickly." />
          )
        )}

        {tab === 'history' && (
          historyEpisodes.length ? (
            <div className="space-y-3">
              {historyEpisodes.map(ep => (
                <EpisodeItem key={ep!.id} episode={ep!} />
              ))}
            </div>
          ) : (
            <EmptyState title="No history yet" description="Start playing an episode to see it here." />
          )
        )}
      </div>
    </main>
  );
};

export default LibraryPage;
