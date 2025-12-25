import React from 'react';
import { Category } from '../types';
import { clsx } from 'clsx';

interface CategoryPillProps {
  category: Category | string;
  active?: boolean;
  onSelect?: (category: Category | string) => void;
}

const CategoryPill: React.FC<CategoryPillProps> = ({ category, active, onSelect }) => {
  return (
    <button
      className={clsx(
        'rounded-full px-4 py-2 text-sm font-semibold transition border',
        active ? 'bg-primary text-white border-primary' : 'bg-white/5 text-gray-200 border-white/10 hover:border-primary/50'
      )}
      onClick={() => onSelect?.(category)}
      aria-pressed={active}
    >
      {category}
    </button>
  );
};

export default CategoryPill;
