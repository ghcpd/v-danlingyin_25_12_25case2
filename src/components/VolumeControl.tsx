import React from 'react';

interface VolumeControlProps {
  value: number;
  onChange: (volume: number) => void;
}

const VolumeControl: React.FC<VolumeControlProps> = ({ value, onChange }) => (
  <div className="flex items-center gap-2 text-xs text-gray-300">
    <span aria-hidden>🔉</span>
    <input
      type="range"
      min={0}
      max={1}
      step={0.05}
      value={value}
      onChange={e => onChange(Number(e.target.value))}
      className="h-1 w-28 cursor-pointer appearance-none rounded-full bg-white/10 accent-primary"
      aria-label="Volume"
    />
  </div>
);

export default VolumeControl;
