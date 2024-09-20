import type { Control } from "react-hook-form"

import { useFieldArray } from "react-hook-form"

import { Button } from "../ui/button"
import { GradientFillButton } from "../ui/button/gradient-button-fill"
import { GradientIconText } from "../ui/button/gradient-text-icon"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

/* eslint-disable @typescript-eslint/no-explicit-any */

interface Props {
  control: Control<any>
}

export const AddRules = ({ control }: Props) => {
  const { fields, append, remove } = useFieldArray({
    name: "rules",
    control
  })

  const handleAddRule = () => {
    append({ rule: "" })
  }

  return (
    <div>
      {fields.map((item, index) => (
        <div key={item.id} className='flex flex-col gap-3 py-2'>
          <FormField
            control={control}
            name={`rules.[${index}].rule`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rule {index + 1}</FormLabel>
                <FormControl>
                  <Input placeholder='Enter Rule' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button onClick={() => remove(index)} variant={"destructive"}>
            Delete
          </Button>
        </div>
      ))}
      <GradientIconText text='Add More Rules' onClick={handleAddRule} />
    </div>
  )
}
