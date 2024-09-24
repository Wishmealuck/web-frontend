"use client"

import { yupResolver } from "@hookform/resolvers/yup"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import * as yup from "yup"

import Apple from "@/assets/socials/Apple.svg"
import Google from "@/assets/socials/Google.svg"
import { CraftedWithLove } from "@/components/brandings/crafted-with-love"
import { TrustedBy } from "@/components/brandings/trusted-by"
import { Button } from "@/components/ui/button"
import { LoginOptionsContainers } from "@/components/ui/containers/continue-with-container"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { HorizontalSeperator } from "@/components/ui/seperator/horizontal-with-text"
import { Typography } from "@/components/ui/typography"
import { TypographyH7 } from "@/components/ui/typography/h4"

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required()
})

const Login = () => {
  const router = useRouter()
  const form = useForm({
    resolver: yupResolver(schema)
  })

  function onSubmit() {
    router.push("/")
  }

  return (
    <div className='flex h-fit w-full flex-col items-center justify-center py-10 align-middle'>
      <div className='w-full p-4 lg:max-w-sm lg:rounded-lg lg:bg-white lg:p-6 lg:shadow-sm'>
        <TypographyH7 className='mb-6 text-lg font-extrabold'>Login</TypographyH7>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder='Email' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder='Create password' type='password' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className='w-full' type='submit'>
              Login
            </Button>
            <Link
              href={"/forgot-password"}
              className='text-md flex justify-center font-normal text-highlightBlue'
            >
              Forgot Password?
            </Link>
            <div className=''>
              <HorizontalSeperator text='or' />
            </div>
            <LoginOptionsContainers text='Google' image={Google as string} />
            <LoginOptionsContainers text='Apple' image={Apple as string} />
            <div className='text-center'>
              <Typography className='text-medium font-normal leading-6'>
                Don&apos;t have an account?{" "}
                <span className='text-highlightBlue'>
                  <Link href={"/register"}>Create up</Link>
                </span>
              </Typography>
            </div>
            <Typography className='text-center text-xs leading-4 text-grayLight'>
              Your privacy matters. We ensure a secure and transparent experience, every time.
            </Typography>

            <TrustedBy />
            <CraftedWithLove />
            <div className='text-center text-xs font-normal leading-4 text-grayLight'>
              Contact us at <span className='text-highlightBlue'>support@wishmealuck.com</span> ,
              and we&apos;ll get back to you within 4 hours.
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default Login
