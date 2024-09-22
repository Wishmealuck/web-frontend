import { LinkCopyInput } from "@/components/custom/link-copy-input"

import { SocialGrids } from "../containers/social-grids"

export const ShareInSocials = () => {
  return (
    <div className='flex w-full flex-col gap-1'>
      <p className='text-sm font-medium leading-normal text-darkText'>Share link with Friends</p>
      <LinkCopyInput />
      <div className='my-3'>
        <SocialGrids />
      </div>
    </div>
  )
}
