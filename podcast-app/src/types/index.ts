// ============================================
// Podcast Types
// ============================================

export enum Category {
  Technology = 'Technology',
  Business = 'Business',
  TrueCrime = 'True Crime',
  Comedy = 'Comedy',
  Education = 'Education',
  HealthFitness = 'Health & Fitness',
  News = 'News',
  Sports = 'Sports',
  Science = 'Science',
  History = 'History',
}

export enum EpisodeStatus {
  NotStarted = 'not_started',
  InProgress = 'in_progress',
  Completed = 'completed',
}

export enum PlaybackSpeed {
  Slow = 0.5,
  Normal = 1,
  Fast = 1.5,
  VeryFast = 2,
}

// ============================================
// Core Interfaces
// ============================================

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
  createdAt: string;
  updatedAt: string;
}

export interface Episode {
  id: string;
  podcastId: string;
  title: string;
  description: string;
  duration: number; // in seconds
  releaseDate: string;
  audioUrl: string;
  episodeNumber: number;
  thumbnail?: string;
  status?: EpisodeStatus;
  progress?: number; // in seconds
}

// ============================================
// Player Types
// ============================================

export interface PlayerState {
  currentEpisode: Episode | null;
  currentPodcast: Podcast | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  isMuted: boolean;
  playbackSpeed: PlaybackSpeed;
  isExpanded: boolean;
  queue: Episode[];
}

export interface PlayerActions {
  play: (episode: Episode, podcast: Podcast) => void;
  pause: () => void;
  resume: () => void;
  stop: () => void;
  seek: (time: number) => void;
  setVolume: (volume: number) => void;
  toggleMute: () => void;
  setPlaybackSpeed: (speed: PlaybackSpeed) => void;
  toggleExpanded: () => void;
  skipForward: (seconds?: number) => void;
  skipBackward: (seconds?: number) => void;
  playNext: () => void;
  playPrevious: () => void;
  addToQueue: (episode: Episode) => void;
  removeFromQueue: (episodeId: string) => void;
  clearQueue: () => void;
  updateTime: (time: number) => void;
  setDuration: (duration: number) => void;
}

export type PlayerStore = PlayerState & PlayerActions;

// ============================================
// Library Types
// ============================================

export interface LibraryState {
  subscriptions: string[]; // podcast IDs
  favorites: string[]; // episode IDs
  history: HistoryEntry[];
}

export interface HistoryEntry {
  episodeId: string;
  podcastId: string;
  lastPlayedAt: string;
  progress: number;
  completed: boolean;
}

export interface LibraryActions {
  subscribe: (podcastId: string) => void;
  unsubscribe: (podcastId: string) => void;
  isSubscribed: (podcastId: string) => boolean;
  addToFavorites: (episodeId: string) => void;
  removeFromFavorites: (episodeId: string) => void;
  isFavorite: (episodeId: string) => boolean;
  addToHistory: (entry: Omit<HistoryEntry, 'lastPlayedAt'>) => void;
  getHistory: () => HistoryEntry[];
  clearHistory: () => void;
}

export type LibraryStore = LibraryState & LibraryActions;

// ============================================
// Search & Filter Types
// ============================================

export interface SearchFilters {
  query: string;
  categories: Category[];
  minDuration?: number;
  maxDuration?: number;
  minRating?: number;
  sortBy: SortOption;
}

export enum SortOption {
  Relevance = 'relevance',
  Rating = 'rating',
  Recent = 'recent',
  Popular = 'popular',
}

// ============================================
// Component Props Types
// ============================================

export interface PodcastCardProps {
  podcast: Podcast;
  size?: 'small' | 'medium' | 'large';
  showSubscribeButton?: boolean;
  className?: string;
}

export interface EpisodeItemProps {
  episode: Episode;
  podcast: Podcast;
  showPodcastInfo?: boolean;
  compact?: boolean;
  className?: string;
}

export interface PlayButtonProps {
  episode: Episode;
  podcast: Podcast;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export interface ProgressBarProps {
  currentTime: number;
  duration: number;
  onSeek: (time: number) => void;
  className?: string;
}

export interface VolumeControlProps {
  volume: number;
  isMuted: boolean;
  onVolumeChange: (volume: number) => void;
  onToggleMute: () => void;
  className?: string;
}

export interface CategoryPillProps {
  category: Category;
  isSelected?: boolean;
  onClick?: (category: Category) => void;
  className?: string;
}

export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export interface FilterPanelProps {
  filters: SearchFilters;
  onFiltersChange: (filters: SearchFilters) => void;
  className?: string;
}

export interface EmptyStateProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  action?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
}

// ============================================
// Theme Types
// ============================================

export type Theme = 'light' | 'dark';

export interface ThemeState {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

// ============================================
// Tab Types for Library
// ============================================

export type LibraryTab = 'subscribed' | 'favorites' | 'history';
