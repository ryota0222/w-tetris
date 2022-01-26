import { SquarePlayButtonTemplate } from '@/components/play/buttons/PlayButtonTemplate'
import PlayRightIcon from '@/components/play/icons/PlayRightIcon'
import { memo } from 'react'
import { MockButtonWrapper } from '@/components/play/buttons/mocks/MockButtonWrapper'

export const MockPlayRightButton: React.VFC = memo(() => {
  return (
    <MockButtonWrapper>
      <SquarePlayButtonTemplate onClick={() => {}} active={true}>
        <PlayRightIcon active={true} />
      </SquarePlayButtonTemplate>
    </MockButtonWrapper>
  )
})
