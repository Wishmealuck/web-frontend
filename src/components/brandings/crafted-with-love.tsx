import Image from "next/image"

import Love from "../../assets/svg/Love.svg"

export const CraftedWithLove = () => {
  return (
    <div className='flex justify-center gap-1.5'>
      <div className='text-sm font-medium leading-6 text-grayLight'>Crafted with</div>
      <span>
        <Image src={Love} alt='Love' />
      </span>
      <div className='text-sm font-medium leading-6 text-grayLight'>in Kerala, India</div>
    </div>
  )
}
