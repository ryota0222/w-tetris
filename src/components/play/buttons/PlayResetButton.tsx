import { RoundPlayButtonTemplate } from '@/components/play/buttons/PlayButtonTemplate'
import PlayRestartIcon from '@/components/play/icons/PlayResetIcon'
import { useTetrisContext } from '@/contexts/TetrisProvider'
import { memo } from 'react'

export const PlayRestartButton: React.VFC = memo(() => {
  const { reset } = useTetrisContext()
  return (
    <RoundPlayButtonTemplate onClick={reset} active={true} role="button">
      <PlayRestartIcon active={true} />
    </RoundPlayButtonTemplate>
  )
})
