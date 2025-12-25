import React from 'react';
import { Podcast } from '../types';
import PodcastList from './PodcastList';
import EmptyState from './EmptyState';

interface SearchResultsProps {
  podcasts: Podcast[];
  query: string;
}

const SearchResults: React.FC<SearchResultsProps> = ({ podcasts, query }) => {
  if (!podcasts.length) {
    return <EmptyState title="No results" description={`No podcasts match "${query}" yet.`} />;
  }

  return <PodcastList podcasts={podcasts} />;
};

export default SearchResults;
