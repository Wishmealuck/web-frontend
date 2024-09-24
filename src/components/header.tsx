import Image from "next/image"
import Link from "next/link"

import Logo from "@/assets/branding/Logo.svg"
import Hamburger from "@/assets/svg/Hamburger.svg"

import { HorizontalSeperator } from "./ui/seperator/horizontal-with-text"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "./ui/sheet"
import { Typography } from "./ui/typography"

interface Props {
  type?: "guest" | "user"
}

const links = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "Profile",
    href: "/profile"
  },
  {
    label: "Giveaways",
    href: "/profile"
  }
]

export const Header = (props: Props) => {
  const { type = "guest" } = props
  return (
    <div className='px-4'>
      <div className='flex w-full justify-between py-3'>
        <div className='flex items-center gap-2'>
          <Image src={Logo} width={36} height={36} alt='Logo' />
          <div className='flex flex-col'>
            <Typography className='text-xs font-bold text-textColor'>Wish me a</Typography>
            <Typography className='text-xs font-bold text-textColor'>luck.</Typography>
          </div>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            {type !== "guest" && <Image src={Hamburger} alt='menu' width={36} height={36} />}
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                {" "}
                <div className='flex items-center gap-2'>
                  <Image src={Logo} width={36} height={36} alt='Logo' />
                  <div className='flex flex-col items-center'>
                    <Typography className='text-xs font-bold text-textColor'>Wish me a</Typography>
                    <Typography className='text-xs font-bold text-textColor'>luck.</Typography>
                  </div>
                </div>{" "}
              </SheetTitle>
            </SheetHeader>
            <div className='my-4'>
              <HorizontalSeperator />
            </div>
            <div className='grid gap-4 py-4'>
              {links.map((link) => {
                return (
                  <div key={link.label} className='flex flex-col gap-3'>
                    <SheetClose asChild>
                      <Link href={link.href} className='text-sm font-semibold'>
                        {link.label}
                      </Link>
                    </SheetClose>

                    <HorizontalSeperator />
                  </div>
                )
              })}
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <HorizontalSeperator />
    </div>
  )
}
