import React from 'react';
import { Podcast } from '../types';
import SubscribeButton from './SubscribeButton';

interface PodcastHeaderProps {
  podcast: Podcast;
}

const PodcastHeader: React.FC<PodcastHeaderProps> = ({ podcast }) => (
  <section className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft lg:flex-row lg:items-center lg:gap-8">
    <img
      src={podcast.coverImage}
      alt={`${podcast.title} cover`}
      className="h-44 w-44 rounded-2xl object-cover shadow-2xl"
      loading="lazy"
    />
    <div className="flex-1 space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm text-gray-400">{podcast.author}</p>
          <h2 className="text-3xl font-bold">{podcast.title}</h2>
        </div>
        <SubscribeButton podcastId={podcast.id} />
      </div>
      <p className="text-sm text-gray-200 lg:text-base">{podcast.description}</p>
      <div className="flex flex-wrap gap-4 text-sm text-gray-200">
        <span className="rounded-full bg-primary/15 px-3 py-1 text-primary">{podcast.rating.toFixed(1)} ★</span>
        <span className="rounded-full bg-white/10 px-3 py-1">{podcast.subscribers.toLocaleString()} subscribers</span>
        <span className="rounded-full bg-white/10 px-3 py-1">{podcast.episodeCount} episodes</span>
        <span className="rounded-full bg-white/10 px-3 py-1">{podcast.category.join(' · ')}</span>
      </div>
    </div>
  </section>
);

export default PodcastHeader;
