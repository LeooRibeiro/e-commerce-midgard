type ButtonProps = {
  children: React.ReactNode
  variant?: "primary" | "ghost"
}

export default function Button({ children, variant = "primary" }: ButtonProps) {
  const base =
    "rounded-md px-4 py-2 text-md font-extrabold transition"

  const variants = {
    primary: "bg-gray-950 text-yellow-500 hover:border-yellow-500 hover:border-2 overflow-hidden cursor-pointer",
    ghost: "text-zinc-700 hover:text-zinc-900 cursor-pointer",
  }

  return (
    <button className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  )
}
