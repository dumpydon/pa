"use client";

import { Moon, Sun } from "./Icons";

export function ThemeToggle() {
  function toggleTheme() {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    document.documentElement.style.colorScheme = next;
    localStorage.setItem("pa-theme", next);
  }

  return (
    <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label="Toggle color theme">
      <Sun className="theme-icon theme-icon-sun" />
      <Moon className="theme-icon theme-icon-moon" />
    </button>
  );
}
