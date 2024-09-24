"use client"

import { useEffect } from "react"

import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"

import { CraftedWithLove } from "@/components/brandings/crafted-with-love"
import { TrustedBy } from "@/components/brandings/trusted-by"
import { AddSocials } from "@/components/forms/add-socials"
import { BasicInfluencerProfile } from "@/components/forms/basic-influencer-profile-form"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { TypographyH7 } from "@/components/ui/typography/h4"

const GetStarted = () => {
  const router = useRouter()
  const form = useForm()
  const { reset } = form
  useEffect(() => {
    reset({
      userName: "jajan james",
      bio: "ux-designer"
    })
  }, [])

  function onSubmit() {
    router.push("/profile")
  }

  return (
    <main className='flex h-full w-full flex-col items-center justify-between py-10'>
      <div className='px-2'>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
          <Form {...form}>
            <BasicInfluencerProfile
              control={form.control}
              imageUrl='https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            />
            <TypographyH7 className='mb-6 mt-8 text-medium font-extrabold'>
              Add Your First link
            </TypographyH7>
            <AddSocials control={form.control} />
            <Button className='my-3 w-full' type='submit'>
              Create an account
            </Button>
          </Form>
        </form>
      </div>
      <div>
        <div className='mt-10'>
          <TrustedBy />
          <CraftedWithLove />
        </div>
      </div>
    </main>
  )
}

export default GetStarted
