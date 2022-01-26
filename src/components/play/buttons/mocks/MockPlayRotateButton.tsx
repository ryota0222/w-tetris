import { SquarePlayButtonTemplate } from '@/components/play/buttons/PlayButtonTemplate'
import PlayRotateIcon from '@/components/play/icons/PlayRotateIcon'
import { memo } from 'react'
import { MockButtonWrapper } from '@/components/play/buttons/mocks/MockButtonWrapper'

export const MockPlayRotateButton: React.VFC = memo(() => {
  return (
    <MockButtonWrapper>
      <SquarePlayButtonTemplate onClick={() => {}} active={false}>
        <PlayRotateIcon active={false} />
      </SquarePlayButtonTemplate>
    </MockButtonWrapper>
  )
})
