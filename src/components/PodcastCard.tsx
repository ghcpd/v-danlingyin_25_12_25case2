import React from 'react';
import { Link } from 'react-router-dom';
import { Podcast } from '../types';
import { useLibrary } from '../context/LibraryContext';

interface PodcastCardProps {
  podcast: Podcast;
}

const PodcastCard: React.FC<PodcastCardProps> = ({ podcast }) => {
  const { subscriptions, toggleSubscribe } = useLibrary();
  const isSubscribed = subscriptions.includes(podcast.id);

  return (
    <article className="flex flex-col rounded-2xl border border-white/5 bg-white/5 p-4 shadow-soft transition hover:border-primary/60 hover:bg-white/10">
      <Link to={`/podcast/${podcast.id}`} className="flex flex-col gap-3" aria-label={podcast.title}>
        <img
          src={podcast.coverImage}
          alt={`${podcast.title} cover`}
          className="aspect-square w-full rounded-xl object-cover"
          loading="lazy"
        />
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold leading-tight">{podcast.title}</h3>
          <p className="text-sm text-gray-300">{podcast.author}</p>
          <div className="flex flex-wrap gap-2 text-xs text-gray-300">
            <span className="rounded-full bg-primary/20 px-2 py-1 text-primary">{podcast.rating.toFixed(1)} ★</span>
            <span className="rounded-full bg-white/10 px-2 py-1">{podcast.episodeCount} episodes</span>
          </div>
        </div>
      </Link>
      <div className="mt-3 flex items-center justify-between gap-2">
        <div className="flex flex-wrap gap-2 text-xs text-gray-400">
          {podcast.category.slice(0, 2).map(cat => (
            <span key={cat} className="rounded-full bg-white/10 px-2 py-1">
              {cat}
            </span>
          ))}
        </div>
        <button
          className="rounded-full border border-primary/50 px-3 py-1 text-xs font-semibold text-primary hover:bg-primary/10"
          aria-label={isSubscribed ? 'Unsubscribe' : 'Subscribe'}
          onClick={() => toggleSubscribe(podcast.id)}
        >
          {isSubscribed ? 'Subscribed' : 'Subscribe'}
        </button>
      </div>
    </article>
  );
};

export default React.memo(PodcastCard);
