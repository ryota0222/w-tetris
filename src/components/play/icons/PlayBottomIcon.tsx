import { memo } from 'react'
import PlayIconTemplate from './PlayIconTemplate'

interface Props {
  active: boolean
}

const PlayBottomIcon: React.VFC<Props> = memo(({ active }) => {
  return <PlayIconTemplate type="bottom" active={active} />
})

export default PlayBottomIcon
