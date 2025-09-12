import Image from 'next/image'
import cabelo1 from '@/../public/assets/corte-de-cabelo-masculino-baixo-14-2.jpg'
import cabelo2 from '@/../public/assets/Captura de tela 2025-08-12 194646.png'
import cabelo3 from '@/../public/assets/Captura de tela 2025-08-12 194930.png'
import cabelo4 from '@/../public/assets/Captura de tela 2025-08-12 195138.png'
import Link from 'next/link'

export default function Card () {
  return (
    <section className='space-y-6 p-4'>
      {/* Card 1 */}
      <div className='flex flex-col md:flex-row p-4 w-full md:w-3/4 lg:w-1/2 m-auto bg-[#002654] text-white border rounded-lg'>
        <Image
          src={cabelo1}
          alt=''
          className='w-full md:w-1/2 m-auto rounded-lg'
        />
        <div className='flex flex-col items-center justify-center text-center p-4'>
          <h1 className='text-red-700 font-bold text-2xl md:text-4xl'>
            Corte Tradicional
          </h1>
          <p className='text-lg md:text-2xl p-2 md:p- font-bold'>
            Clássico e preciso, para manter o visual impecável.
          </p>
          <Link href='https://www.instagram.com/joorginho23/' target='_blank'>
            <button className='bg-red-700 text-white py-2 px-4 rounded cursor-pointer'>
              Reservar
            </button>
          </Link>
        </div>
      </div>
      <br />
      {/* Card 2 */}
      <div className='flex flex-col md:flex-row p-4 w-full md:w-3/4 lg:w-1/2 m-auto bg-[#002654] text-white border rounded-lg'>
        <div className='flex flex-col items-center justify-center text-center p-4'>
          <h1 className='text-red-700 font-bold text-2xl md:text-4xl'>
            Corte Tradicional
          </h1>
          <p className='text-lg md:text-2xl p-2 md:p- font-bold'>
            Clássico e preciso, para manter o visual impecável.
          </p>
          <Link href='https://www.instagram.com/joorginho23/' target='_blank'>
            <button className='bg-red-700 text-white py-2 px-4 rounded cursor-pointer'>
              Reservar
            </button>
          </Link>
        </div>
        <Image
          src={cabelo2}
          alt=''
          className='w-full md:w-1/2 m-auto rounded-lg'
        />
      </div>
      <br />

      {/* Card 3 */}
      <div className='flex flex-col md:flex-row p-4 w-full md:w-3/4 lg:w-1/2 m-auto bg-[#002654] text-white border rounded-lg'>
        <Image
          src={cabelo3}
          alt=''
          className='w-full md:w-1/2 m-auto rounded-lg'
        />
        <div className='flex flex-col items-center justify-center text-center p-4'>
          <h1 className='text-red-700 font-bold text-2xl md:text-4xl'>
            Corte Tradicional
          </h1>
          <p className='text-lg md:text-2xl p-2 md:p- font-bold'>
            Clássico e preciso, para manter o visual impecável.
          </p>
          <Link href='https://www.instagram.com/joorginho23/' target='_blank'>
            <button className='bg-red-700 text-white py-2 px-4 rounded cursor-pointer'>
              Reservar
            </button>
          </Link>
        </div>
      </div>
      <br />

      {/* Card 4 */}
      <div className='flex flex-col md:flex-row p-4 w-full md:w-3/4 lg:w-1/2 m-auto bg-[#002654] text-white border rounded-lg'>
        <div className='flex flex-col items-center justify-center text-center p-4'>
          <h1 className='text-red-700 font-bold text-2xl md:text-4xl'>
            Corte Tradicional
          </h1>
          <p className='text-lg md:text-2xl p-2 md:p- font-bold'>
            Clássico e preciso, para manter o visual impecável.
          </p>
          <Link href='https://www.instagram.com/joorginho23/' target='_blank'>
            <button className='bg-red-700 text-white py-2 px-4 rounded cursor-pointer'>
              Reservar
            </button>
          </Link>
        </div>
        <Image
          src={cabelo4}
          alt=''
          className='w-full md:w-1/2 m-auto rounded-lg'
        />
      </div>
    </section>
  )
}
