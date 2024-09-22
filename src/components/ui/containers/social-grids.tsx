import Image from "next/image"
import { FacebookIcon, FacebookShareButton, WhatsappIcon, WhatsappShareButton } from "react-share"

import Instagram from "../../../assets/socials/Instagram.svg"

const url = "https://wishmealuck.netlify.net/"

export const SocialGrids = () => {
  return (
    <div className='grid grid-cols-3 justify-between'>
      <div className='flex flex-col items-center justify-center gap-2'>
        <Image src={Instagram} width={39} height={39} alt='Instagram' />
        <p className='text-xs font-medium text-darkText'>Instagram</p>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <div className='Demo__some-network'>
          <FacebookShareButton url={url} className='Demo__some-network__share-button'>
            <FacebookIcon size={39} round />
          </FacebookShareButton>
        </div>
        <p className='text-xs font-medium text-darkText'>Facebook</p>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <div className='Demo__some-network'>
          <WhatsappShareButton
            url={url}
            title={"Here is the Link to the Giveaway"}
            separator=':: '
            className='Demo__some-network__share-button'
          >
            <WhatsappIcon size={39} round />
          </WhatsappShareButton>
        </div>{" "}
        <p className='text-xs font-medium text-darkText'>Instagram</p>
      </div>
    </div>
  )
}
