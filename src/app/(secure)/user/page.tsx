"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

import Instagram from "@/assets/socials/Instagram.svg"
import Twitter from "@/assets/socials/Twitter.svg"
import YouTube from "@/assets/socials/Youtube.svg"
import Verified from "@/assets/svg/Verified.svg"
import { GradientFillButton } from "@/components/ui/button/gradient-button-fill"
import { GiveawayCard } from "@/components/ui/cards/give-away-card"
import { HorizontalSeperator } from "@/components/ui/seperator/horizontal-with-text"
import { Typography } from "@/components/ui/typography"
import { TypographyH7 } from "@/components/ui/typography/h4"

const profiles = [
  {
    image: Instagram,
    id: "jajan_james",
    value: "20k Followers"
  },
  {
    image: YouTube,
    id: "Jajan_James",
    value: "20k Subscribers"
  },
  {
    image: Twitter,
    id: "Jajan_James",
    value: "20k Followers"
  }
]

export default function UserProfile() {
  const router = useRouter()
  function handleJoin() {
    router.push(`/user/giveaway/1`)
  }
  return (
    <div className='flex h-fit w-full flex-col items-center justify-center py-10 align-middle'>
      <div className='w-full p-4 lg:max-w-sm lg:rounded-lg lg:bg-white lg:p-6 lg:shadow-sm'>
        <Image
          src={
            "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt='Upload'
          width={100}
          height={100}
          className='aspect-square rounded-full object-cover'
        />
        <div className='flex gap-2'>
          <TypographyH7 className='text-medium font-medium leading-6'>Jajan James</TypographyH7>
          <Image src={Verified} alt='Verified' width={24} height={24} />
        </div>
        <Typography className='mb-2 text-xs font-normal leading-6 text-subTitleGray'>
          Personal blog UX designer hyderabad
        </Typography>
        <div className='w-full'>
          <div className='grid w-full grid-cols-3 justify-between gap-12 py-2'>
            {profiles.map((profile, index) => {
              return (
                <div key={index} className='flex flex-col items-center justify-between'>
                  <Image src={profile.image} width={40} height={40} alt={profile.id} />
                  <p className='mb-1 mt-2 text-xs font-medium leading-normal'>{profile.id}</p>
                  <p className='text-xs text-subTitleGray'>{profile.value}</p>
                </div>
              )
            })}
          </div>
          <HorizontalSeperator />
        </div>

        <div className='my-3 flex w-full flex-col gap-2'>
          <GiveawayCard handleJoin={handleJoin} variant='user' />
          <GiveawayCard handleJoin={handleJoin} variant='user' />
        </div>
      </div>
    </div>
  )
}
