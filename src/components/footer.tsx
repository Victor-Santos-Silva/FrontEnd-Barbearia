import Image from 'next/image'
import Link from 'next/link'
import logo from '@/../public/assets/Logo Marca.png'
import { FaInstagram } from 'react-icons/fa'

export default function Footer () {
  return (
    <footer className='bg-[#002654] p-4 flex flex-col md:flex-row items-center justify-between text-white'>
      {/* Logo */}
      <Image
        src={logo}
        alt='Logo Marca'
        className='w-[200px] h-auto pl-3] hover:scale-105 transition'
      />
      {/* Links principais */}
      <div className='flex gap-10 mt-4 md:mt-0 '>
        <Link href='/'>Home</Link>
        <Link href='/servicos'>Serviços</Link>
        {/*<Link href='/agendar'>Agendar</Link> */}
      </div>

      <div className='hidden md:flex md:gap-10'>
        <h1>© 2025 Booksy Inc. Todos os direitos reservados</h1>
      </div>

      {/* Login e cadastro */}
      <div>
        <Link href='https://www.instagram.com/joorginho23/' target='_blank'>
          <FaInstagram className='text-white w-10 h-10 hover:text-[#CC1424] hover:scale-110 hover:rotate-12 transition' />
        </Link>
      </div>
    </footer>
  )
}
