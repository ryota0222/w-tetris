import React, { useState, useContext, createContext, useMemo } from 'react'
import { useTetris } from '@/hooks/useTetris'
import { Theme, GameTheme } from '@/types'
import { useDarkMode } from '@/hooks/useDarkMode'

interface TetrisContextType {
  start: (theme?: GameTheme | undefined) => void
  pause: () => void
  restart: () => void
  end: () => void
  mode: Theme
}

const TetrisContext = createContext<TetrisContextType>({
  start: () => {},
  pause: () => {},
  restart: () => {},
  end: () => {},
  mode: 'dark',
})

export const TetrisProvider: React.FC = ({ children }) => {
  const { start, pause, restart, end } = useTetris()
  const { isDarkMode } = useDarkMode()
  //   modeIdの値
  const mode = useMemo<Theme>(
    () => (isDarkMode ? 'dark' : 'light'),
    [isDarkMode]
  )

  const value = useMemo(
    () => ({ start, pause, restart, end, mode }),
    [start, pause, restart, end, mode]
  )
  return (
    <TetrisContext.Provider value={value}>{children}</TetrisContext.Provider>
  )
}

export const useTetrisContext = () => useContext(TetrisContext)
