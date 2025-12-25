import React from 'react';
import { SlidersHorizontal, X } from 'lucide-react';
import { FilterPanelProps, Category, SortOption } from '../types';
import CategoryPill from './CategoryPill';

const FilterPanel: React.FC<FilterPanelProps> = ({
  filters,
  onFiltersChange,
  className = '',
}) => {
  const categories = Object.values(Category);

  const handleCategoryToggle = (category: Category) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter((c) => c !== category)
      : [...filters.categories, category];
    
    onFiltersChange({ ...filters, categories: newCategories });
  };

  const handleSortChange = (sortBy: SortOption) => {
    onFiltersChange({ ...filters, sortBy });
  };

  const handleRatingChange = (minRating: number | undefined) => {
    onFiltersChange({ ...filters, minRating });
  };

  const handleDurationChange = (type: 'min' | 'max', value: number | undefined) => {
    if (type === 'min') {
      onFiltersChange({ ...filters, minDuration: value });
    } else {
      onFiltersChange({ ...filters, maxDuration: value });
    }
  };

  const clearFilters = () => {
    onFiltersChange({
      ...filters,
      categories: [],
      minDuration: undefined,
      maxDuration: undefined,
      minRating: undefined,
    });
  };

  const hasActiveFilters = 
    filters.categories.length > 0 ||
    filters.minDuration !== undefined ||
    filters.maxDuration !== undefined ||
    filters.minRating !== undefined;

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
          <SlidersHorizontal className="w-5 h-5" aria-hidden="true" />
          <span className="font-medium">Filters</span>
        </div>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-sm text-primary-600 hover:text-primary-700 flex items-center gap-1"
          >
            <X className="w-4 h-4" aria-hidden="true" />
            Clear all
          </button>
        )}
      </div>

      {/* Sort Options */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
          Sort by
        </label>
        <div className="flex flex-wrap gap-2">
          {Object.values(SortOption).map((option) => (
            <button
              key={option}
              onClick={() => handleSortChange(option)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                filters.sortBy === option
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
          Categories
        </label>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <CategoryPill
              key={category}
              category={category}
              isSelected={filters.categories.includes(category)}
              onClick={handleCategoryToggle}
            />
          ))}
        </div>
      </div>

      {/* Rating Filter */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
          Minimum Rating
        </label>
        <div className="flex gap-2">
          {[0, 3, 4, 4.5].map((rating) => (
            <button
              key={rating}
              onClick={() => handleRatingChange(rating === 0 ? undefined : rating)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                (rating === 0 && filters.minRating === undefined) || filters.minRating === rating
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {rating === 0 ? 'Any' : `${rating}+`}
            </button>
          ))}
        </div>
      </div>

      {/* Duration Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
          Episode Duration
        </label>
        <div className="flex gap-2">
          <button
            onClick={() => {
              handleDurationChange('min', undefined);
              handleDurationChange('max', undefined);
            }}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              filters.minDuration === undefined && filters.maxDuration === undefined
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            Any
          </button>
          <button
            onClick={() => {
              handleDurationChange('min', undefined);
              handleDurationChange('max', 1800);
            }}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              filters.maxDuration === 1800
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            Under 30 min
          </button>
          <button
            onClick={() => {
              handleDurationChange('min', 1800);
              handleDurationChange('max', 3600);
            }}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              filters.minDuration === 1800 && filters.maxDuration === 3600
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            30-60 min
          </button>
          <button
            onClick={() => {
              handleDurationChange('min', 3600);
              handleDurationChange('max', undefined);
            }}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              filters.minDuration === 3600 && filters.maxDuration === undefined
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            Over 60 min
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
