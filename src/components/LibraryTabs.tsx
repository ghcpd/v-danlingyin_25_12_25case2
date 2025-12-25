import React from 'react';
import { clsx } from 'clsx';

export type LibraryTab = 'subscriptions' | 'favorites' | 'history';

interface LibraryTabsProps {
  active: LibraryTab;
  onChange: (tab: LibraryTab) => void;
}

const tabs: { key: LibraryTab; label: string }[] = [
  { key: 'subscriptions', label: 'Subscribed Podcasts' },
  { key: 'favorites', label: 'Favorites' },
  { key: 'history', label: 'History' }
];

const LibraryTabs: React.FC<LibraryTabsProps> = ({ active, onChange }) => (
  <div className="flex flex-wrap gap-2 rounded-2xl border border-white/10 bg-white/5 p-2">
    {tabs.map(tab => (
      <button
        key={tab.key}
        onClick={() => onChange(tab.key)}
        className={clsx(
          'rounded-xl px-4 py-2 text-sm font-semibold transition',
          active === tab.key ? 'bg-primary text-white shadow-soft' : 'text-gray-200 hover:bg-white/5'
        )}
        aria-pressed={active === tab.key}
      >
        {tab.label}
      </button>
    ))}
  </div>
);

export default LibraryTabs;
