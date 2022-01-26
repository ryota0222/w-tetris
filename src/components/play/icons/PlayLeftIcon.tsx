import { memo } from 'react'
import PlayIconTemplate from '@/components/play/icons/PlayIconTemplate'

interface Props {
  active: boolean
}

const PlayLeftIcon: React.VFC<Props> = memo(({ active }) => {
  return <PlayIconTemplate type="left" active={active} />
})

export default PlayLeftIcon
