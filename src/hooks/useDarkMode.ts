import { useCallback, useEffect, useState } from 'react'
import { useLocalStorage } from 'react-use'
import { Theme } from '@/consts'

type UseDarkMode = (isDark?: boolean) => {
  isDarkMode: boolean
  toggle: (isDark?: boolean) => void
}

export const useDarkMode: UseDarkMode = (isInitialDark = true) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(isInitialDark)
  const [value, setValue] = useLocalStorage<typeof Theme['Dark' | 'Light']>(
    'theme',
    Theme.Dark
  )
  //   モードの変更
  const toggle = useCallback((isDark?) => {
    if (typeof isDark === 'undefined') {
      setIsDarkMode((state) => !state)
      return
    }
    setIsDarkMode(isDark)
  }, [])
  //   HTMLのクラス名の切り替え
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      setValue(Theme.Dark)
    } else {
      document.documentElement.classList.remove('dark')
      setValue(Theme.Light)
    }
  }, [isDarkMode])
  //   初期レンダリング時にlocalStorageからテーマの値を取得
  useEffect(() => {
    setIsDarkMode(value === Theme.Dark)
  }, [])
  return { isDarkMode, toggle }
}
