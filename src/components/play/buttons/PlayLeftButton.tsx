import { SquarePlayButtonTemplate } from '@/components/play/buttons/PlayButtonTemplate'
import PlayLeftIcon from '@/components/play/icons/PlayLeftIcon'
import { useTetrisContext } from '@/contexts/TetrisProvider'
import { memo } from 'react'

export const PlayLeftButton: React.VFC = memo(() => {
  const { moveLeft, in_game } = useTetrisContext()
  return (
    <SquarePlayButtonTemplate onClick={moveLeft} active={in_game} role="button">
      <PlayLeftIcon active={in_game} />
    </SquarePlayButtonTemplate>
  )
})
