import type { Control } from "react-hook-form"

import Image from "next/image"
import { useFieldArray } from "react-hook-form"

import Delete from "@/assets/svg/Delete.svg"

import { Button } from "../ui/button"
import { FormControl, FormField, FormItem, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

/* eslint-disable @typescript-eslint/no-explicit-any */

interface Props {
  control: Control<any>
}

export const AddSocials = ({ control }: Props) => {
  const { fields, append, remove } = useFieldArray({
    name: "socials",
    control
  })

  const handleAddSocial = () => {
    append({ platform: "", link: "" })
  }

  return (
    <div>
      {fields.map((item, index) => (
        <div key={item.id} className='flex flex-col gap-3 py-2'>
          <FormField
            control={control}
            name={`socials.[${index}].platform`}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select onValueChange={field.onChange} {...field} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Select a platform' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value='youtube'>YouTube</SelectItem>
                      <SelectItem value='instagram'>Instagram</SelectItem>
                      <SelectItem value='twitter'>Twitter</SelectItem>
                      <SelectItem value='threads'>Threads</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name={`socials.[${index}].link`}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder='User Name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div onClick={() => remove(index)} className='flex cursor-pointer items-center gap-1'>
            <p className='text-xs font-medium leading-6 text-deleteRed'>Delete</p>

            <div>
              <Image src={Delete} width={12} height={12} alt='Delete' />
            </div>
          </div>
          {/* <Button onClick={() => remove(index)} variant={"destructive"}>
            Delete
          </Button> */}
        </div>
      ))}
      <button
        className='text-md font-normal leading-6 text-highlightBlue'
        type='button'
        onClick={handleAddSocial}
      >
        Add your social media link{" "}
      </button>
    </div>
  )
}
