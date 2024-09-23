import Image from "next/image"

import Add from "../../../assets/svg/Add.svg"

interface Props {
  text: string
  onClick?: () => void
  hideIcon?: boolean
}

export const GradientFillButton = (props: Props) => {
  const { text, onClick, hideIcon } = props
  return (
    <button
      type='button'
      onClick={onClick}
      className='flex w-full items-center justify-center gap-2 rounded-sm bg-gradient-red-purple px-4 py-2 text-white'
    >
      {!hideIcon && (
        <div>
          <Image src={Add} width={20} height={20} alt='Add' />
        </div>
      )}
      <p className='text-xs font-medium leading-6'>{text}</p>
    </button>
  )
}
