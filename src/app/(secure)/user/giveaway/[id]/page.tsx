"use client"

import { yupResolver } from "@hookform/resolvers/yup"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import * as yup from "yup"

import Banner from "@/assets/svg/Banner.svg"
import { CraftedWithLove } from "@/components/brandings/crafted-with-love"
import { TrustedBy } from "@/components/brandings/trusted-by"
import { GradientFillButton } from "@/components/ui/button/gradient-button-fill"
import { GradientCountdown } from "@/components/ui/countdown/GradientCountdown"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Typography } from "@/components/ui/typography"

const defaultValues = {
  username: "",
  mobile: ""
}

const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  mobile: yup.string().required("Mobile is required").typeError("Mobile is required")
})

export default function UserGiveawayDetailed() {
  const router = useRouter()
  const form = useForm({
    defaultValues,
    resolver: yupResolver(schema)
  })

  function onSubmit() {
    router.push("/user/giveaway/1/participate")
  }
  return (
    <div className='flex h-fit w-full flex-col items-center justify-center py-10 align-middle'>
      <div className='w-full p-4 lg:max-w-sm lg:rounded-lg lg:bg-white lg:p-6 lg:shadow-sm'>
        <div className='mb-4 flex flex-col items-center justify-center gap-2'>
          <div>
            <GradientCountdown textSize='text-4xl' />
          </div>
          <p className='text-center text-xs font-medium text-textColor'>END IN 25-12-2024</p>
        </div>
        <div className='mb-2 flex justify-center'>
          <Image src={Banner} alt='Banner' />
        </div>
        <Typography className='my-2 text-center text-xl font-bold text-textColor'>
          Car Giveaway
        </Typography>
        <div>
          <Typography className='my-3 text-medium font-bold leading-5'>Join Giveaway</Typography>
          <div className='flex flex-col'>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
                <FormField
                  control={form.control}
                  name='username'
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder='Instagram Name' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='mobile'
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input type='number' placeholder='Mobile Number' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <GradientFillButton text='Join Giveaway' hideIcon />
              </form>
            </Form>
          </div>
          <Typography className='my-3 text-center text-xs leading-4 text-grayLight'>
            our data is fully encrypted. We never store, share, or sell your personal information{" "}
          </Typography>
        </div>
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
