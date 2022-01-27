import { RoundPlayButtonTemplate } from '@/components/play/buttons/PlayButtonTemplate'
import PlayStartIcon from '@/components/play/icons/PlayStartIcon'
import { memo } from 'react'
import { MockButtonWrapper } from '@/components/play/buttons/mocks/MockButtonWrapper'

export const MockPlayStartButton: React.VFC = memo(() => {
  return (
    <MockButtonWrapper>
      <RoundPlayButtonTemplate onClick={() => {}} active={true}>
        <PlayStartIcon active={true} />
      </RoundPlayButtonTemplate>
    </MockButtonWrapper>
  )
})
