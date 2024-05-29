const cache: Record<string, any> = {};

export const useOrCraete = <T>(key: string, callback: () => T): T => {
  if (!cache[key]) cache[key] = callback();
  return cache[key] as T;
};
