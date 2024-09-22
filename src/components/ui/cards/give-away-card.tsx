import Image from "next/image"

import Eye from "../../../assets/svg/Eye.svg"
import Giveaway from "../../../assets/svg/GiveAwayPoster.svg"
import { Button } from "../button"
import { GradientCountdown } from "../countdown/GradientCountdown"

interface Props {
  handleView: () => void
  handleEdit?: () => void
}

export const GiveawayCard = (props: Props) => {
  const { handleEdit, handleView } = props
  return (
    <div className='flex justify-between gap-4 rounded-[12px] border border-solid border-[rgba(0,0,0,0.07)] bg-white py-3 pl-2 pr-3 shadow-[0_3px_18px_0_rgba(0,0,0,0.10)]'>
      {" "}
      <div className=''>
        <Image src={Giveaway} alt='Giveaway Poster' width={129} className='flex self-stretch' />
      </div>
      <div className='flex flex-grow flex-col justify-between'>
        <div className='flex justify-between'>
          <p className='text-sm font-bold leading-normal text-textColor'>Car Giveaway</p>
          <div className='flex items-center gap-2'>
            <Image src={Eye} alt='eye' width={21} height={21} />
            <h2 className='text-sm font-bold leading-6 text-textColor'>12k</h2>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <GradientCountdown />
          <div className='text-xs font-medium leading-normal text-endText'>END IN 25-12-2024</div>
        </div>
        <div className='flex w-full justify-between gap-2'>
          <Button onClick={handleEdit} className='flex-grow' variant={"outline"}>
            Edit
          </Button>
          <Button onClick={handleView} className='flex-grow'>
            View
          </Button>
        </div>
      </div>
    </div>
  )
}
