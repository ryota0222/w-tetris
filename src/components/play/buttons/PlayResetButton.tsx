import { RoundPlayButtonTemplate } from '@/components/play/buttons/PlayButtonTemplate'
import PlayRestartIcon from '@/components/play/icons/PlayResetIcon'
import { useTetrisContext } from '@/contexts/TetrisProvider'
import { memo, createRef } from 'react'

export const PlayRestartButton: React.VFC = memo(() => {
  const { reset } = useTetrisContext()
  const refRestartButton = createRef<HTMLButtonElement>()
  return (
    <RoundPlayButtonTemplate
      onClick={() => {
        reset(true)
        if (refRestartButton.current) {
          refRestartButton.current.blur()
        }
      }}
      active={true}
      role="button"
      ref={refRestartButton}
    >
      <PlayRestartIcon active={true} />
    </RoundPlayButtonTemplate>
  )
})
