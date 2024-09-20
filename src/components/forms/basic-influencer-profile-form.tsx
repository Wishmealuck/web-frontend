/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
"use client"

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react"

import Image from "next/image"
import { type Control } from "react-hook-form"

import Upload from "../../assets/svg/Upload.svg"
import { FormControl, FormField, FormItem, FormMessage } from "../ui/form"
import { Input } from "../ui/input"

interface Props {
  control: Control<any>
  imageUrl?: string
}

export const BasicInfluencerProfile = (props: Props) => {
  const { control, imageUrl } = props
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        // You can handle the uploaded image URL here
        console.log(reader.result) // or set it to a state to display the image
      }
      reader.readAsDataURL(file)
    }
  }
  return (
    <div className='flex items-center justify-between gap-10'>
      <div onClick={handleImageClick} className='cursor-pointer'>
        <Image
          src={imageUrl ? imageUrl : Upload}
          alt='Upload'
          width={100}
          height={100}
          className='aspect-square rounded-full object-cover'
        />
        <input
          type='file'
          accept='image/*'
          ref={fileInputRef}
          onChange={handleFileChange}
          className='hidden'
        />
      </div>{" "}
      <div className='flex flex-col gap-4'>
        <FormField
          control={control}
          name='userName'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder='User Name' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name='bio'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder='Bio' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  )
}
