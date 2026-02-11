type ButtonProps = {
  children: React.ReactNode
  variant?: "primary" | "ghost"
}

export default function Button({ children, variant = "primary" }: ButtonProps) {
  const base =
    "rounded-md px-4 py-2 text-md font-extrabold transition"

  const variants = {
    primary: "bg-gray-700 text-white hover:bg-gray-900 cursor-pointer",
    ghost: "text-zinc-700 hover:text-zinc-900 cursor-pointer",
  }

  return (
    <button className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  )
}
