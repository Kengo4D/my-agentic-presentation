/**
 * Global Slide Logic Composable
 */
export const useSlide = () => {
  // Calculate bar height safely for graphs
  const calculateBarHeight = (value: number, allValues: number[]): string => {
    const max = Math.max(...allValues, 1);
    return `${(value / max) * 100}%`;
  };

  // Resolve trend indicators
  const getTrendIcon = (trend?: 'up' | 'down' | 'stable') => {
    const icons = { up: '↑', down: '↓', stable: '→' };
    return trend ? icons[trend] : '';
  };

  return {
    calculateBarHeight,
    getTrendIcon
  };
};