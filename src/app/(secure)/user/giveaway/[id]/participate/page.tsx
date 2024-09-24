"use client"

import { yupResolver } from "@hookform/resolvers/yup"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import * as yup from "yup"

import Banner from "@/assets/svg/Banner.svg"
import { CraftedWithLove } from "@/components/brandings/crafted-with-love"
import { TrustedBy } from "@/components/brandings/trusted-by"
import { AddRules } from "@/components/forms/add-rules"
import { UploadFiles } from "@/components/forms/upload-files"
import { Button } from "@/components/ui/button"
import { GradientFillButton } from "@/components/ui/button/gradient-button-fill"
import { GradientCountdown, GradientCounterText } from "@/components/ui/countdown/GradientCountdown"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Typography } from "@/components/ui/typography"

export default function UserGiveawayParticipate() {
  const router = useRouter()
  const form = useForm()

  function onSubmit() {
    router.push("/user")
  }
  return (
    <div className='flex h-fit w-full flex-col items-center justify-center py-10 align-middle'>
      <div className='w-full justify-center p-4 lg:max-w-sm lg:rounded-lg lg:bg-white lg:p-6 lg:shadow-sm'>
        <div className='mb-4 flex flex-col items-center justify-center gap-2'>
          <div>
            <GradientCountdown textSize='text-4xl' />
          </div>
          <p className='text-center text-xs font-medium text-textColor'>END IN 25-12-2024</p>
        </div>
        <div className='mb-2 flex justify-center'>
          <Image src={Banner} alt='Banner' />
        </div>
        <div className='px-4 py-3 text-center'>
          <GradientCounterText text='Car Giveaway' textSize='text-4xl' />
        </div>
        <Typography className='my-3 text-center text-xs font-medium leading-5'>
          Try your luck! It only takes about a minute to complete.
        </Typography>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
            <FormControl>
              <div className='flex flex-col gap-2'>
                <Typography className='text-sm font-medium leading-5 text-textColor'>
                  Rule 01
                </Typography>
                <Typography className='text-xs font-medium leading-5 text-textColor'>
                  https://www.instagram.com/jajan_james/
                </Typography>
                <div className='flex w-full gap-2'>
                  <GradientFillButton text='Open Link' hideIcon />
                </div>
                <div className='my-4'>
                  <UploadFiles control={form.control} />
                </div>
                <Button className='w-full' type='submit'>
                  Submit
                </Button>
              </div>
            </FormControl>
          </form>
        </Form>

        <div className='mt-3 flex flex-col gap-3'>
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
    </div>
  )
}
