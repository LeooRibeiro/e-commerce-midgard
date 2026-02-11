import Button from "../ui/Button";
import Link from "next/link";

export default function NavMenu() {
  return (
    <nav className="flex gap-6">
      <Link href="/">
        <Button variant="ghost">HOME</Button>
      </Link>
      <Link href="/sobre">
        <Button variant="ghost">SOBRE</Button>
      </Link>
      <Link href="/produtos">
        <Button variant="ghost">PRODUTOS</Button>
      </Link>
    </nav>
  );
}
