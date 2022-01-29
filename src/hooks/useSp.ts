import { useEffect, useState } from 'react'

type UseSp = () => {
  isSp: boolean
}

export const useSp: UseSp = () => {
  const [isSp, setIsSp] = useState(false)
  const isSmartPhone = () => {
    // UserAgentからのスマホ判定
    if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
      return true
    } else {
      return false
    }
  }
  useEffect(() => {
    setIsSp(isSmartPhone())
  }, [])
  return { isSp }
}
