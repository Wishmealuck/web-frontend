import clsx from "clsx"
import Countdown from "react-countdown"

export function formatTime(time: number) {
  return String(time).padStart(2, "0")
}

export function GradientCounterText({
  text,
  textSize = "text-2xl"
}: {
  text: string
  textSize?: string
}) {
  return (
    <p
      className={clsx(
        "inline bg-gradient-to-r from-[#FF5655] to-[#D361FF] bg-clip-text font-bold leading-6 text-transparent",
        textSize
      )}
    >
      {text}
    </p>
  )
}

interface Props {
  textSize?: string
}

export const GradientCountdown = (props: Props) => {
  const { textSize } = props
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
      return <GradientCounterText text='00:00:00' textSize={textSize} />
    } else {
      // Render a countdown
      return (
        <GradientCounterText
          text={String(
            `${formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds)}`
          )}
          textSize={textSize}
        />
      )
    }
  }
  return <Countdown date={Date.now() + 150000} renderer={renderer} zeroPadTime={2} daysInHours />
}
