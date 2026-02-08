import Button from "../ui/Button"

export default function NavMenu() {
  return (
    <nav className="flex gap-6">
      <Button variant="ghost">HOME</Button>
      <Button variant="ghost">SOBRE</Button>
      <Button variant="ghost">PRODUTOS</Button>
    </nav>
  )
}
