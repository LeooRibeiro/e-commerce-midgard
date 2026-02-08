import NavMenu from "../sections/Nav.Menu";
import Button from "../ui/Button";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-blue-100 shadow-md">
      <div className="mx-auto flex justify-between h-16 max-w-8/12 gap-50 items-center px-4 sm:px-6 lg:px-8">
        {/* Esquerda */}
        <NavMenu />

        {/* Centro */}
        <div className="flex items-center font-bold mr-50">
          <Image
            src="/simboloTriquedra.png"
            alt="Logo da empresa"
            width={72}
            height={72}
          />
        </div>

        {/* Direita */}
        <Button>Descobra</Button>
      </div>
    </header>
  );
}
