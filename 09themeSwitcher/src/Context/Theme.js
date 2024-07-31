import { createContext, useContext } from 'react';

export const ThemeContext = createContext({
  themeode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
})


export const ThemeProvider = ThemeContext.Provider

export default function useTheme() {
  return useContext(ThemeContext)
}