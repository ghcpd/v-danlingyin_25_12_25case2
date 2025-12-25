/**
 * Formats a number with comma separators
 * @param num - Number to format
 * @returns Formatted number string (e.g., "1,234,567")
 */
export const formatNumber = (num: number): string => {
  return num.toLocaleString('en-US');
};

/**
 * Formats a number with abbreviated suffix
 * @param num - Number to format
 * @returns Abbreviated number string (e.g., "1.2K", "3.4M")
 */
export const formatNumberAbbreviated = (num: number): string => {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1).replace(/\.0$/, '')}M`;
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1).replace(/\.0$/, '')}K`;
  }
  return num.toString();
};

/**
 * Formats rating to display string
 * @param rating - Rating number (0-5)
 * @returns Formatted rating string (e.g., "4.5")
 */
export const formatRating = (rating: number): string => {
  return rating.toFixed(1);
};

/**
 * Generates star rating display
 * @param rating - Rating number (0-5)
 * @returns Object with full, half, and empty star counts
 */
export const getStarRating = (rating: number): { full: number; half: boolean; empty: number } => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
  return {
    full: fullStars,
    half: hasHalfStar,
    empty: emptyStars,
  };
};

/**
 * Clamps a number between min and max
 * @param num - Number to clamp
 * @param min - Minimum value
 * @param max - Maximum value
 * @returns Clamped number
 */
export const clamp = (num: number, min: number, max: number): number => {
  return Math.min(Math.max(num, min), max);
};

/**
 * Generates a random ID
 * @returns Random ID string
 */
export const generateId = (): string => {
  return Math.random().toString(36).substring(2, 9);
};

/**
 * Debounces a value
 * @param value - Value to debounce
 * @param delay - Delay in milliseconds
 * @returns Debounced value
 */
export const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

/**
 * Shuffles an array
 * @param array - Array to shuffle
 * @returns Shuffled array
 */
export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

/**
 * Truncates text with ellipsis
 * @param text - Text to truncate
 * @param maxLength - Maximum length
 * @returns Truncated text
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return `${text.substring(0, maxLength).trim()}...`;
};

/**
 * Capitalizes first letter of string
 * @param str - String to capitalize
 * @returns Capitalized string
 */
export const capitalizeFirst = (str: string): string => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Converts kebab-case to Title Case
 * @param str - Kebab-case string
 * @returns Title case string
 */
export const kebabToTitle = (str: string): string => {
  return str
    .split('-')
    .map((word) => capitalizeFirst(word))
    .join(' ');
};

/**
 * Converts string to URL-friendly slug
 * @param str - String to convert
 * @returns URL slug
 */
export const toSlug = (str: string): string => {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};
