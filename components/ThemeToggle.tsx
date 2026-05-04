'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function ThemeToggle() {
  const { theme, systemTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<string>('system');

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      if (theme === 'system') {
        setCurrentTheme(systemTheme || 'dark');
      } else {
        setCurrentTheme(theme || 'dark');
      }
    }
  }, [theme, systemTheme, mounted]);

  const cycleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

  if (!mounted) return null;

  const getIcon = () => {
    if (theme === 'system') {
      return <Monitor className="h-5 w-5 text-text-secondary" />;
    }
    return currentTheme === 'dark' ? (
      <Sun className="h-5 w-5 text-yellow-400" />
    ) : (
      <Moon className="h-5 w-5 text-text-secondary" />
    );
  };

  return (
    <button
      onClick={cycleTheme}
      className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-surface transition-colors"
      aria-label={`Current theme: ${theme || 'system'}. Click to cycle themes`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {getIcon()}
        </motion.div>
      </AnimatePresence>
    </button>
  );
}
