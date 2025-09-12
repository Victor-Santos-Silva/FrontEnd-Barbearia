import Footer from '@/components/footer'
import Header from '@/components/header'
import Image from 'next/image'
import fundo from '@/../public/assets/o-que-fazer-em-paris-a-noite.jpg'

export default function Cadastro () {
  return (
    <section>
      <Header />
      <div className='w-full h-screen relative'>
        <Image src={fundo} alt='fundo' className='w-full h-full object-cover' />

        <form
          action='/cadastro'
          method='post'
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
     bg-[#CC1424] p-6 md:p-10 rounded-lg shadow-lg w-11/12 max-w-2xl'
        >
          <h1 className='text-white text-2xl font-bold underline mb-6 text-center'>
            CADASTRO
          </h1>

          {/* Grid de 2 colunas */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <label
                htmlFor='nome'
                className='text-white font-bold w-full mb-1 block'
              >
                Nome Completo:
              </label>
              <input
                type='text'
                name='username'
                className='bg-white w-full p-2 rounded-xl'
              />
            </div>

            <div>
              <label
                htmlFor='telefone'
                className='text-white font-bold w-full mb-1 block'
              >
                Telefone:
              </label>
              <input
                type='text'
                name='telefone'
                className='bg-white w-full p-2 rounded-xl'
              />
            </div>

            <div>
              <label
                htmlFor='cpf'
                className='text-white font-bold w-full mb-1 block'
              >
                CPF:
              </label>
              <input
                type='text'
                name='cpf'
                className='bg-white w-full p-2 rounded-xl'
              />
            </div>

            <div>
              <label
                htmlFor='data_nascimento'
                className='text-white font-bold w-full mb-1 block'
              >
                Data de Nascimento:
              </label>
              <input
                type='text'
                name='data_nascimento'
                className='bg-white w-full p-2 rounded-xl'
              />
            </div>

            <div>
              <label
                htmlFor='email'
                className='text-white font-bold w-full mb-1 block'
              >
                Email:
              </label>
              <input
                type='text'
                name='email'
                className='bg-white w-full p-2 rounded-xl'
              />
            </div>

            <div>
              <label
                htmlFor='senha'
                className='text-white font-bold w-full mb-1 block'
              >
                Senha:
              </label>
              <input
                type='password'
                name='password'
                className='bg-white w-full p-2 rounded-xl'
              />
            </div>

            <div className='md:col-span-2'>
              <label
                htmlFor='confirmar_senha'
                className='text-white font-bold w-full mb-1 block'
              >
                Confirmar Senha:
              </label>
              <input
                type='password'
                name='confirmar_password'
                className='bg-white w-full p-2 rounded-xl'
              />
            </div>
          </div>

          {/* Botão */}
          <div className='flex justify-center mt-6'>
            <button
              type='submit'
              className='text-[#CC1424] font-bold w-1/2 bg-white p-2 rounded-xl hover:bg-gray-100 cursor-pointer'
            >
              CADASTRAR
            </button>
          </div>

          <p className='text-white mt-4 text-center'>
            Não tem uma conta?{' '}
            <a href='/login' className='underline'>
              Já tem um cadastro? Faça login
            </a>
          </p>
        </form>
      </div>

      <Footer />
    </section>
  )
}
