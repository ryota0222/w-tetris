import { memo } from 'react'
import PlayIconTemplate from '@/components/play/icons/PlayIconTemplate'

interface Props {
  active: boolean
}

const PlayRestartIcon: React.VFC<Props> = memo(({ active }) => {
  return <PlayIconTemplate type="restart" active={active} />
})

export default PlayRestartIcon
