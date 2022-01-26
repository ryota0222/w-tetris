interface Props {
  className?: string
}

export const NeumorphismBox: React.FC<Props> = ({
  children,
  className = '',
}) => {
  return (
    <div
      className={`flex justify-between bg-dark-800 shadow-operation rounded-md box-border ${className}`}
    >
      {children}
    </div>
  )
}
