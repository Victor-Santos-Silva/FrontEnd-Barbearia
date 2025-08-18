import React from 'react'
const SobreNos = () => {
  return (
    <section className='flex flex-col items-center justify-center gap-8 px-4 py-8 md:flex-row md:justify-around md:px-8 '>
      <div className='md:w-1/2 '>
        <h2 className='mb-4 text-center font-bold text-4xl text-[#CC1424] md:text-5xl '>
          Sobre Nós
        </h2>
        <p className='rounded-lg bg-[#002654] p-5 text-xl text-amber-50 shadow-md md:text-2xl transition-transform duration-300 hover:scale-105'>
          A Barbearia “Le Barbier” nasceu com o objetivo de oferecer mais do que
          um corte de cabelo: queremos proporcionar uma verdadeira experiência
          de cuidado e estilo. Nosso espaço une tradição e modernidade, com
          profissionais especializados que entendem que cada cliente tem seu
          próprio estilo. Aqui, você encontra um ambiente aconchegante,
          atendimento de qualidade e aquele papo descontraído que só uma
          barbearia de verdade oferece.
        </p>
      </div>
    </section>
  )
}

export default SobreNos
