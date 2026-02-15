import Image from "next/image"

interface Testimonial {
  id: number
  name: string
  image: string
  comment: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Julian Stroufh",
    image: "/modeloViking1.jpg",
    comment: "Excelente atendimento e qualidade impecável!",
    rating: 5,
  },
  {
    id: 2,
    name: "Carlos Lima",
    image: "/modeloViking1.jpg",
    comment: "Entrega rápida e produto exatamente como descrito.",
    rating: 4,
  },
  {
    id: 3,
    name: "Juliana Alves",
    image: "/modeloViking5.jpg",
    comment: "Super recomendo! Voltarei a comprar.",
    rating: 5,
  },
  {
    id: 4,
    name: "Nicolle Serrano",
    image: "/modeloViking5.jpg",
    comment: "Muito bom, apenas a embalagem poderia melhorar.",
    rating: 4,
  },
]

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 mt-2">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < rating ? "text-yellow-400" : "text-zinc-500"}>
          ★
        </span>
      ))}
    </div>
  )
}

export function Avaliation() {
  return (
    <section className="relative py-20 bg-black text-white">
      <div className="relative max-w-6xl mx-auto">

        {/* Linha central */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-1 bg-zinc-700" />

        <div className="flex flex-col gap-16">
          {testimonials.map((item, index) => {
            const isLeft = index % 2 === 0

            return (
              <div
                key={item.id}
                className={`relative w-full flex ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
              >
                <div className="w-full md:w-[45%] bg-zinc-900 rounded-2xl p-6 shadow-lg border border-zinc-800">
                  <div className="flex gap-4 items-center">
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden border border-zinc-700">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <Stars rating={item.rating} />
                    </div>
                  </div>

                  <p className="mt-4 text-zinc-300">{item.comment}</p>
                </div>

                {/* Bolinha na linha */}
                <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-white rounded-full border-4 border-black" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
