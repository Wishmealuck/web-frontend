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
  email: yup.string().required()
})

export default function ForgotPassword() {
  const form = useForm({
    resolver: yupResolver(schema)
  })
  const router = useRouter()
  function onSubmit() {
    router.push("/change-password")
  }
  return (
    <div className='mt-16 w-full p-4 lg:w-1/3'>
      <TypographyH7 className='mb-6 text-lg font-extrabold'>Forgot Password</TypographyH7>
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
          <Button className='w-full' type='submit'>
            Sent Link to Email id
          </Button>
        </form>
      </Form>
    </div>
  )
}
