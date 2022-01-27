import { SquarePlayButtonTemplate } from '@/components/play/buttons/PlayButtonTemplate'
import PlayRightIcon from '@/components/play/icons/PlayRightIcon'
import { useTetrisContext } from '@/contexts/TetrisProvider'
import { memo } from 'react'

export const PlayRightButton: React.VFC = memo(() => {
  const { moveRight, in_game } = useTetrisContext()

  return (
    <SquarePlayButtonTemplate
      onClick={moveRight}
      active={in_game}
      role="button"
      allowLongPress={true}
    >
      <PlayRightIcon active={in_game} />
    </SquarePlayButtonTemplate>
  )
})
