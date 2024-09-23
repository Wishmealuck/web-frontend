/* eslint-disable promise/catch-or-return */
// eslint-disable-next-line promise/always-return
"use client"

import { useState } from "react"

import Image from "next/image"

import { useToast } from "@/hooks/use-toast"

import Copy from "../../assets/svg/Copy.svg"
import { Input } from "../ui/input"

export const LinkCopyInput = () => {
  const { toast } = useToast()
  const [link, setLink] = useState("https://www.instagram.com/jajan_james/")
  const copyToClipboard = () => {
    navigator.clipboard.writeText(link).then(
      () => {
        return toast({
          title: "Link Copied to Clipboard",
          description: link
        })
      },
      (err) => {
        console.error("Failed to copy the link: ", err)
      }
    )
  }
  return (
    <div className='relative flex w-full align-middle'>
      <Input value={link} onChange={(e) => setLink(e.target.value)} className='z-20 bg-inputBlue' />
      <div
        onClick={copyToClipboard}
        className='absolute bottom-0 right-1 top-0 z-30 my-2 -ml-7 flex cursor-pointer bg-inputBlue px-1 align-middle'
      >
        <Image src={Copy} alt='Copy' width={20} height={20} />
      </div>
    </div>
  )
}
