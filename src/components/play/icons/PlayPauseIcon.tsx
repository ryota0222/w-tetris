import { memo } from 'react'
import PlayIconTemplate from '@/components/play/icons/PlayIconTemplate'

interface Props {
  active: boolean
}

const PlayPauseIcon: React.VFC<Props> = memo(({ active }) => {
  return <PlayIconTemplate type="pause" active={active} />
})

export default PlayPauseIcon
