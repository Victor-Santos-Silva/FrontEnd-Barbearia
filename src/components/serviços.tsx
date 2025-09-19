import Image from 'next/image'
import database from '@/data/database.json'
import Link from 'next/link'

export default function Card () {
  const contatoBarbeiro = 'https://www.instagram.com/joorginho23/'

  return (
    <section id='servicos' className="bg-gradient-to-b from-[#001b40] to-[#002654] py-10">
      <h1 className="text-center text-red-600 font-extrabold text-5xl mb-10 tracking-wide">
        Nossos Serviços
      </h1>

      <div
        className="
          grid 
          gap-8
          px-6
          sm:grid-cols-1   /* 1 coluna em telas muito pequenas */
          md:grid-cols-2   /* 2 colunas em tablets */
          lg:grid-cols-3   /* 3 colunas em desktops */
          xl:grid-cols-4   /* 4 colunas em telas grandes */
        "
      >
        {database.map((card, index) => (
          <div
            key={`${card.id}-${index}`}
            className="
              bg-[#002654]
              rounded-2xl
              shadow-lg
              p-6
              flex flex-col
              items-center
              transition
              duration-300
              hover:scale-105
              hover:shadow-2xl
            "
          >
            <Image
              src={card.image}
              alt={card.title}
              width={300}
              height={200}
              className="rounded-2xl object-cover mb-4"
            />

            <h2 className="text-[#CC1424] font-bold text-3xl mb-3 text-center">
              {card.title}
            </h2>

            <p className="text-white text-justify mb-6 leading-relaxed text-base">
              {card.description}
            </p>

            <Link
              href={contatoBarbeiro}
              target="_blank"
              className="
                px-6 py-2
                bg-red-600
                text-white
                rounded-full
                font-bold
                text-lg
                shadow-md
                transition
                duration-300
                hover:bg-red-700
                hover:shadow-xl
              "
            >
              Agendar
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
