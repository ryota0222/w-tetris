import { useTetrisContext } from '@/contexts/TetrisProvider'
import { NeumorphismBox } from '@/components/NeumorphismBox'

const ScoreBoard: React.VFC = () => {
  const { score } = useTetrisContext()
  return (
    <div className="sm:max-w-none mr-0 ml-auto" style={{ maxWidth: '120px' }}>
      <p className="dark:text-gray-300 dot-gothic mb-2 tracking-widest sm:text-sm">
        SCORE
      </p>
      <NeumorphismBox className="px-4 py-2">
        <p className="dark:text-white dot-gothic text-right w-full">
          {score.toLocaleString()}
        </p>
      </NeumorphismBox>
    </div>
  )
}

export default ScoreBoard
