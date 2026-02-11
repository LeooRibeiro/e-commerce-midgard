import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative max-w-8/12 mx-auto h-auto">
      <main className="relative w-full h-175">
        <Image
          src="/bg-midgardns.png"
          alt="Background"
          fill
          priority
          className="object-contain"
        />
        <div className="relative mx-auto ml-40 w-10/12 h-full">
          {/* IMAGEM DE FUNDO */}
          <Image
            src="/marteloThor.png"
            alt="Background"
            fill
            priority
            className="object-cover"
          />
        </div>
      </main>
    </section>
  );
}
