import PlayBoard from '@/components/PlayBoard'
import ScoreBoard from '@/components/ScoreBoard'
import NextBoard from '@/components/NextBoard'
import css from '@/styles/home.module.css'
import DescriptionBoard from '@/components/DescriptionBoard'
import OperationBoard from '@/components/OperationBoard'
import Spacer from '@/components/Spacer'

const Home = () => {
  return (
    <div className="flex flex-col h-full">
      <Spacer />
      <div
        className={`grid grid-cols-5 grid-row-4 sm:grid-cols-5 sm:grid-rows-11 ${css.container}`}
      >
        <div className="row-start-1 row-span-4 col-start-1 col-end-3 sm:col-end-4 sm:row-end-9">
          <div className="flex box-border px-2">
            <PlayBoard />
          </div>
        </div>
        <div className="row-start-1 row-span-3 col-start-3 col-end-6 sm:col-start-4 sm:col-end-6 sm:row-span-8 pl-4 sm:pl-4 sm:mr-2">
          <div
            className={`pl-8 sm:pl-0 flex sm:flex-col justify-between h-full pb-4 sm:pb-2 ${css.panels}`}
          >
            <div className="space-y-4">
              <ScoreBoard />
              <NextBoard />
            </div>
            <DescriptionBoard />
          </div>
        </div>
        <div className="row-start-4 col-start-3 col-end-6 sm:col-span-full sm:row-start-9 sm:row-end-12 pl-8 sm:pl-0 flex flex-col">
          <Spacer />
          <OperationBoard />
        </div>
      </div>
      <Spacer />
    </div>
  )
}

export default Home
