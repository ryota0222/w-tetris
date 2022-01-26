import { RectanglePlayButtonTemplate } from '@/components/play/buttons/PlayButtonTemplate'
import PlayRotateIcon from '@/components/play/icons/PlayRotateIcon'
import { useTetrisContext } from '@/contexts/TetrisProvider'
import { memo } from 'react'

export const PlayRotateButton: React.VFC = memo(() => {
  const { rotate, in_game } = useTetrisContext()

  return (
    <RectanglePlayButtonTemplate
      onClick={rotate}
      active={in_game}
      ratio={3}
      role="button"
    >
      <PlayRotateIcon active={in_game} />
    </RectanglePlayButtonTemplate>
  )
})
