import { Button } from "../button"

export const GradientButton = ({
  text,
  type = "outline",
  onClick
}: {
  text: string
  type?: "outline"
  onClick?: () => void
}) => {
  return (
    <Button
      onClick={onClick}
      className='custom-gradient flex w-full justify-center rounded p-[0.5px] font-semibold text-white'
    >
      <span className='mx-auto flex h-full w-full items-center justify-center rounded bg-white'>
        <span className='inline-block bg-gradient-to-r from-[#FF5655] to-[#D361FF] bg-clip-text text-sm font-medium leading-6 text-transparent'>
          {text}
        </span>
      </span>
    </Button>
  )
}
