import { useCallback, useEffect, useState } from 'react'
import * as gm from '@/libs/game'
import { GameTheme } from '@/types'

type UseTetris = () => {
  start: (theme?: GameTheme) => void
  pause: () => void
  restart: () => void
  end: () => void
  processing: boolean
}

export const useTetris: UseTetris = () => {
  const [game, setGame] = useState<null | gm.Game>(null)
  const [processing, setProcessing] = useState(false)

  useEffect(() => {
    // 画像のセット
    gm.Asset.init()
    // ゲームの初期化
    setGame(new gm.Game())
  }, [])
  // ゲーム開始
  const start = useCallback(
    (theme?: GameTheme) => {
      if (game && !processing) {
        console.log(theme)
        game.start(theme ?? 'light-green')
        setProcessing(true)
      }
    },
    [game]
  )
  // ゲーム一時停止
  const pause = useCallback(() => {
    if (game && processing) {
      game.pause()
      setProcessing(false)
    }
  }, [game, processing])
  // ゲーム再開
  const restart = useCallback(() => {
    if (game && !processing) {
      game.restart()
      setProcessing(true)
    }
  }, [game, processing])
  // ゲーム終了
  const end = useCallback(() => {
    if (game) {
      game.forceEnd()
      setProcessing(false)
    }
  }, [game])
  return { start, pause, restart, end, processing }
}
