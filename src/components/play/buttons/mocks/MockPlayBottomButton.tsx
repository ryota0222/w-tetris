import { SquarePlayButtonTemplate } from '@/components/play/buttons/PlayButtonTemplate'
import PlayBottomIcon from '@/components/play/icons/PlayBottomIcon'
import { memo } from 'react'
import { MockButtonWrapper } from '@/components/play/buttons/mocks/MockButtonWrapper'

export const MockPlayBottomButton: React.VFC = memo(() => {
  return (
    <MockButtonWrapper>
      <SquarePlayButtonTemplate active={true} onClick={() => {}}>
        <PlayBottomIcon active={true} />
      </SquarePlayButtonTemplate>
    </MockButtonWrapper>
  )
})
