/**
 * Formats duration in seconds to a human-readable string
 * @param seconds - Duration in seconds
 * @returns Formatted duration string (e.g., "45:30" or "1:23:45")
 */
export const formatDuration = (seconds: number): string => {
  if (isNaN(seconds) || seconds < 0) return '0:00';
  
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  
  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
  
  return `${minutes}:${secs.toString().padStart(2, '0')}`;
};

/**
 * Formats duration in seconds to a verbose string
 * @param seconds - Duration in seconds
 * @returns Verbose duration string (e.g., "45 min", "1 hr 23 min")
 */
export const formatDurationVerbose = (seconds: number): string => {
  if (isNaN(seconds) || seconds < 0) return '0 min';
  
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  
  if (hours > 0) {
    if (minutes > 0) {
      return `${hours} hr ${minutes} min`;
    }
    return `${hours} hr`;
  }
  
  return `${minutes} min`;
};

/**
 * Converts duration to minutes
 * @param seconds - Duration in seconds
 * @returns Duration in minutes
 */
export const durationToMinutes = (seconds: number): number => {
  return Math.round(seconds / 60);
};
