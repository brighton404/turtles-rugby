// src/main.ts

// Define the available themes as a TypeScript union type
type Theme = 'light' | 'dark';

// Utility to get the current theme
function getCurrentTheme(): Theme {
    return (document.documentElement.getAttribute('data-theme') as Theme) || 'light';
}

// Utility to save the theme to localStorage
function saveTheme(theme: Theme): void {
    localStorage.setItem('theme', theme);
}

// Utility to apply a theme
function applyTheme(theme: Theme): void {
    document.documentElement.setAttribute('data-theme', theme);
}

// Initialize the theme from localStorage or default
const savedTheme = localStorage.getItem('theme') as Theme | null;
if (savedTheme) {
    applyTheme(savedTheme);
}

// Add event listener for the toggle button
const themeToggle = document.getElementById('theme-toggle');

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = getCurrentTheme();
        const newTheme: Theme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
        saveTheme(newTheme);
    });
} else {
    console.error('Theme toggle button not found!');
}
