import Footer from '@/components/footer'
import Header from '@/components/header'
import Image from 'next/image'
import fundo from '@/../public/assets/vida-noturna-de-paris.jpg'

export default function Login () {
  return (
    <section>
      <Header />
      <div className='w-full h-screen relative'>
        <Image src={fundo} alt='fundo' className='w-full h-full object-cover' />

        <form
          action='/login'
          method='post'
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
             bg-[#CC1424] p-6 md:p-10 rounded-lg shadow-lg flex flex-col items-center 
             w-11/12 max-w-md'
        >
          <h1 className='text-white text-2xl font-bold underline mb-6'>
            LOGIN
          </h1>

          <label htmlFor='Email' className='text-white font-bold w-full mb-1'>
            Email:
          </label>
          <input
            type='text'
            name='username'
            className='bg-white w-full p-2 mb-4 rounded-xl'
          />

          <label htmlFor='Senha' className='text-white font-bold w-full mb-1'>
            Senha:
          </label>
          <input
            type='password'
            name='password'
            className='bg-white w-full p-2 mb-6 rounded-xl'
          />

          <button
            type='submit'
            className='text-[#CC1424] font-bold w-1/2 bg-white p-2 rounded-xl hover:bg-gray-100 cursor-pointer'
          >
            LOGAR
          </button>

          <p className='text-white mt-4'>
            Não tem uma conta?{' '}
            <a href='/cadastro' className='underline'>
              Cadastre-se
            </a>
          </p>

          <p className='text-white mt-2'>
            Esqueceu sua senha?{' '}
            <a href='/esquecisenha' className='underline'>
              Clique aqui
            </a>
          </p>

        </form>
      </div>

      <Footer />
    </section>
  )
}
