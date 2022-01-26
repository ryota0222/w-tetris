import React, { useMemo } from 'react'

type Type =
  | 'left'
  | 'right'
  | 'top'
  | 'bottom'
  | 'pause'
  | 'start'
  | 'restart'
  | 'rotate'

interface Props {
  type: Type
  active: boolean
}

const PlayIconTemplate: React.FC<Props> = ({ type, active }) => {
  const color = useMemo(() => {
    if (!active) return '#727272'
    switch (type) {
      case 'left':
        return '#FFA4F6'
      case 'right':
        return '#D7FFA4'
      case 'top':
        return '#A4E9FF'
      case 'bottom':
        return '#FFB78E'
      default:
        return '#FFFFFF'
    }
  }, [type, active])
  const rotate = useMemo(() => {
    switch (type) {
      case 'left':
        return 'rotate(0deg)'
      case 'right':
        return 'rotate(180deg)'
      case 'top':
        return 'rotate(90deg)'
      case 'bottom':
        return 'rotate(-90deg)'
      default:
        return 'rotate(0deg)'
    }
  }, [type])
  const isMoveType = useMemo(() => {
    return ['left', 'right', 'top', 'bottom'].includes(type)
  }, [type])
  const svgStyle = useMemo(() => {
    return { filter: `drop-shadow(0 0 4px ${color}`, transform: rotate }
  }, [color])
  if (isMoveType) {
    // 矢印アイコン
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 8 9"
        fill="none"
        style={svgStyle}
      >
        <path
          d="M0.75 4.06699C0.595299 4.1563 0.5 4.32137 0.5 4.5C0.5 4.67863 0.595299 4.8437 0.75 4.93301L6 7.9641C6.1547 8.05342 6.3453 8.05342 6.5 7.9641C6.6547 7.87478 6.75 7.70972 6.75 7.53109L6.75 1.46891C6.75 1.29028 6.6547 1.12522 6.5 1.0359C6.3453 0.946583 6.1547 0.946582 6 1.0359L0.75 4.06699Z"
          stroke={color}
          strokeLinejoin="round"
        />
      </svg>
    )
  } else if (type === 'pause') {
    // 停止中
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 4 6"
        fill="none"
        style={svgStyle}
      >
        <rect
          width="1.14286"
          height="6"
          transform="matrix(-1 0 0 1 4 0)"
          fill={color}
        />
        <rect
          width="1.14286"
          height="6"
          transform="matrix(-1 0 0 1 1.14288 0)"
          fill={color}
        />
      </svg>
    )
  } else if (type === 'start') {
    // 再生
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 5 5"
        fill="none"
        style={svgStyle}
      >
        <rect
          width="0.675324"
          height="3.54545"
          transform="matrix(-1 0 0 1 4.18182 0.75)"
          fill={color}
        />
        <path d="M3.5 2.5L1.25 4.23205L1.25 0.767949L3.5 2.5Z" fill={color} />
      </svg>
    )
  } else if (type === 'restart') {
    // リスタート
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 8 8"
        fill="none"
        style={svgStyle}
      >
        <g clipPath="url(#clip0_17_80)">
          <path
            d="M5.86402 6.26399C5.34084 6.78776 4.65224 7.11392 3.91554 7.18692C3.17884 7.25991 2.43963 7.07522 1.82383 6.6643C1.20804 6.25339 0.753768 5.64168 0.538413 4.93339C0.323059 4.2251 0.359946 3.46405 0.64279 2.77991C0.925633 2.09576 1.43693 1.53085 2.08958 1.18142C2.74223 0.831985 3.49584 0.719646 4.22203 0.863544C4.94821 1.00744 5.60204 1.39867 6.07212 1.97058C6.5422 2.54249 6.79944 3.25969 6.80002 3.99999H6.00002C6.00051 3.44472 5.80844 2.90645 5.45654 2.47691C5.10464 2.04738 4.61468 1.75315 4.07016 1.64438C3.52564 1.53561 2.96025 1.61901 2.47033 1.88038C1.98041 2.14176 1.59629 2.56492 1.38341 3.07777C1.17052 3.59063 1.14206 4.16143 1.30287 4.69291C1.46367 5.2244 1.8038 5.68368 2.26529 5.99249C2.72677 6.3013 3.28106 6.44054 3.8337 6.38648C4.38634 6.33241 4.90314 6.08839 5.29602 5.69599L5.86402 6.26399ZM4.80002 3.99999H8.00002L6.40002 5.59999L4.80002 3.99999Z"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_17_80">
            <rect width="8" height="8" fill={color} />
          </clipPath>
        </defs>
      </svg>
    )
  } else if (type === 'rotate') {
    // 回転
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 10 10"
        fill="none"
        style={svgStyle}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.26867 5.83332L4.8042 2.29779L8.33973 5.83332L4.8042 9.36886L1.26867 5.83332ZM7.16122 5.83332L4.8042 3.4763L2.44718 5.83332L4.8042 8.19035L7.16122 5.83332ZM8.07223 1.7858L8.13848 0.805235L8.96992 0.861411L8.8029 3.33332H6.47087V2.49999H7.59985C6.90067 1.71799 5.89335 1.24999 4.8042 1.24999C3.44968 1.24999 2.22171 1.97383 1.55563 3.12529L0.83429 2.70802C1.64785 1.30162 3.14915 0.416656 4.8042 0.416656C6.05973 0.416656 7.22678 0.925936 8.07223 1.7858Z"
          fill={color}
        />
      </svg>
    )
  } else {
    return <></>
  }
}

export default PlayIconTemplate
