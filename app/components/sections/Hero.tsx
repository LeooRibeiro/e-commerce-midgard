import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative max-w-8/12 mx-auto h-175">
      <h1 className="absolute top-18 left-13 font-extrabold text-7xl">MIDGARD</h1>
      <div className="relative mx-auto w-full h-full">
        {/* IMAGEM DE FUNDO */}
        <Image
          src="/marteloThor.png"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
      </div>
      <h1 className="absolute top-18 right-9 font-extrabold text-7xl">STORE</h1>
    </section>
  );
}
