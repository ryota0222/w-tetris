import { SquarePlayButtonTemplate } from '@/components/play/buttons/PlayButtonTemplate'
import PlayLeftIcon from '@/components/play/icons/PlayLeftIcon'
import { useTetrisContext } from '@/contexts/TetrisProvider'
import { memo, createRef } from 'react'

export const PlayLeftButton: React.VFC = memo(() => {
  const { moveLeft, in_game } = useTetrisContext()
  const refLeftButton = createRef<HTMLButtonElement>()
  return (
    <SquarePlayButtonTemplate
      onClick={() => {
        moveLeft()
        if (refLeftButton.current) {
          refLeftButton.current.blur()
        }
      }}
      active={in_game}
      role="button"
      allowLongPress={true}
      ref={refLeftButton}
    >
      <PlayLeftIcon active={in_game} />
    </SquarePlayButtonTemplate>
  )
})
