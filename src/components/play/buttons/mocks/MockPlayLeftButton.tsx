import { SquarePlayButtonTemplate } from '@/components/play/buttons/PlayButtonTemplate'
import PlayLeftIcon from '@/components/play/icons/PlayLeftIcon'
import { memo } from 'react'
import { MockButtonWrapper } from '@/components/play/buttons/mocks/MockButtonWrapper'

export const MockPlayLeftButton: React.VFC = memo(() => {
  return (
    <MockButtonWrapper>
      <SquarePlayButtonTemplate onClick={() => {}} active={true}>
        <PlayLeftIcon active={true} />
      </SquarePlayButtonTemplate>
    </MockButtonWrapper>
  )
})
