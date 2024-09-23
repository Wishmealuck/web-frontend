import type { Control } from "react-hook-form"

import Image from "next/image"
import { useFieldArray } from "react-hook-form"

import Delete from "../../assets/svg/Delete.svg"
import { Button } from "../ui/button"
import { GradientFillButton } from "../ui/button/gradient-button-fill"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

/* eslint-disable @typescript-eslint/no-explicit-any */

interface Props {
  control: Control<any>
}

export const AddLinks = ({ control }: Props) => {
  const { fields, append, remove } = useFieldArray({
    name: "links",
    control
  })

  const handleAddLink = () => {
    append({ link: "" })
  }

  return (
    <div>
      {fields.map((item, index) => (
        <div key={item.id} className='flex flex-col gap-3 py-2'>
          <FormField
            control={control}
            name={`links.[${index}].link`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Link {index + 1}</FormLabel>
                <FormControl>
                  <Input placeholder='Post Link' {...field} />
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
      <GradientFillButton text='Add More Links' onClick={handleAddLink} />
    </div>
  )
}
