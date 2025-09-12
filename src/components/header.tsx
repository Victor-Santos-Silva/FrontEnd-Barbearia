import Image from 'next/image'
import Link from 'next/link'
import logo from '@/../public/assets/Logo Marca.png'

export default function Header () {
  return (
    <header className='bg-[#002654] p-4 flex flex-col md:flex-row items-center justify-between text-white'>
      {/* Logo */}
      <Image
        src={logo}
        alt='Logo Marca'
        className='w-[200px] h-auto pl-3]  hover:scale-105 transition'
      />
      {/* Links principais */}
      <div className='flex gap-10 mt-4 md:mt-0 '>
        <Link href='/'>Home</Link>
        <Link href='/servicos'>Serviços</Link>
        <Link href='/agendar'>Agendar</Link>
      </div>

      {/* Login e cadastro */}
      <div className='flex gap-10 mt-4 md:mt-0 pr-0 md:pr-12 '>
        <Link href='/login'>Login</Link>
        <Link href='/cadastro'>Cadastro</Link>
      </div>
    </header>
  )
}
