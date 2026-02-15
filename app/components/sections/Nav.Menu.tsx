import Link from "next/link";

export default function NavMenu() {
  return (
    <nav className="flex gap-6">
      <Link href={"/"}>
        <h3 className="font-extrabold text-lg text-yellow-500">HOME</h3>
      </Link>
      <Link href={"/sobre"}>
        <h3 className="font-extrabold text-lg text-yellow-500">SOBRE</h3>
      </Link>
      <Link href={"/produtos"}>
        <h3 className="font-extrabold text-lg text-yellow-500">PRODUTOS</h3>
      </Link>
    </nav>
  );
}
