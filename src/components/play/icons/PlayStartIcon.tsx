import { memo } from 'react'
import PlayIconTemplate from './PlayIconTemplate'

interface Props {
  active: boolean
}

const PlayStartIcon: React.VFC<Props> = memo(({ active }) => {
  return <PlayIconTemplate type="start" active={active} />
})

export default PlayStartIcon
