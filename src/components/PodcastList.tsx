import React from 'react';
import { Podcast } from '../types';
import PodcastCard from './PodcastCard';

interface PodcastListProps {
  podcasts: Podcast[];
}

const PodcastList: React.FC<PodcastListProps> = ({ podcasts }) => (
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {podcasts.map(podcast => (
      <PodcastCard key={podcast.id} podcast={podcast} />
    ))}
  </div>
);

export default PodcastList;
