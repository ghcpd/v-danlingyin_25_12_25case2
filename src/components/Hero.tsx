import React from 'react';
import { Podcast } from '../types';
import { Link } from 'react-router-dom';

interface HeroProps {
  featured: Podcast;
}

const Hero: React.FC<HeroProps> = ({ featured }) => {
  return (
    <section className="relative mt-20 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-secondary via-secondary/90 to-primary/30 p-6 shadow-soft lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-10 lg:p-10">
      <div className="flex flex-col gap-4">
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary">
          Featured Podcast
        </span>
        <h1 className="text-3xl font-bold lg:text-4xl">{featured.title}</h1>
        <p className="text-sm text-gray-200 lg:text-base">{featured.description}</p>
        <div className="flex flex-wrap gap-3 text-sm text-gray-300">
          <span>{featured.author}</span>
          <span className="rounded-full bg-white/5 px-3 py-1">{featured.category.join(' · ')}</span>
          <span>{featured.episodeCount} episodes</span>
        </div>
        <div className="flex gap-3 pt-2">
          <Link
            to={`/podcast/${featured.id}`}
            className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-soft hover:bg-primary/90"
          >
            Listen now
          </Link>
          <Link
            to="/search"
            className="rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white hover:border-primary/50"
          >
            Browse more
          </Link>
        </div>
      </div>
      <div className="relative mt-6 lg:mt-0">
        <div className="absolute inset-6 rounded-full bg-primary/20 blur-3xl" aria-hidden />
        <img
          src={featured.coverImage}
          alt={`${featured.title} cover`}
          className="relative w-full rounded-3xl object-cover shadow-2xl"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Hero;
