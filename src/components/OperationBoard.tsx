import React, { memo } from 'react'
import { PlayLeftButton } from '@/components/play/buttons/PlayLeftButton'
import { PlayRightButton } from '@/components/play/buttons/PlayRightButton'
import { PlayBottomButton } from '@/components/play/buttons/PlayBottomButton'
import { PlayRestartButton } from '@/components/play/buttons/PlayResetButton'
import { PlayRotateButton } from '@/components/play/buttons/PlayRotateButton'
import { PlayStateChangeButton } from '@/components/play/buttons/PlayStateChangeButton'
import { NeumorphismBox } from '@/components/NeumorphismBox'
import Spacer from './Spacer'
import css from '@/styles/operationBoard.module.css'

const OperationBoard = memo(() => {
  return (
    <NeumorphismBox className="py-4 px-8 ml-4 sm:mx-2 sm:mt-6 xs:mt-2">
      {/* 移動ボタン */}
      <div
        className={`flex flex-col justify-center ${css.operation_btn_container}`}
      >
        {/* 上段 */}
        <div className="flex">
          {/* <Spacer />
          <PlayTopButton onClick={() => {}} />
          <Spacer /> */}
        </div>
        {/* 中段 */}
        <div className="flex">
          <PlayLeftButton />
          <Spacer />
          <PlayRightButton />
        </div>
        {/* 下段 */}
        <div className="flex">
          <Spacer />
          <PlayBottomButton />
          <Spacer />
        </div>
      </div>
      {/* 右側 */}
      <div className="flex flex-col justify-between">
        {/* 上側 */}
        <div className="flex mb-4">
          <PlayRestartButton />
          <Spacer />
          <PlayStateChangeButton />
        </div>
        <Spacer />
        <PlayRotateButton />
      </div>
    </NeumorphismBox>
  )
})

export default OperationBoard
