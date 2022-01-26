import { MockPlayLeftButton } from '@/components/play/buttons/mocks/MockPlayLeftButton'
import { memo } from 'react'
import Spacer from './Spacer'

const DescriptionBoard: React.VFC = memo(() => {
  return (
    <div className="rounded-md border-2 border-gray-500 text-white">
      {/* 左 */}
      <Row>
        <MockPlayLeftButton />
        <span className="dot-gothic sm:text-sm ml-1">LEFT</span>
      </Row>
      {/* 右 */}
      {/* 下 */}
      <Spacer />
      {/* 回転 */}
      <Spacer />
      {/* リスタート */}
      {/* 停止 */}
      {/* スタート */}
    </div>
  )
})

const Row: React.FC = memo(({ children }) => {
  return <div className="flex items-center mb-1">{children}</div>
})

export default DescriptionBoard
