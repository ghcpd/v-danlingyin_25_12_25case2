import React from 'react';
import { LibraryTab } from '../types';

interface LibraryTabsProps {
  activeTab: LibraryTab;
  onTabChange: (tab: LibraryTab) => void;
  counts?: {
    subscribed: number;
    favorites: number;
    history: number;
  };
  className?: string;
}

const LibraryTabs: React.FC<LibraryTabsProps> = ({
  activeTab,
  onTabChange,
  counts,
  className = '',
}) => {
  const tabs: { id: LibraryTab; label: string; count?: number }[] = [
    { id: 'subscribed', label: 'Subscribed Podcasts', count: counts?.subscribed },
    { id: 'favorites', label: 'Favorites', count: counts?.favorites },
    { id: 'history', label: 'History', count: counts?.history },
  ];

  return (
    <div className={`border-b border-gray-200 dark:border-gray-700 ${className}`} role="tablist">
      <nav className="flex space-x-4 md:space-x-8 overflow-x-auto" aria-label="Library tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`
              flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap
              transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
              ${activeTab === tab.id
                ? 'border-primary-600 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }
            `}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`${tab.id}-panel`}
          >
            <span>{tab.label}</span>
            {tab.count !== undefined && tab.count > 0 && (
              <span className={`
                inline-flex items-center justify-center px-2 py-0.5 text-xs font-medium rounded-full
                ${activeTab === tab.id
                  ? 'bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400'
                  : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400'
                }
              `}>
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default LibraryTabs;
