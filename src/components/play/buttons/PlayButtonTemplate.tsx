import { memo, useMemo, forwardRef, useState, useEffect } from 'react'
import css from '@/styles/playButton.module.css'
import { useLongPress } from 'react-use'
interface Props {
  onClick: (args: unknown) => any
  active: boolean
  role?: 'button'
}

interface SquareProps extends Props {
  allowLongPress?: boolean
}

// 正方形
export const SquarePlayButtonTemplate: React.FC<SquareProps> = memo(
  ({ children, onClick, active, role, allowLongPress = false }) => {
    const [longPressFlg, setLongPressFlg] = useState(false)
    const [timer, setTimer] = useState<NodeJS.Timer | null>(null)
    const [timeoutFunc, setTimeoutFunc] = useState<NodeJS.Timer | null>(null)
    useEffect(() => {
      if (longPressFlg) {
        const _timer = setInterval(onClick, 60)
        setTimer(_timer)
      } else {
        if (timer) clearInterval(timer)
      }
      return () => {
        if (timer) clearInterval(timer)
      }
    }, [longPressFlg])
    const longPressStart = () => {
      if (allowLongPress) {
        const _timeoutFunc = setTimeout(() => {
          setLongPressFlg(true)
        }, 200)
        setTimeoutFunc(_timeoutFunc)
      }
    }
    const longPressEnd = () => {
      if (allowLongPress) {
        if (timeoutFunc) clearTimeout(timeoutFunc)
        setLongPressFlg(false)
      }
    }
    if (role === 'button') {
      return (
        <button
          type="button"
          className={`flex justify-center items-center xs:w-10 xs:h-10 w-12 h-12 rounded border-2 border-gray-900 bg-gray-700 shadow-playbtn ${css.button}`}
          onClick={onClick}
          onMouseDown={longPressStart}
          onMouseUp={longPressEnd}
          onTouchStart={longPressStart}
          onTouchEnd={longPressEnd}
          onContextMenu={(e) => {
            e.preventDefault()
          }}
          disabled={!active}
        >
          {children}
        </button>
      )
    } else {
      return (
        <div
          className="flex justify-center items-center xs:w-10 xs:h-10 w-12 h-12 rounded border-2 border-gray-900 bg-gray-700 shadow-playbtn"
          role="presentation"
        >
          {children}
        </div>
      )
    }
  }
)

interface RectangleProps extends Props {
  // 盾の長さに対する横の長さ
  ratio?: 1 | 2 | 3
}

// 横長
export const RectanglePlayButtonTemplate: React.FC<RectangleProps> = memo(
  ({ children, onClick, active, role, ratio = 1 }) => {
    const w = useMemo(() => {
      if (ratio === 1) {
        return { xs: 'xs:w-10', sm: 'w-12' }
      } else if (ratio === 2) {
        return { xs: 'xs:w-20', sm: 'w-24' }
      } else if (ratio === 3) {
        return { xs: 'xs:w-32', sm: 'w-32' }
      }
      return { xs: 'xs:w-10', sm: 'w-12' }
    }, [ratio])
    if (role === 'button') {
      return (
        <button
          type="button"
          className={`flex justify-center items-center ${w.xs} xs:h-10 ${w.sm} h-12 rounded border-2 border-gray-900 bg-gray-700 shadow-playbtn ${css.button}`}
          onClick={onClick}
          disabled={!active}
        >
          {children}
        </button>
      )
    } else {
      return (
        <div
          className={`flex justify-center items-center xs:w-${w.xs} xs:h-10 w-${w.sm} h-12 rounded border-2 border-gray-900 bg-gray-700 shadow-playbtn`}
          role="presentation"
        >
          {children}
        </div>
      )
    }
  }
)

interface RoundProps extends Props {
  children: React.ReactNode
}

// 丸
export const RoundPlayButtonTemplate = forwardRef<
  HTMLButtonElement,
  RoundProps
>(({ role, onClick, active, children }, ref) => {
  if (role === 'button') {
    return (
      <button
        type="button"
        className={`flex justify-center items-center xs:w-10 xs:h-10 w-12 h-12 rounded-full border-2 border-gray-900 bg-gray-700 shadow-playbtn ${css.button}`}
        onClick={onClick}
        disabled={!active}
        ref={ref}
      >
        {children}
      </button>
    )
  } else {
    return (
      <div
        className="flex justify-center items-center xs:w-10 xs:h-10 w-12 h-12 rounded-full border-2 border-gray-900 bg-gray-700 shadow-playbtn"
        role="presentation"
      >
        {children}
      </div>
    )
  }
})
