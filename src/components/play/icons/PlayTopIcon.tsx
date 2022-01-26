import { memo } from 'react'
import PlayIconTemplate from './PlayIconTemplate'

interface Props {
  active: boolean
}

const PlayTopIcon: React.VFC<Props> = memo(({ active }) => {
  return <PlayIconTemplate type="top" active={active} />
})

export default PlayTopIcon
