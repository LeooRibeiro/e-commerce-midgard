export default function Category() {
  return (
    <section className="max-w-8/12 h-auto mx-auto mt-25">
      <div className="grid grid-cols-8 grid-rows-2 gap-4">
        <div className="w-auto h-50 bg-gray-400 col-span-2 row-span-2">
            ROUPAS
        </div>
        <div className="w-auto h-50 bg-gray-400 col-span-2 row-span-2 col-start-3">
            ACESSÓRIOS
        </div>
        <div className="w-auto h-50 bg-gray-400 col-span-2 row-span-2 col-start-5">
            DECORATIVOS
        </div>
        <div className="w-auto h-50 bg-gray-400 col-span-2 row-span-2 col-start-7">
            TENDENCIAS
        </div>
      </div>
    </section>
  );
}
