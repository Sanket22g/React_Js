import React from 'react';
import useTheme from '../contexts/theme';

export default function ThemeBtn() {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    if (darkModeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer select-none">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        onChange={onChangeBtn}
        checked={themeMode === 'dark'}
      />
      {/* Switch Track */}
      <div className="jelly w-14 h-8 bg-gray-200 peer-focus:outline-none ring-2 ring-transparent peer-focus:ring-indigo-500 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600 transition-colors shadow-inner"></div>

      {/* Label Text with Icon */}
      <span className="ml-3 text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-1.5">
        {themeMode === 'dark' ? (
          <>
            <span>🌙</span>
            <span>Dark Mode</span>
          </>
        ) : (
          <>
            <span>☀️</span>
            <span>Light Mode</span>
          </>
        )}
      </span>
    </label>
  );
}
