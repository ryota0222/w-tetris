import { MockPlayLeftButton } from '@/components/play/buttons/mocks/MockPlayLeftButton'
import { memo } from 'react'
import { MockPlayBottomButton } from '@/components/play/buttons/mocks/MockPlayBottomButton'
import { MockPlayPauseButton } from '@/components/play/buttons/mocks/MockPlayPauseButton'
import { MockPlayRestartButton } from '@/components/play/buttons/mocks/MockPlayResetButton'
import { MockPlayRightButton } from '@/components/play/buttons/mocks/MockPlayRightButton'
import { MockPlayRotateButton } from '@/components/play/buttons/mocks/MockPlayRotateButton'
import { MockPlayStartButton } from '@/components/play/buttons/mocks/MockPlayStartButton'
import Spacer from '@/components/Spacer'

const DescriptionBoard: React.VFC = memo(() => {
  return (
    <div
      className="w-full rounded-md border-2 border-gray-500 text-white"
      style={{ maxWidth: '240px' }}
    >
      {/* 左 */}
      <Row>
        <MockPlayLeftButton />
        <span className="dot-gothic sm:text-xs ml-1 text-sm">LEFT</span>
      </Row>
      {/* 右 */}
      <Row>
        <MockPlayRightButton />
        <span className="dot-gothic sm:text-xs ml-1 text-sm">RIGHT</span>
      </Row>
      {/* 下 */}
      <Row>
        <MockPlayBottomButton />
        <span className="dot-gothic sm:text-xs ml-1 text-sm">BOTTOM</span>
      </Row>
      <Spacer />
      {/* 回転 */}
      <Row>
        <MockPlayRotateButton />
        <span className="dot-gothic sm:text-xs ml-1 text-sm">ROTATE</span>
      </Row>
      <Spacer />
      {/* リスタート */}
      <Row>
        <MockPlayRestartButton />
        <span className="dot-gothic sm:text-xs ml-1 text-sm">RESTART</span>
      </Row>
      {/* 停止 */}
      <Row>
        <MockPlayPauseButton />
        <span className="dot-gothic sm:text-xs ml-1 text-sm">PAUSE</span>
      </Row>
      {/* スタート */}
      <Row>
        <MockPlayStartButton />
        <span className="dot-gothic sm:text-xs ml-1 text-sm">PLAY</span>
      </Row>
    </div>
  )
})

const Row: React.FC = memo(({ children }) => {
  return <div className="flex items-center mb-1 sm:mb-0 sm:h-7">{children}</div>
})

export default DescriptionBoard
