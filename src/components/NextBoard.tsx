import { NEXT_CANVAS_ID } from '@/consts'
import { NeumorphismBox } from '@/components/NeumorphismBox'

const NextBoard = () => {
  return (
    <div className="sm:max-w-none mr-0 ml-auto" style={{ maxWidth: '120px' }}>
      <p className="dark:text-gray-300 dot-gothic tracking-widest mb-2 sm:text-sm">
        NEXT
      </p>
      <NeumorphismBox className="px-4 py-2">
        <canvas id={NEXT_CANVAS_ID} className="m-auto"></canvas>
      </NeumorphismBox>
    </div>
  )
}

export default NextBoard
