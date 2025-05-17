import React, { useEffect, useState } from "react";
import Button, { ButtonColor, ButtonState } from "../lib/button";
import Icons from "../lib/icons";

const THEME_KEY = "preferred-theme";

const getInitialTheme = (): "light" | "dark" => {
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === "light" || stored === "dark") {
    return stored;
  }
  // fallback to system preference
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
   <Button onClick={toggleTheme} color={ButtonColor.Optimal} state={ButtonState.Default} icon={<Icons variant="sun" />} isOutlined={false} disabled={false}  >theme</Button>
  );
};
