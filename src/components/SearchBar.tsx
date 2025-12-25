import React from 'react';
import { clsx } from 'clsx';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, placeholder = 'Search podcasts', className }) => (
  <label className={clsx('flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3', className)}>
    <span aria-hidden>🔍</span>
    <input
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-400"
      aria-label="Search"
    />
  </label>
);

export default SearchBar;
