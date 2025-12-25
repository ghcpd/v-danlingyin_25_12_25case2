import React, { useRef, useCallback } from 'react';
import { ProgressBarProps } from '../types';
import { formatDuration } from '../utils';

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentTime,
  duration,
  onSeek,
  className = '',
}) => {
  const progressRef = useRef<HTMLDivElement>(null);

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (progressRef.current && duration > 0) {
      const rect = progressRef.current.getBoundingClientRect();
      const clickPosition = (e.clientX - rect.left) / rect.width;
      const newTime = Math.max(0, Math.min(clickPosition * duration, duration));
      onSeek(newTime);
    }
  }, [duration, onSeek]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    const step = 5; // 5 seconds
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      onSeek(Math.min(currentTime + step, duration));
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      onSeek(Math.max(currentTime - step, 0));
    }
  }, [currentTime, duration, onSeek]);

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="text-xs text-gray-500 dark:text-gray-400 w-12 text-right font-mono">
        {formatDuration(currentTime)}
      </span>
      
      <div
        ref={progressRef}
        className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full cursor-pointer group"
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        role="slider"
        tabIndex={0}
        aria-label="Seek audio"
        aria-valuemin={0}
        aria-valuemax={duration}
        aria-valuenow={currentTime}
        aria-valuetext={`${formatDuration(currentTime)} of ${formatDuration(duration)}`}
      >
        <div 
          className="relative h-full bg-primary-600 rounded-full transition-all duration-100"
          style={{ width: `${progress}%` }}
        >
          {/* Knob */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full shadow-md opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity" />
        </div>
      </div>
      
      <span className="text-xs text-gray-500 dark:text-gray-400 w-12 font-mono">
        {formatDuration(duration)}
      </span>
    </div>
  );
};

export default ProgressBar;
