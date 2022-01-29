import { useCallback, useEffect, useState } from 'react'
import * as gm from '@/libs/game'
import { GameStatus, GameTheme } from '@/types'

type UseTetris = () => {
  start: (theme?: GameTheme) => void
  pause: () => void
  restart: () => void
  reset: (auto?: boolean) => void
  end: () => void
  moveLeft: () => void
  moveRight: () => void
  moveBottom: () => void
  rotate: () => void
  inGame: boolean
  score: number
  status: GameStatus
}

export const useTetris: UseTetris = () => {
  const [game, setGame] = useState<null | gm.Game>(null)
  const [status, setStatus] = useState<GameStatus>('waiting')
  const [inGame, setInGame] = useState(false)
  const [score, setScore] = useState(0)

  useEffect(() => {
    // 画像のセット
    gm.Asset.init()
    // ゲームの初期化
    setGame(new gm.Game())
  }, [])
  // 値の変更検知
  useEffect(() => {
    if (game) {
      game.addObserver(
        (propertyName: string, oldValue: number, newValue: number) => {
          if (propertyName === 'score_change') {
            setScore(newValue)
          } else if (propertyName === 'game_end') {
            setStatus('end')
            setInGame(false)
          }
        }
      )
    }
  }, [game])
  // ゲーム開始
  const start = useCallback(
    (theme?: GameTheme) => {
      if (game && !inGame) {
        game.start(theme ?? 'dark-green')
        setInGame(true)
        setStatus('in')
      }
    },
    [game]
  )
  // ゲーム一時停止
  const pause = useCallback(() => {
    if (game && inGame) {
      game.pause()
      setInGame(false)
      setStatus('pause')
    }
  }, [game, inGame])
  // ゲーム再開
  const restart = useCallback(() => {
    if (game && !inGame) {
      game.restart()
      setInGame(true)
      setStatus('in')
    }
  }, [game, inGame])
  // ゲームリセット
  const reset = useCallback(
    (auto?: boolean) => {
      if (game) {
        game.init()
        setInGame(false)
        setStatus('waiting')
        if (auto) {
          game.start('dark-green')
          setInGame(true)
          setStatus('in')
        }
      }
    },
    [game, inGame]
  )
  // ゲーム終了
  const end = useCallback(() => {
    if (game) {
      game.forceEnd()
      setInGame(false)
      setStatus('end')
    }
  }, [game])
  // 左に移動
  const moveLeft = useCallback(() => {
    if (game && inGame) {
      game.moveLeft()
      game.drawAll()
    }
  }, [game, inGame])
  // 右に移動
  const moveRight = useCallback(() => {
    if (game && inGame) {
      game.moveRight()
      game.drawAll()
    }
  }, [game, inGame])
  // 下に移動
  const moveBottom = useCallback(() => {
    if (game && inGame) {
      game.moveBottom()
      game.drawAll()
    }
  }, [game, inGame])
  // 回転
  const rotate = useCallback(() => {
    if (game && inGame) {
      game.rotate()
      game.drawAll()
    }
  }, [game, inGame])
  return {
    start,
    pause,
    restart,
    reset,
    end,
    inGame,
    score,
    status,
    moveLeft,
    moveRight,
    moveBottom,
    rotate,
  }
}
