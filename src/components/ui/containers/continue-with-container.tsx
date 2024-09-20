import Image from "next/image"

interface Properties {
  text: string
  image?: string
}

export const LoginOptionsContainers = (properties: Properties) => {
  return (
    <div className='flex justify-center gap-3 rounded-md border border-solid border-input px-3 py-2'>
      {properties.image && <Image src={properties.image} alt='Img' />}
      <p className='text-medium font-normal leading-6'>Continue with {properties.text}</p>
    </div>
  )
}
