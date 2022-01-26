import { memo } from 'react'
import PlayIconTemplate from './PlayIconTemplate'

interface Props {
  active: boolean
}

const PlayRightIcon: React.VFC<Props> = memo(({ active }) => {
  return <PlayIconTemplate type="right" active={active} />
})

export default PlayRightIcon
