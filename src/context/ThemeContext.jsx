import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const saved = localStorage.getItem("moodify_theme");
  const [theme, setTheme] = useState(saved || "light");

  useEffect(() => {
    localStorage.setItem("moodify_theme", theme);
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  const isDarkMode = theme === "dark";

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, isDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
