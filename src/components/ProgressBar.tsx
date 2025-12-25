import React from 'react';
import { formatDuration } from '../utils/formatDuration';

interface ProgressBarProps {
  value: number;
  max: number;
  onChange: (value: number) => void;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, max, onChange }) => (
  <div className="flex w-full items-center gap-3 text-xs text-gray-300">
    <span>{formatDuration(value)}</span>
    <input
      type="range"
      min={0}
      max={max || 1}
      step={1}
      value={Math.min(value, max || 1)}
      onChange={e => onChange(Number(e.target.value))}
      className="h-1 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-primary"
      aria-label="Seek"
    />
    <span>{formatDuration(max)}</span>
  </div>
);

export default ProgressBar;
