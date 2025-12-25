import React from 'react';
import { Category } from '../types';

interface FilterPanelProps {
  categories: (Category | string)[];
  selectedCategory?: string;
  onCategoryChange: (category?: string) => void;
  durationFilter?: string;
  onDurationChange: (value?: string) => void;
  ratingFilter?: string;
  onRatingChange: (value?: string) => void;
  sort?: string;
  onSortChange: (value: string) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  durationFilter,
  onDurationChange,
  ratingFilter,
  onRatingChange,
  sort,
  onSortChange
}) => {
  return (
    <div className="grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 sm:grid-cols-2 lg:grid-cols-4">
      <label className="flex flex-col gap-2 text-sm">
        <span className="text-gray-300">Category</span>
        <select
          value={selectedCategory ?? ''}
          onChange={e => onCategoryChange(e.target.value || undefined)}
          className="rounded-xl border border-white/10 bg-secondary px-3 py-2 text-white"
        >
          <option value="">All</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-2 text-sm">
        <span className="text-gray-300">Duration</span>
        <select
          value={durationFilter ?? ''}
          onChange={e => onDurationChange(e.target.value || undefined)}
          className="rounded-xl border border-white/10 bg-secondary px-3 py-2 text-white"
        >
          <option value="">Any</option>
          <option value="short">Under 15 min</option>
          <option value="medium">15-30 min</option>
          <option value="long">30+ min</option>
        </select>
      </label>

      <label className="flex flex-col gap-2 text-sm">
        <span className="text-gray-300">Rating</span>
        <select
          value={ratingFilter ?? ''}
          onChange={e => onRatingChange(e.target.value || undefined)}
          className="rounded-xl border border-white/10 bg-secondary px-3 py-2 text-white"
        >
          <option value="">Any</option>
          <option value="4">4.0+</option>
          <option value="4.5">4.5+</option>
        </select>
      </label>

      <label className="flex flex-col gap-2 text-sm">
        <span className="text-gray-300">Sort by</span>
        <select
          value={sort ?? 'relevance'}
          onChange={e => onSortChange(e.target.value)}
          className="rounded-xl border border-white/10 bg-secondary px-3 py-2 text-white"
        >
          <option value="relevance">Relevance</option>
          <option value="rating">Rating</option>
          <option value="recent">Recent</option>
        </select>
      </label>
    </div>
  );
};

export default FilterPanel;
