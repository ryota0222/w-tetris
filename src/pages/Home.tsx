import PlayBoard from '@/components/PlayBoard'
import ScoreBoard from '@/components/ScoreBoard'
import NextBoard from '@/components/NextBoard'
import css from '@/styles/home.module.css'
import DescriptionBoard from '@/components/DescriptionBoard'
import OperationBoard from '@/components/OperationBoard'
import Spacer from '@/components/Spacer'
import { useModalContext } from '@/contexts/ModalProvider'
import { useTetrisContext } from '@/contexts/TetrisProvider'
import { useEffect } from 'react'
import ModalContainer from '@/components/ModalContainer'
import modalCss from '@/styles/modal.module.css'

const preventUserScale = (e: MouseEvent) => {
  e.preventDefault()
}

const Home = () => {
  const { openModal, closeModal } = useModalContext()
  const { status, start, reset, pause } = useTetrisContext()
  useEffect(() => {
    // ゲーム終了時モーダルを開く
    if (status === 'end') {
      openModal()
    }
    if (status === 'in') {
      // ゲーム中ダブルタップによる拡縮を防ぐ
      document.addEventListener('dblclick', preventUserScale, {
        passive: false,
      })
      // ゲーム中長押しによる効果を無効化
      document.body.style.userSelect = 'none'
      ;(document.body.style as any).webkitTouchCallout = 'none'
    } else {
      // 解除
      document.removeEventListener('dblclick', preventUserScale)
      document.body.style.userSelect = 'initial'
      ;(document.body.style as any).webkitTouchCallout = 'initial'
    }
  }, [status])
  return (
    <>
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
      <ModalContainer>
        <div className="pt-8 pb-2 flex flex-col items-center justify-between h-full">
          {/* タイトル */}
          <img
            src="/images/game_over.png"
            alt="game over"
            width="151"
            height="26"
            className="w-3/5"
          />
          {/* 広告　 */}
          <div className="mt-6">
            <a
              href="https://px.a8.net/svt/ejp?a8mat=3N3RI4+6EERW2+50+2HRYB5"
              rel="nofollow"
            >
              <img
                width="234"
                height="60"
                alt=""
                src="https://www22.a8.net/svt/bgt?aid=220205308387&wid=001&eno=01&mid=s00000000018015079000&mc=1"
              />
            </a>
          </div>
          <img
            width="1"
            height="1"
            src="https://www11.a8.net/0.gif?a8mat=3N3RI4+6EERW2+50+2HRYB5"
            alt=""
          ></img>
          {/* シェアボタン */}
          <a
            href="http://twitter.com/share?url=https://w-tetris.vercel.app/&text=w-tetirs&via=RyoTa___0222"
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-2 p-2 my-4"
          >
            <svg
              width="32"
              height="24"
              viewBox="0 0 16 14"
              fill="none"
              className="mt-1"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16 1.65735C15.4121 1.93846 14.7791 2.12857 14.1152 2.21351C14.7932 1.77667 15.3135 1.084 15.5586 0.258868C14.9238 0.663347 14.2222 0.957601 13.4728 1.11535C12.8755 0.428746 12.0218 0 11.0771 0C9.26548 0 7.79574 1.58252 7.79574 3.53413C7.79574 3.81119 7.82391 4.08018 7.88026 4.33904C5.15208 4.19141 2.73381 2.78584 1.11381 0.645142C0.831132 1.16894 0.669596 1.77667 0.669596 2.42384C0.669596 3.64941 1.24905 4.73139 2.12995 5.3654C1.59277 5.34821 1.08563 5.18743 0.642365 4.92452V4.968C0.642365 6.68097 1.77402 8.10979 3.27663 8.43337C3.00147 8.51629 2.71128 8.55774 2.41169 8.55774C2.20039 8.55774 1.99378 8.53651 1.79374 8.49505C2.21166 9.89859 3.42313 10.9209 4.86001 10.9482C3.7368 11.8967 2.32059 12.462 0.783234 12.462C0.518398 12.462 0.256383 12.4458 0 12.4134C1.45284 13.4145 3.17896 14 5.03187 14C11.0705 14 14.3715 8.61538 14.3715 3.94467C14.3715 3.79097 14.3687 3.63727 14.3631 3.4866C15.0045 2.98808 15.5614 2.3662 16 1.65735Z"
                fill="white"
              />
            </svg>
            <span className="text-white dot-gothic text-2xl">share</span>
          </a>
          <button
            className={`${modalCss.gradient_fill_btn} dot-gothic text-white my-4 tracking-wider`}
            onClick={() => {
              closeModal()
              start()
            }}
          >
            RETRY
          </button>
          <button
            className={`${modalCss.gradient_border_btn} dot-gothic tracking-wider`}
            onClick={() => {
              reset()
              closeModal()
              setTimeout(() => pause(), 0)
            }}
          >
            QUIT
          </button>
          <Spacer />
          <span className="text-xs text-white mt-12">© 2022 RyoTa.</span>
        </div>
      </ModalContainer>
    </>
  )
}

export default Home
