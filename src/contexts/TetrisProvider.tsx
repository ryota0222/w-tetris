import React, { useContext, createContext, useMemo } from 'react'
import { useTetris } from '@/hooks/useTetris'
import { Theme, GameTheme, GameStatus } from '@/types'
import { useDarkMode } from '@/hooks/useDarkMode'

interface TetrisContextType {
  start: (theme?: GameTheme | undefined) => void
  pause: () => void
  restart: () => void
  reset: (auto?: boolean) => void
  end: () => void
  moveLeft: () => void
  moveRight: () => void
  moveBottom: () => void
  rotate: () => void
  mode: Theme
  score: number
  in_game: boolean
  status: GameStatus
}

const TetrisContext = createContext<TetrisContextType>({
  start: () => {},
  pause: () => {},
  restart: () => {},
  reset: () => {},
  end: () => {},
  moveLeft: () => {},
  moveRight: () => {},
  moveBottom: () => {},
  rotate: () => {},
  mode: 'dark',
  score: 0,
  in_game: false,
  status: 'waiting',
})

export const TetrisProvider: React.FC = ({ children }) => {
  const {
    start,
    pause,
    restart,
    reset,
    end,
    score,
    inGame: in_game,
    moveLeft,
    moveBottom,
    moveRight,
    rotate,
    status,
  } = useTetris()
  const { isDarkMode } = useDarkMode()
  //   modeIdの値
  const mode = useMemo<Theme>(
    () => (isDarkMode ? 'dark' : 'light'),
    [isDarkMode]
  )

  const value = useMemo(
    () => ({
      start,
      pause,
      restart,
      reset,
      end,
      mode,
      score,
      in_game,
      moveLeft,
      moveBottom,
      moveRight,
      rotate,
      status,
    }),
    [
      start,
      pause,
      restart,
      reset,
      end,
      mode,
      score,
      in_game,
      moveLeft,
      moveBottom,
      moveRight,
      rotate,
      status,
    ]
  )
  return (
    <TetrisContext.Provider value={value}>{children}</TetrisContext.Provider>
  )
}

export const useTetrisContext = () => useContext(TetrisContext)
