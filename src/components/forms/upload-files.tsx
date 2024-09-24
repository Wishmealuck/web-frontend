import type { Control } from "react-hook-form"

import Image from "next/image"
import { useFieldArray } from "react-hook-form"

import Delete from "@/assets/svg/Delete.svg"

import { Button } from "../ui/button"
import { GradientIconText } from "../ui/button/gradient-text-icon"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"

/* eslint-disable @typescript-eslint/no-explicit-any */

interface Props {
  control: Control<any>
}

export const UploadFiles = (props: Props) => {
  const { control } = props
  const { fields, append, remove } = useFieldArray({
    name: "uploads",
    control
  })

  const handleAddRule = () => {
    append({ rule: "" })
  }
  return (
    <>
      <FormLabel>{`Upload (Images, videos or Gif)`}</FormLabel>
      <div className='mt-2'>
        {fields.map((item, index) => (
          <div key={item.id} className='flex flex-col gap-3 py-2'>
            <FormField
              control={control}
              name={`uploads.[${index}].file`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>File {index + 1}</FormLabel>
                  <FormControl>
                    <Input className='mt-4' type='file' placeholder='Upload' {...field} />
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
          </div>
        ))}
        <GradientIconText text='Add More Files' onClick={handleAddRule} />
      </div>
    </>
  )
}
