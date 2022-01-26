import { RoundPlayButtonTemplate } from '@/components/play/buttons/PlayButtonTemplate'
import PlayRestartIcon from '@/components/play/icons/PlayResetIcon'
import { memo } from 'react'
import { MockButtonWrapper } from '@/components/play/buttons/mocks/MockButtonWrapper'

export const MockPlayRestartButton: React.VFC = memo(() => {
  return (
    <MockButtonWrapper>
      <RoundPlayButtonTemplate onClick={() => {}} active={true}>
        <PlayRestartIcon active={true} />
      </RoundPlayButtonTemplate>
    </MockButtonWrapper>
  )
})
