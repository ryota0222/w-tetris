import { SquarePlayButtonTemplate } from '@/components/play/buttons/PlayButtonTemplate'
import PlayTopIcon from '@/components/play/icons/PlayTopIcon'
import { memo } from 'react'

interface Props {
  onClick: (args: unknown) => any
}

export const PlayTopButton: React.FC<Props> = memo(({ onClick }) => {
  return (
    <SquarePlayButtonTemplate onClick={onClick} active={true} role="button">
      <PlayTopIcon active={true} />
    </SquarePlayButtonTemplate>
  )
})
