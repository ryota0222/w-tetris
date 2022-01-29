import { useTetrisContext } from '@/contexts/TetrisProvider'
import { RoundPlayButtonTemplate } from '@/components/play/buttons/PlayButtonTemplate'
import PlayPauseIcon from '@/components/play/icons/PlayPauseIcon'
import PlayStartIcon from '@/components/play/icons/PlayStartIcon'
import { createRef, memo } from 'react'

export const PlayStateChangeButton: React.VFC = memo(() => {
  const { in_game, pause, restart, start, status } = useTetrisContext()
  const refStartButton = createRef<HTMLButtonElement>()
  const refPauseButton = createRef<HTMLButtonElement>()
  if (in_game) {
    return (
      <RoundPlayButtonTemplate
        onClick={() => {
          pause()
          if (refPauseButton.current) {
            refPauseButton.current.blur()
          }
        }}
        active={status !== 'end'}
        role="button"
        ref={refPauseButton}
      >
        <PlayPauseIcon active={status !== 'end'} />
      </RoundPlayButtonTemplate>
    )
  } else {
    return (
      <RoundPlayButtonTemplate
        onClick={() => {
          if (status === 'waiting') {
            start()
          } else if (status === 'pause') {
            restart()
          }
          if (refStartButton.current) {
            refStartButton.current.blur()
          }
        }}
        active={true}
        role="button"
        ref={refStartButton}
      >
        <PlayStartIcon active={true} />
      </RoundPlayButtonTemplate>
    )
  }
})
