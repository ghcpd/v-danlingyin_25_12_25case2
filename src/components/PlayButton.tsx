import React from 'react';
import { clsx } from 'clsx';

interface PlayButtonProps {
  isPlaying?: boolean;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  label?: string;
}

const sizeMap = {
  sm: 'h-10 w-10',
  md: 'h-12 w-12',
  lg: 'h-14 w-14'
};

const PlayButton: React.FC<PlayButtonProps> = ({ isPlaying, onClick, size = 'md', label = 'Play' }) => (
  <button
    onClick={onClick}
    className={clsx(
      'flex items-center justify-center rounded-full bg-primary text-white shadow-soft transition hover:bg-primary/90',
      sizeMap[size]
    )}
    aria-label={label}
  >
    {isPlaying ? '❚❚' : '▶'}
  </button>
);

export default PlayButton;
