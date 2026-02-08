import Hero from "./components/sections/Hero"
export default async function Home() {

  // const res = await fetch("http://localhost:3000/api/health")
  // const data = await res.json()

  return (
    <main className="">
      {/* <h1 className="text-2xl font-bold">Next + Tailwind</h1>
      <p className="mt-4">{data.message}</p> */}
      <div className="mx-auto mt-10">
        <Hero/>
        {/* <div className={`font-skranji text-8xl font-extrabold`}>
          <h1>MIDGARD STORE</h1>
        </div> */}
      </div>

    </main>
  )
}
