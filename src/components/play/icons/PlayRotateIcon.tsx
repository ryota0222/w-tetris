import { memo } from 'react'
import PlayIconTemplate from '@/components/play/icons/PlayIconTemplate'

interface Props {
  active: boolean
}

const PlayRotateIcon: React.VFC<Props> = memo(({ active }) => {
  return <PlayIconTemplate type="rotate" active={active} />
})

export default PlayRotateIcon
