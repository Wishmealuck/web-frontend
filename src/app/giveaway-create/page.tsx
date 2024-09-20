"use client"

import { useForm } from "react-hook-form"

import { AddLinks } from "@/components/forms/add-links"
import { AddRules } from "@/components/forms/add-rules"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { TypographyH7 } from "@/components/ui/typography/h4"

export default function GiveawayCreate() {
  const form = useForm()
  function onSubmit() {
    console.log("")
  }
  return (
    <div className='flex flex-col items-center py-10'>
      <div className='w-full px-4'>
        <TypographyH7 className='mb-6 text-lg font-extrabold'>Create a Giveaway</TypographyH7>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder='Enter giveaway name' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <AddLinks control={form.control} />
            <div className='my-3 flex flex-col gap-2'>
              <FormLabel>Set rules</FormLabel>
              <AddRules control={form.control} />
            </div>
            <div className='mt-3'>
              <FormLabel>When to Announce Winner?</FormLabel>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}
