import { useTetris } from '@/hooks/useTetris'
import { PLAY_SCREEN_CANVAS_ID, NEXT_CANVAS_ID } from '@/consts'
import { useMemo, useRef } from 'react'
import { useDarkMode } from '@/hooks/useDarkMode'
import { GameTheme } from '@/types'

const PlayScreen: React.VFC = () => {
  const refStartButton = useRef<null | HTMLButtonElement>(null)
  const { start, pause, restart, end } = useTetris()
  const { isDarkMode } = useDarkMode()
  //   modeIdの値
  const modeValue = useMemo(() => (isDarkMode ? 'dark' : 'light'), [isDarkMode])
  return (
    <>
      <div className="flex">
        <canvas id={PLAY_SCREEN_CANVAS_ID}></canvas>
        <canvas id={NEXT_CANVAS_ID}></canvas>
      </div>
      <button
        onClick={() => {
          start(`${modeValue}-green` as GameTheme)
          if (refStartButton.current) {
            refStartButton.current.blur()
          }
        }}
        className="mr-4"
        ref={refStartButton}
      >
        start
      </button>
      <button onClick={pause} className="mr-4">
        pause
      </button>
      <button onClick={restart} className="mr-4">
        restart
      </button>
      <button onClick={end}>end</button>
    </>
  )
}

export default PlayScreen
