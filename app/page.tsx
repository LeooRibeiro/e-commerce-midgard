import Hero from "./components/sections/Hero"
import Demonstration from "./components/sections/Demonstration"
import Category from "./components/sections/Category"
export default async function Home() {

  // const res = await fetch("http://localhost:3000/api/health")
  // const data = await res.json()

  return (
    <main className="w-full h-auto">
      {/* <h1 className="text-2xl font-bold">Next + Tailwind</h1>
      <p className="mt-4">{data.message}</p> */}
        <Hero/>
        <Demonstration/>
        <Category/>
        {/* <div className={`font-skranji text-8xl font-extrabold`}>
          <h1>MIDGARD STORE</h1>
        </div> */}
 

    </main>
  )
}
