import { PLAY_SCREEN_CANVAS_ID, NEXT_CANVAS_ID } from '@/consts'
import { useTetrisContext } from '@/contexts/TetrisProvider'
import css from '@/styles/playBoard.module.css'

const PlayBoard: React.VFC = () => {
  const { mode } = useTetrisContext()
  return (
    <>
      <canvas
        id={PLAY_SCREEN_CANVAS_ID}
        className={`${css[mode]} ${css.play_screen}`}
      ></canvas>
      <canvas id={NEXT_CANVAS_ID}></canvas>
    </>
  )
}

export default PlayBoard
