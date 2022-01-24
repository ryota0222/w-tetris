import { useDarkMode } from '@/hooks/useDarkMode'
import PlayScreen from '@/components/PlayBoard'
import { useTetrisContext } from '@/contexts/TetrisProvider'
import { useMemo, useRef } from 'react'
import { GameTheme } from '@/types'

const Home = () => {
  const { start, pause, restart, end, mode } = useTetrisContext()
  const refStartButton = useRef<null | HTMLButtonElement>(null)
  return (
    <div>
      <PlayScreen />
      <button
        onClick={() => {
          start(`${mode}-green` as GameTheme)
          if (refStartButton.current) {
            refStartButton.current.blur()
          }
        }}
        className="mr-4 text-white"
        ref={refStartButton}
      >
        start
      </button>
      <button onClick={pause} className="mr-4 text-white">
        pause
      </button>
      <button onClick={restart} className="mr-4 text-white">
        restart
      </button>
      <button onClick={end}>end</button>
    </div>
  )
}

export default Home
