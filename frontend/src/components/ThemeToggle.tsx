import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button 
      onClick={toggleTheme}
      className="theme-toggle-btn"
      aria-label="Toggle theme"
    >
      <div className="relative">
        <div className={`toggle-circle ${theme === 'dark' ? 'translate-x-6' : ''}`}>
          {theme === 'light' ? (
            <FaSun className="text-amber-400" />
          ) : (
            <FaMoon className="text-slate-200" />
          )}
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;