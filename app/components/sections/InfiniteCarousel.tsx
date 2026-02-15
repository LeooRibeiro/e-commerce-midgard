interface InfiniteCarouselProps {
  items: string[]
  speed?: number // quanto menor, mais rápido (segundos)
}

export function InfiniteCarousel({
  items,
  speed = 25,
}: InfiniteCarouselProps) {
  return (
    <div className="relative mt-15 w-full overflow-hidden py-6">
      <div
        className="flex w-max animate-scroll hover:[animation-play-state:paused]"
        style={{ animationDuration: `${speed}s` }}
      >
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="relative w-60 h-30 mx-4 px-6 py-3 bg-zinc-900 text-white text-2xl flex justify-center items-center rounded-2xl shadow-md whitespace-nowrap"
          >

            {item}
          </div>
          
        ))}
      </div>
    </div>
  )
}
