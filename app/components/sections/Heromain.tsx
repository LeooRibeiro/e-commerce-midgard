import Image from "next/image";

export default function Heromain() {
  return (
    <section className="relative h-screen w-full flex pt-60 justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/hero-bg.jpg"
        alt="Background"
        fill
        priority
        className="object-cover"
      />

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="font-black bg-linear-to-r from-amber-300 via-amber-500 to-orange-500 bg-clip-text text-transparent text-5xl sm:text-[6rem] md:text-[10rem] lg:text-[14rem] leading-none tracking-[0.15em]">
          MIDGARD
        </h1>
        <p className="text-yellow-500 font-medium mt-4 font-body text-lg tracking-[0.3em] text-muted-foreground uppercase">
          Forjando Deuses
        </p>
      </div>
    </section>
  );
}
