import { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/theme';
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';
import './App.css';

function App() {
  const [themeMode, setThemeMode] = useState('light');

  const lightTheme = () => {
    setThemeMode('light');
  };

  const darkTheme = () => {
    setThemeMode('dark');
  };

  // Synchronize HTML root element with the current themeMode
  useEffect(() => {
    const html = document.querySelector('html');
    html.classList.remove('light', 'dark');
    html.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 relative isolate px-6 py-12 sm:py-20 lg:px-8">
        {/* Background Ambient Glow */}
        <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
          <div 
            style={{
              clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
            }} 
            className="mx-auto aspect-1155/678 w-288.75 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-25 dark:opacity-20"
          />
        </div>

        {/* Top Navbar / Header with Theme Switcher */}
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 pb-10 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌓</span>
            <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              Theme Switcher
            </h1>
          </div>
          
          {/* Theme Switcher Button consuming useContext */}
          <div className="p-2 bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 backdrop-blur-md">
            <ThemeBtn />
          </div>
        </div>

        {/* Page Content */}
        <div className="mx-auto max-w-4xl text-center mt-12">
          <h2 className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">
            Pricing Plans
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Choose the right plan for you
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-gray-600 dark:text-gray-400">
            Toggle between Light and Dark mode using React's <code className="text-indigo-600 dark:text-indigo-400 font-mono bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded">useContext</code> hook.
          </p>
        </div>

        {/* Pricing Cards Component */}
        <Card />
      </div>
    </ThemeProvider>
  );
}

export default App;
