"use client"

import { yupResolver } from "@hookform/resolvers/yup"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import * as yup from "yup"

import { CraftedWithLove } from "@/components/brandings/crafted-with-love"
import { TrustedBy } from "@/components/brandings/trusted-by"
import { AddSocials } from "@/components/forms/add-socials"
import { BasicInfluencerProfile } from "@/components/forms/basic-influencer-profile-form"
import { Button } from "@/components/ui/button"
import { GradientButton } from "@/components/ui/button/gradient-button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { TypographyH7 } from "@/components/ui/typography/h4"

const schema = yup.object().shape({
  userName: yup.string().required("User Name is required"),
  bio: yup.string().required("Bio is required"),
  instagram: yup.string().required("This is a required field")
})

export default function Home() {
  const router = useRouter()
  const form = useForm({
    resolver: yupResolver(schema)
  })

  function onSubmit() {
    router.push("/get-started")
  }

  return (
    <main className='flex h-full w-full flex-col items-center justify-between py-10'>
      <div className='px-2'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
            <BasicInfluencerProfile control={form.control} />
            <TypographyH7 className='mb-6 mt-8 text-medium font-extrabold'>
              Add Your First link
            </TypographyH7>
            <FormField
              control={form.control}
              name='instagram'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder='Instagram Name' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <GradientButton type='outline' text='Get My Profile' />

            <AddSocials control={form.control} />

            <Button className='w-full py-3' type='submit'>
              Get Started
            </Button>
          </form>
        </Form>
      </div>
      <div>
        <div className='mt-10'>
          <TrustedBy />
          <CraftedWithLove />
        </div>
      </div>

      {/* <Counter /> */}
    </main>
  )
}
