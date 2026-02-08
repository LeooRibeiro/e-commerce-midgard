type ButtonProps = {
  children: React.ReactNode
  variant?: "primary" | "ghost"
}

export default function Button({ children, variant = "primary" }: ButtonProps) {
  const base =
    "rounded-xl px-4 py-2 text-md font-extrabold transition"

  const variants = {
    primary: "bg-green-900 text-white hover:bg-green-700",
    ghost: "text-zinc-700 hover:text-zinc-900"
  }

  return (
    <button className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  )
}
