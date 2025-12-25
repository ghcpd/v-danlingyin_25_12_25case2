import React, { useRef, useCallback, useState } from 'react';
import { Volume2, VolumeX, Volume1 } from 'lucide-react';
import { VolumeControlProps } from '../types';

const VolumeControl: React.FC<VolumeControlProps> = ({
  volume,
  isMuted,
  onVolumeChange,
  onToggleMute,
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const displayVolume = isMuted ? 0 : volume;

  const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const clickPosition = (e.clientX - rect.left) / rect.width;
      const newVolume = Math.max(0, Math.min(clickPosition, 1));
      onVolumeChange(newVolume);
    }
  }, [onVolumeChange]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    const step = 0.1;
    if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
      e.preventDefault();
      onVolumeChange(Math.min(volume + step, 1));
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
      e.preventDefault();
      onVolumeChange(Math.max(volume - step, 0));
    }
  }, [volume, onVolumeChange]);

  const VolumeIcon = displayVolume === 0 
    ? VolumeX 
    : displayVolume < 0.5 
      ? Volume1 
      : Volume2;

  return (
    <div 
      className={`flex items-center gap-2 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        onClick={onToggleMute}
        className="p-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
        aria-label={isMuted ? 'Unmute' : 'Mute'}
      >
        <VolumeIcon className="w-5 h-5" aria-hidden="true" />
      </button>

      <div 
        className={`overflow-hidden transition-all duration-200 ${
          isHovered ? 'w-24 opacity-100' : 'w-0 opacity-0'
        }`}
      >
        <div
          ref={sliderRef}
          className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full cursor-pointer"
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          role="slider"
          tabIndex={0}
          aria-label="Volume"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(displayVolume * 100)}
          aria-valuetext={`${Math.round(displayVolume * 100)}%`}
        >
          <div 
            className="h-full bg-primary-600 rounded-full"
            style={{ width: `${displayVolume * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default VolumeControl;
