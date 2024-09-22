import Image from "next/image"

import Copy from "../../assets/svg/Copy.svg"
import { Input } from "../ui/input"

export const LinkCopyInput = () => {
  return (
    <div className='relative flex w-full align-middle'>
      <Input className='z-20 bg-inputBlue' />
      <div className='absolute bottom-0 right-1 top-0 z-30 my-2 -ml-7 flex cursor-pointer bg-inputBlue px-1 align-middle'>
        <Image src={Copy} alt='Copy' width={20} height={20} />
      </div>
    </div>
  )
}
