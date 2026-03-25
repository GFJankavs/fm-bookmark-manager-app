import { useEffect, useState, useCallback } from "react";

const STORAGE_KEY = "darkMode";

const getInitialMode = (): boolean => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored !== null) return JSON.parse(stored);
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

const applyClass = (isDark: boolean) => {
  document.documentElement.classList.toggle("dark", isDark);
};

export const useThemeMode = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(getInitialMode);

  useEffect(() => {
    applyClass(isDarkMode);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const setDarkMode = useCallback((value: boolean) => {
    setIsDarkMode(value);
  }, []);

  return { isDarkMode, setDarkMode };
};
