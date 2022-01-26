import { SquarePlayButtonTemplate } from '@/components/play/buttons/PlayButtonTemplate'
import PlayPauseIcon from '@/components/play/icons/PlayPauseIcon'
import { memo } from 'react'
import { MockButtonWrapper } from '@/components/play/buttons/mocks/MockButtonWrapper'

export const MockPlayPauseButton: React.VFC = memo(() => {
  return (
    <MockButtonWrapper>
      <SquarePlayButtonTemplate onClick={() => {}} active={true}>
        <PlayPauseIcon active={true} />
      </SquarePlayButtonTemplate>
    </MockButtonWrapper>
  )
})
