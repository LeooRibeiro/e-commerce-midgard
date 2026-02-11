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

      <section className="w-full h-auto mt-15">
        <div className="w-8/12 grid grid-cols-6 grid-rows-6 gap-4">
          {/* grid 1 */}
          <div className="relative col-span-4 row-span-3">
            <Image
              src="/modeloViking3.jpg"
              alt="Background"
              fill
              priority
              className="object-bottom"
            />
          </div>

          {/* grid 2 */}
          <div className=" flex flex-col justify-end bg-gray-200 p-6 h-80 col-span-2 row-span-3 col-start-5">
            <h3 className="text-black text-sm font-semibold">Mini título</h3>
            <p className="text-slate-500 text-sm">
              Uma descrição breve do conteúdo do card.
            </p>

            <button className="mt-2 bg-black text-white text-sm px-4 py-2 rounded-md w-fit hover:bg-gray-900 transition">
              Ação
            </button>
          </div>

          {/* grid 3 */}
          <div className=" flex flex-col justify-end bg-gray-200 p-6 h-80 col-span-2 row-span-3 row-start-4">
            <h3 className="text-black text-sm font-semibold">Mini título</h3>
            <p className="text-slate-500 text-sm">
              Uma descrição breve do conteúdo do card.
            </p>

            <button className="mt-2 bg-black text-white text-sm px-4 py-2 rounded-md w-fit hover:bg-gray-900 transition">
              Ação
            </button>
          </div>

          {/* grid 4 */}
          <div className="relative col-span-4 row-span-3 col-start-3 row-start-4">
            <Image
              src="/canecas1.jpg"
              alt="Background"
              fill
              priority
              className="object-bottom"
            />
          </div>
        </div>
        <div className="w-auto h-auto">
          <div className="relative">
            <Image
              src="/modeloViking4.jpg"
              alt="Background"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </section>
  );
}
