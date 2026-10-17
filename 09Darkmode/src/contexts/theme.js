import { createContext, useContext } from 'react';

// 1. Create Context with default state and dummy methods
export const ThemeContext = createContext({
  themeMode: 'light',
  darkTheme: () => {},
  lightTheme: () => {},
});

// 2. Export the Provider directly for concise syntax
export const ThemeProvider = ThemeContext.Provider;

// 3. Export custom hook so components can simply call `useTheme()`
export default function useTheme() {
  return useContext(ThemeContext);
}
