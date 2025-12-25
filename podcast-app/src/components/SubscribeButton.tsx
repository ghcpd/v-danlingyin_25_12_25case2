import React from 'react';
import { Bell, BellOff, Check } from 'lucide-react';
import { useLibraryStore } from '../context/LibraryContext';

interface SubscribeButtonProps {
  podcastId: string;
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
  className?: string;
}

const SubscribeButton: React.FC<SubscribeButtonProps> = ({
  podcastId,
  size = 'medium',
  showText = true,
  className = '',
}) => {
  const { isSubscribed, subscribe, unsubscribe } = useLibraryStore();
  const subscribed = isSubscribed(podcastId);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (subscribed) {
      unsubscribe(podcastId);
    } else {
      subscribe(podcastId);
    }
  };

  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2',
    large: 'px-6 py-3 text-lg',
  };

  const iconSizes = {
    small: 'w-4 h-4',
    medium: 'w-5 h-5',
    large: 'w-6 h-6',
  };

  if (subscribed) {
    return (
      <button
        onClick={handleClick}
        className={`inline-flex items-center gap-2 rounded-full font-medium transition-colors
          bg-primary-100 text-primary-700 hover:bg-primary-200 
          dark:bg-primary-900/30 dark:text-primary-400 dark:hover:bg-primary-900/50
          focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
          ${sizeClasses[size]} ${className}`}
        aria-label="Unsubscribe from podcast"
      >
        <Check className={iconSizes[size]} aria-hidden="true" />
        {showText && <span>Subscribed</span>}
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center gap-2 rounded-full font-medium transition-colors
        bg-primary-600 text-white hover:bg-primary-700
        focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
        ${sizeClasses[size]} ${className}`}
      aria-label="Subscribe to podcast"
    >
      <Bell className={iconSizes[size]} aria-hidden="true" />
      {showText && <span>Subscribe</span>}
    </button>
  );
};

export default SubscribeButton;
