"use client"

import { yupResolver } from "@hookform/resolvers/yup"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import * as yup from "yup"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { TypographyH7 } from "@/components/ui/typography/h4"

const schema = yup.object().shape({
  password: yup.string().required(),
  re_password: yup
    .string()
    .required("This is a required Field")
    .oneOf([yup.ref("password")], "Password must match")
})

export default function ChangePassword() {
  const form = useForm({
    resolver: yupResolver(schema)
  })
  const router = useRouter()
  function onSubmit() {
    router.push("/")
  }
  return (
    <div className='flex h-fit w-full flex-col items-center justify-center py-10 align-middle'>
      <div className='w-full p-4 lg:max-w-sm lg:rounded-lg lg:bg-white lg:p-6 lg:shadow-sm'>
        {" "}
        <TypographyH7 className='mb-6 text-lg font-extrabold'>Create new Password</TypographyH7>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder='New Password' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='re_password'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder='Re-enter New Password' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className='w-full' type='submit'>
              Login
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}
