import { SquarePlayButtonTemplate } from '@/components/play/buttons/PlayButtonTemplate'
import PlayBottomIcon from '@/components/play/icons/PlayBottomIcon'
import { useTetrisContext } from '@/contexts/TetrisProvider'
import { memo } from 'react'

export const PlayBottomButton: React.VFC = memo(() => {
  const { moveBottom, in_game } = useTetrisContext()
  return (
    <SquarePlayButtonTemplate
      onClick={moveBottom}
      active={in_game}
      role="button"
    >
      <PlayBottomIcon active={in_game} />
    </SquarePlayButtonTemplate>
  )
})
