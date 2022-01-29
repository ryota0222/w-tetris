import Layout from '@/components/Layout'
import { TetrisProvider } from '@/contexts/TetrisProvider'
import { ModalProvider } from '@/contexts/ModalProvider'
import { useEffect } from 'react'
import { useOrientation } from 'react-use'
import { useSp } from '@/hooks/useSp'

export const AppProvider: React.FC = ({ children }) => {
  const state = useOrientation({
    angle: 0,
    type: 'portrait-primary',
  })
  const { isSp } = useSp()
  useEffect(() => {
    // vhの値の保存
    setFillHeight()
    // イベントの生成
    if (window) {
      window.addEventListener('resize', setFillHeight)
    }
    return () => {
      // イベントの削除
      window.removeEventListener('resize', setFillHeight)
    }
  }, [])
  // 向きの変更の検知
  useEffect(() => {
    if (state.type === 'landscape-primary' && isSp) {
      alert('縦向きでご利用が推奨です')
    }
  }, [state, isSp])
  return (
    <ModalProvider>
      <TetrisProvider>
        <Layout>{children}</Layout>
      </TetrisProvider>
    </ModalProvider>
  )
}

const setFillHeight = () => {
  if (window) {
    // 最初に、ビューポートの高さを取得し、0.01を掛けて1%の値を算出して、vh単位の値を取得
    let vh = window.innerHeight * 0.01
    // カスタム変数--vhの値をドキュメントのルートに設定
    document.documentElement.style.setProperty('--vh', vh + 'px')
  }
}
