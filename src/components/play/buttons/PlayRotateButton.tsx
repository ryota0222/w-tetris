import { RectanglePlayButtonTemplate } from '@/components/play/buttons/PlayButtonTemplate'
import PlayRotateIcon from '@/components/play/icons/PlayRotateIcon'
import { useTetrisContext } from '@/contexts/TetrisProvider'
import { memo, createRef } from 'react'

export const PlayRotateButton: React.VFC = memo(() => {
  const { rotate, in_game } = useTetrisContext()
  const refRotateButton = createRef<HTMLButtonElement>()
  return (
    <RectanglePlayButtonTemplate
      onClick={() => {
        rotate()
        if (refRotateButton.current) {
          refRotateButton.current.blur()
        }
      }}
      active={in_game}
      ratio={3}
      role="button"
      ref={refRotateButton}
    >
      <PlayRotateIcon active={in_game} />
    </RectanglePlayButtonTemplate>
  )
})
