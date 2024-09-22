"use client"

import Image from "next/image"

import { CraftedWithLove } from "@/components/brandings/crafted-with-love"
import { TrustedBy } from "@/components/brandings/trusted-by"
import { Button } from "@/components/ui/button"
import { GradientFillButton } from "@/components/ui/button/gradient-button-fill"
import { ShareInSocials } from "@/components/ui/cards/share-in-social-card"
import { GradientCountdown } from "@/components/ui/countdown/GradientCountdown"
import { FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Typography } from "@/components/ui/typography"

import Banner from "../../../assets/svg/Banner.svg"

export default function GiveawayDetailed() {
  function handleEdit() {
    console.log("")
  }
  function handleCopy() {
    console.log("")
  }
  return (
    <main className='flex h-full w-full flex-col items-center justify-between py-10'>
      <div className='w-full p-4 lg:max-w-sm lg:bg-white lg:p-6 lg:shadow-sm'>
        <div className='flex flex-col items-center justify-center gap-2'>
          <div>
            <GradientCountdown textSize='text-4xl' />
          </div>
          <p className='text-center text-xs font-medium text-textColor'>END IN 25-12-2024</p>
        </div>
        <div className='my-2'>
          <ShareInSocials />
        </div>
        <Image src={Banner} alt='Banner' />
        <div className='mt-3 flex flex-col gap-3'>
          <div className='flex flex-col gap-2'>
            <Typography className='text-xs font-medium leading-5 text-textColor'>
              Rule 01
            </Typography>
            <Typography className='text-xs font-medium leading-5 text-textColor'>
              https://www.instagram.com/jajan_james/
            </Typography>
            <div className='grid grid-cols-[70%_30%] gap-2'>
              <Input placeholder='follow this account' />
              <GradientFillButton text='Open Link' hideIcon />
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <Typography className='text-xs font-medium leading-5 text-textColor'>
              Rule 02
            </Typography>
            <Typography className='text-xs font-medium leading-5 text-textColor'>
              https://www.instagram.com/jajan_james/
            </Typography>
            <div className='grid grid-cols-[70%_30%] gap-2'>
              <Input placeholder='follow this account' />
              <GradientFillButton text='Open Link' hideIcon />
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <Typography className='text-xs font-medium leading-5 text-textColor'>
              Rule 03
            </Typography>
            <Typography className='text-xs font-medium leading-5 text-textColor'>
              https://www.instagram.com/jajan_james/
            </Typography>
            <div className='grid grid-cols-[70%_30%] gap-2'>
              <Input placeholder='follow this account' />
              <GradientFillButton text='Open Link' hideIcon />
            </div>
          </div>

          <div className='flex w-full justify-between gap-2'>
            <Button onClick={handleEdit} className='flex-grow' variant={"outline"}>
              Edit
            </Button>
            <Button onClick={handleCopy} className='flex-grow'>
              Copylink
            </Button>
          </div>
          <div className='mt-4'>
            <Typography className='my-3 text-center text-xs leading-4 text-grayLight'>
              Your privacy matters. We ensure a secure and transparent experience, every time.
            </Typography>
            <TrustedBy />
            <CraftedWithLove />
            <div className='my-3 text-center text-xs font-normal leading-4 text-grayLight'>
              Contact us at <span className='text-highlightBlue'>support@wishmealuck.com</span> ,
              and we&apos;ll get back to you within 4 hours.
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
