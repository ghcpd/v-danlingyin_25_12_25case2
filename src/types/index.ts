export enum Category {
  Technology = 'Technology',
  Business = 'Business',
  Comedy = 'Comedy',
  Education = 'Education',
  Health = 'Health & Fitness',
  TrueCrime = 'True Crime',
  News = 'News',
  Sports = 'Sports',
  Science = 'Science',
  History = 'History'
}

export interface Episode {
  id: string;
  podcastId: string;
  title: string;
  description: string;
  duration: number; // seconds
  releaseDate: string;
  audioUrl: string;
  episodeNumber: number;
  thumbnail?: string;
}

export interface Podcast {
  id: string;
  title: string;
  author: string;
  description: string;
  coverImage: string;
  category: Category[];
  episodeCount: number;
  subscribers: number;
  rating: number;
  episodes: Episode[];
}

export interface LibraryState {
  subscriptions: string[];
  favorites: string[];
  history: string[];
}

export interface PlayerState {
  currentEpisode?: Episode;
  queue: Episode[];
  isPlaying: boolean;
  volume: number;
  progress: number;
}
