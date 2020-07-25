export const percentageFormatter = (percentage: number): string => {
  return `${percentage > 0 ? '+' : ''}${Number(percentage).toFixed(2)}%`;
};
