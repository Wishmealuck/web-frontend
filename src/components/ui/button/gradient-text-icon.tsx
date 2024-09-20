import Image from "next/image"

import GradientAdd from "../../../assets/svg/AddGradient.svg"

export const GradientIconText = ({ text, onClick }: { text: string; onClick?: () => void }) => {
  return (
    <div onClick={onClick} className='flex cursor-pointer gap-1'>
      <Image src={GradientAdd} width={16} height={16} alt='Add' />
      <p className='bg-gradient-to-r from-[#FF5655] to-[#D361FF] bg-clip-text text-xs text-transparent'>
        {text}
      </p>{" "}
    </div>
  )
}
