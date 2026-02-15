import Heromain from "./components/sections/Heromain"
import Demonstration from "./components/sections/Demonstration"
import { InfiniteCarousel } from "./components/sections/InfiniteCarousel"
import { Avaliation } from "./components/sections/Avaliation"
export default async function Home() {

    const categorias = [
    "Eletrônicos",
    "Moda",
    "Casa",
    "Esportes",
    "Acessórios",
    "Games",
    "Beleza",
    "Automotivo",
  ]
  // const res = await fetch("http://localhost:3000/api/health")
  // const data = await res.json()

  return (
    <main className="w-full h-auto bg-zinc-950">
      {/* <h1 className="text-2xl font-bold">Next + Tailwind</h1>
      <p className="mt-4">{data.message}</p> */}
        <Heromain/>
        <Demonstration/>
        <InfiniteCarousel items={categorias} speed={20} />
        <Avaliation/>
        {/* <div className={`font-skranji text-8xl font-extrabold`}>
          <h1>MIDGARD STORE</h1>
        </div> */}
 

    </main>
  )
}
