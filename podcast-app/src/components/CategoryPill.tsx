import React from 'react';
import { Link } from 'react-router-dom';
import { CategoryPillProps, Category } from '../types';
import { toSlug } from '../utils';

const CategoryPill: React.FC<CategoryPillProps> = ({
  category,
  isSelected = false,
  onClick,
  className = '',
}) => {
  const categoryColors: Record<Category, string> = {
    [Category.Technology]: 'bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-400',
    [Category.Business]: 'bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-400',
    [Category.TrueCrime]: 'bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-400',
    [Category.Comedy]: 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400',
    [Category.Education]: 'bg-purple-100 text-purple-700 hover:bg-purple-200 dark:bg-purple-900/30 dark:text-purple-400',
    [Category.HealthFitness]: 'bg-pink-100 text-pink-700 hover:bg-pink-200 dark:bg-pink-900/30 dark:text-pink-400',
    [Category.News]: 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300',
    [Category.Sports]: 'bg-orange-100 text-orange-700 hover:bg-orange-200 dark:bg-orange-900/30 dark:text-orange-400',
    [Category.Science]: 'bg-cyan-100 text-cyan-700 hover:bg-cyan-200 dark:bg-cyan-900/30 dark:text-cyan-400',
    [Category.History]: 'bg-amber-100 text-amber-700 hover:bg-amber-200 dark:bg-amber-900/30 dark:text-amber-400',
  };

  const baseClasses = 'inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200';
  const selectedClasses = isSelected
    ? 'ring-2 ring-primary-500 ring-offset-2 dark:ring-offset-gray-900'
    : '';
  const colorClasses = categoryColors[category] || 'bg-gray-100 text-gray-700';

  if (onClick) {
    return (
      <button
        onClick={() => onClick(category)}
        className={`${baseClasses} ${colorClasses} ${selectedClasses} ${className}`}
        aria-pressed={isSelected}
      >
        {category}
      </button>
    );
  }

  return (
    <Link
      to={`/category/${toSlug(category)}`}
      className={`${baseClasses} ${colorClasses} ${selectedClasses} ${className}`}
    >
      {category}
    </Link>
  );
};

export default CategoryPill;
