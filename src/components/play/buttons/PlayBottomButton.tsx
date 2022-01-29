import { SquarePlayButtonTemplate } from '@/components/play/buttons/PlayButtonTemplate'
import PlayBottomIcon from '@/components/play/icons/PlayBottomIcon'
import { useTetrisContext } from '@/contexts/TetrisProvider'
import { memo, createRef } from 'react'

export const PlayBottomButton: React.VFC = memo(() => {
  const { moveBottom, in_game } = useTetrisContext()
  const refBottomButton = createRef<HTMLButtonElement>()
  return (
    <SquarePlayButtonTemplate
      onClick={() => {
        moveBottom()
        if (refBottomButton.current) {
          refBottomButton.current.blur()
        }
      }}
      active={in_game}
      role="button"
      allowLongPress={true}
      ref={refBottomButton}
    >
      <PlayBottomIcon active={in_game} />
    </SquarePlayButtonTemplate>
  )
})
