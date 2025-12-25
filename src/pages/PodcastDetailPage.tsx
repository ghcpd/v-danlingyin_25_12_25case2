import React, { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import podcasts from '../data/mockPodcasts';
import PodcastHeader from '../components/PodcastHeader';
import EpisodeItem from '../components/EpisodeItem';
import { Episode } from '../types';

const sortEpisodes = (episodes: Episode[], sort: string) => {
  if (sort === 'recent') {
    return [...episodes].sort(
      (a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
    );
  }
  if (sort === 'popular') {
    return [...episodes].sort((a, b) => b.duration - a.duration);
  }
  return episodes;
};

const PodcastDetailPage: React.FC = () => {
  const { id } = useParams();
  const podcast = podcasts.find(p => p.id === id);
  const [sort, setSort] = useState('recent');

  const episodes = useMemo(() => (podcast ? sortEpisodes(podcast.episodes, sort) : []), [podcast, sort]);

  if (!podcast) {
    return (
      <main className="mx-auto max-w-5xl px-4 pb-28 pt-28 text-center">
        <p className="text-xl font-semibold">Podcast not found.</p>
        <Link to="/" className="mt-3 inline-block rounded-full bg-primary px-4 py-2 text-white">
          Go back
        </Link>
      </main>
    );
  }

  return (
    <main role="main" className="mx-auto max-w-5xl px-4 pb-28 pt-24 lg:px-0">
      <PodcastHeader podcast={podcast} />

      <section className="mt-8 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">Episodes</h3>
          <select
            value={sort}
            onChange={e => setSort(e.target.value)}
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm"
            aria-label="Sort episodes"
          >
            <option value="recent">Most recent</option>
            <option value="popular">Longest</option>
          </select>
        </div>
        <div className="space-y-3">
          {episodes.map(episode => (
            <EpisodeItem key={episode.id} episode={episode} queue={episodes} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default PodcastDetailPage;
