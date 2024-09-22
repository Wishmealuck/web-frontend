/* eslint-disable @typescript-eslint/no-unsafe-argument */
"use client"

import { useState } from "react"

import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { useForm } from "react-hook-form"

import { AddLinks } from "@/components/forms/add-links"
import { AddRules } from "@/components/forms/add-rules"
import { UploadFiles } from "@/components/forms/upload-files"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Switch } from "@/components/ui/switch"
import { TypographyH7 } from "@/components/ui/typography/h4"
import { cn } from "@/lib/utils"

const defaultValues = {
  name: "",
  links: [{ links: "" }],
  start_date: new Date(),
  end_date: new Date()
}

export default function GiveawayCreate() {
  const form = useForm({
    defaultValues
  })
  function onSubmit() {
    console.log("")
  }
  const [showEnd, setShowEnd] = useState(false)
  return (
    <div className='flex h-full w-full flex-col items-center justify-between py-10'>
      <div className='w-full max-w-sm bg-white p-6 shadow-sm'>
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
            <div className='mt-3 w-full'>
              <FormLabel>When to Announce Winner?</FormLabel>
              <div className='pb-3 pt-4 text-xs font-semibold text-grayDark'>Start Date</div>
              <FormField
                control={form.control}
                name='start_date'
                render={({ field }) => (
                  <FormItem className='flex flex-col'>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                            <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className='w-auto p-0' align='start'>
                        <Calendar
                          mode='single'
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className='mt-4 flex items-center justify-between'>
                <FormLabel>Set end date Manual</FormLabel>
                <Switch onCheckedChange={(e) => setShowEnd(e)} />
              </div>
              {showEnd && (
                <div className='mb-4'>
                  <div className='pb-3 pt-4 text-xs font-semibold text-grayDark'>End Date</div>
                  <FormField
                    control={form.control}
                    name='end_date'
                    render={({ field }) => (
                      <FormItem className='flex flex-col'>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className='w-auto p-0' align='start'>
                            <Calendar
                              mode='single'
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date > new Date() || date < new Date("1900-01-01")
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              <div className='my-4'>
                <UploadFiles control={form.control} />
              </div>
            </div>
            <Button className='my-4 flex w-full'>Create a Giveaway</Button>
          </form>
        </Form>
      </div>
    </div>
  )
}
