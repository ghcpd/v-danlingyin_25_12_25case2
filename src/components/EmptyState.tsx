import React from 'react';

interface EmptyStateProps {
  title: string;
  description: string;
  action?: React.ReactNode;
}

const EmptyState: React.FC<EmptyStateProps> = ({ title, description, action }) => (
  <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-white/20 bg-white/5 px-6 py-12 text-center">
    <p className="text-xl font-semibold">{title}</p>
    <p className="max-w-xl text-sm text-gray-300">{description}</p>
    {action}
  </div>
);

export default EmptyState;
