import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";

export default function Demonstration() {
  return (
    <section className="relative flex gap-4 max-w-8/12 mx-auto h-auto mt-15">
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
        <div className="relative flex flex-col justify-end bg-gray-200 p-6 h-80 col-span-2 row-span-3 col-start-5">
          <div className="w-full h-full z-0">
            <Image
              src="/yggdrasil.png"
              alt="Background"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="z-20">
            <h3 className="text-black text-lg font-semibold">
              Descubra nossa cultura
            </h3>
            <p className="text-slate-500 text-sm mb-2">
              Movidos a ferro e fogo, para uma experiência única.
            </p>
            <Link href="/products">
              <Button variant="primary">PRODUTOS</Button>
            </Link>
          </div>
        </div>

        {/* grid 3 */}
        <div className="relative flex flex-col justify-end bg-gray-200 p-6 w-auto h-80 col-span-2 row-span-3 row-start-4">
          <Image
            src="/yggdrasil.png"
            alt="Background"
            fill
            priority
            className="object-cover"
          />

          <h3 className="text-black text-lg font-semibold">
            O Norte é para todos
          </h3>
          <p className="text-slate-500 text-sm mb-2">
            Saiba como o norte é para todos!
          </p>

          <Link href="/products">
            <Button variant="primary">SOBRE</Button>
          </Link>
        </div>

        {/* grid 4 */}
        <div className="relative col-span-4 row-span-3 col-start-3 row-start-4">
          <Image
            src="/canecas1.jpg"
            alt="Background"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
      <div className="w-auto h-auto">
        <div className="relative w-105 h-165">
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
  );
}
