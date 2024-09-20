import { Button } from "../button"

export const GradientButton = ({ text, type = "outline" }: { text: string; type?: "outline" }) => {
  const gradient = "var(--jnjn, linear-gradient(90deg, #FF5655 0%, #D361FF 100%))"

  return (
    <Button
      variant={type}
      className='w-full border-solid'
      style={{
        borderImage: `${gradient} 1`,
        borderWidth: "2px", // Set the border width
        borderStyle: "solid" // Ensure border style is solid
      }}
    >
      <h1
        className='bg-clip-text text-transparent'
        style={{
          backgroundImage: gradient,
          backgroundClip: "text",
          WebkitBackgroundClip: "text" // For Safari
        }}
      >
        {text}
      </h1>
    </Button>
  )
}
