// Local storage keys
const STORAGE_KEYS = {
  CART: 'shopping_complex_cart',
  USER: 'shopping_complex_user',
  THEME: 'shopping_complex_theme',
} as const;

// Helper to safely parse JSON from localStorage
const safeJSONParse = <T>(data: string | null, fallback: T): T => {
  if (!data) return fallback;
  try {
    return JSON.parse(data) as T;
  } catch {
    return fallback;
  }
};

// Type-safe localStorage wrapper
export const storage = {
  // Get item from localStorage
  get: <T>(key: keyof typeof STORAGE_KEYS, fallback: T): T => {
    if (typeof window === 'undefined') return fallback;
    const data = localStorage.getItem(STORAGE_KEYS[key]);
    return safeJSONParse(data, fallback);
  },

  // Set item in localStorage
  set: <T>(key: keyof typeof STORAGE_KEYS, value: T): void => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEYS[key], JSON.stringify(value));
  },

  // Remove item from localStorage
  remove: (key: keyof typeof STORAGE_KEYS): void => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(STORAGE_KEYS[key]);
  },

  // Clear all app-related items from localStorage
  clear: (): void => {
    if (typeof window === 'undefined') return;
    Object.values(STORAGE_KEYS).forEach(key => {
      localStorage.removeItem(key);
    });
  },
};
