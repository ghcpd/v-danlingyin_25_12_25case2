import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Users, Star } from 'lucide-react';
import { Podcast } from '../types';
import { formatNumberAbbreviated, formatRating } from '../utils';
import { usePlayerStore } from '../context/PlayerContext';
import { getEpisodesByPodcastId } from '../data/mockPodcasts';

interface HeroProps {
  podcast: Podcast;
}

const Hero: React.FC<HeroProps> = ({ podcast }) => {
  const { play, currentEpisode, isPlaying, pause, resume } = usePlayerStore();

  const handlePlayLatest = () => {
    const episodes = getEpisodesByPodcastId(podcast.id);
    if (episodes.length > 0) {
      const latestEpisode = episodes[0];
      
      if (currentEpisode?.id === latestEpisode.id) {
        if (isPlaying) {
          pause();
        } else {
          resume();
        }
      } else {
        play(latestEpisode, podcast);
      }
    }
  };

  const isCurrentPodcast = currentEpisode?.podcastId === podcast.id;

  return (
    <section 
      className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white"
      aria-labelledby="featured-podcast-title"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,_white,_transparent_70%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <p className="text-primary-200 text-sm font-semibold uppercase tracking-wider mb-2">
              Featured Podcast
            </p>
            <h1 
              id="featured-podcast-title"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
            >
              {podcast.title}
            </h1>
            <p className="text-lg text-primary-100 mb-2">
              by {podcast.author}
            </p>
            <p className="text-primary-200 mb-6 line-clamp-3">
              {podcast.description}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary-200" aria-hidden="true" />
                <span className="text-primary-100">
                  {formatNumberAbbreviated(podcast.subscribers)} subscribers
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" aria-hidden="true" />
                <span className="text-primary-100">
                  {formatRating(podcast.rating)} rating
                </span>
              </div>
              <div className="text-primary-100">
                {podcast.episodeCount} episodes
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={handlePlayLatest}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-600 font-semibold rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
                aria-label={isCurrentPodcast && isPlaying ? 'Pause latest episode' : 'Play latest episode'}
              >
                <Play 
                  className={`w-5 h-5 ${isCurrentPodcast && isPlaying ? 'fill-current' : ''}`} 
                  aria-hidden="true" 
                />
                <span>{isCurrentPodcast && isPlaying ? 'Playing' : 'Play Latest'}</span>
              </button>
              <Link
                to={`/podcast/${podcast.id}`}
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/50 text-white font-semibold rounded-full hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
              >
                View All Episodes
              </Link>
            </div>
          </div>

          {/* Cover Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <Link 
              to={`/podcast/${podcast.id}`}
              className="group relative"
            >
              <div className="absolute -inset-4 bg-white/20 rounded-3xl blur-xl group-hover:bg-white/30 transition-colors" />
              <img
                src={podcast.coverImage}
                alt={`${podcast.title} cover`}
                className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-300"
                loading="eager"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
