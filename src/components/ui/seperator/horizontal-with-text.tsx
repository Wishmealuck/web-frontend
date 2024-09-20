import { Separator } from "../separator"

export const HorizontalSeperator = ({ text }: { text?: string }) => {
  return (
    <div className='flex w-full items-center justify-between'>
      <Separator orientation='horizontal' className={`flex bg-[#CBD5E1]`} />
      {text && (
        <>
          <p className='px-3 text-xs font-medium leading-normal text-slate-300'>{text ?? ""}</p>
          <Separator orientation='horizontal' className={`bg-[#CBD5E1]`} />
        </>
      )}
    </div>
  )
}
