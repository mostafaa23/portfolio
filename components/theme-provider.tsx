'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'

type Theme = 'dark' | 'light'

type ThemeContextValue = {
  theme: Theme
  setTheme: (nextTheme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('dark')
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme')

    if (savedTheme === 'light' || savedTheme === 'dark') {
      setThemeState(savedTheme)
    } else {
      window.localStorage.setItem('portfolio-theme', 'dark')
      setThemeState('dark')
    }

    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) {
      return
    }

    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    window.localStorage.setItem('portfolio-theme', theme)
  }, [theme, hydrated])

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      setTheme: (nextTheme: Theme) => setThemeState(nextTheme),
      toggleTheme: () => setThemeState((current) => (current === 'dark' ? 'light' : 'dark')),
    }),
    [theme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}
