
export const getDayIndexInWeekStartsWithMonday = (defaultIndex: number): number => {
  const maxIndex = 6;

  return defaultIndex === 0 ? maxIndex : defaultIndex - 1;
}
