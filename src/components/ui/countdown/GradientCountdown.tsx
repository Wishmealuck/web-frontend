import Countdown from "react-countdown"

export function formatTime(time: number) {
  return String(time).padStart(2, "0")
}

export function GradientCounterText({ text }: { text: string }) {
  return (
    <p className='inline-block bg-gradient-to-r from-[#FF5655] to-[#D361FF] bg-clip-text text-2xl font-bold leading-6 text-transparent'>
      {text}
    </p>
  )
}

const renderer = ({
  hours,
  minutes,
  seconds,
  completed
}: {
  hours: number
  minutes: number
  seconds: number
  completed: boolean
}) => {
  if (completed) {
    // Render a completed state
    return <GradientCounterText text='00:00:00' />
  } else {
    // Render a countdown
    return (
      <GradientCounterText
        text={String(
          `${formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds)}`
        )}
      />
    )
  }
}

export const GradientCountdown = () => {
  return <Countdown date={Date.now() + 150000} renderer={renderer} zeroPadTime={2} daysInHours />
}
