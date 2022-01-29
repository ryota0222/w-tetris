import { SquarePlayButtonTemplate } from '@/components/play/buttons/PlayButtonTemplate'
import PlayRightIcon from '@/components/play/icons/PlayRightIcon'
import { useTetrisContext } from '@/contexts/TetrisProvider'
import { memo, createRef } from 'react'

export const PlayRightButton: React.VFC = memo(() => {
  const { moveRight, in_game } = useTetrisContext()
  const refRightButton = createRef<HTMLButtonElement>()
  return (
    <SquarePlayButtonTemplate
      onClick={() => {
        moveRight()
        if (refRightButton.current) {
          refRightButton.current.blur()
        }
      }}
      active={in_game}
      role="button"
      allowLongPress={true}
      ref={refRightButton}
    >
      <PlayRightIcon active={in_game} />
    </SquarePlayButtonTemplate>
  )
})
