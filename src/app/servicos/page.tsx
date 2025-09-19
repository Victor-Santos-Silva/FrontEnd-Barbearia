import Card from '@/components/serviços'
import Footer from '@/components/footer'
import Header from '@/components/header'

export default function ServicosPage () {
  return (
    <main>
      <Header />
      <h1 className='text-center text-red-700 font-bold text-4xl my-10'>
        Nossos Serviços
      </h1>
      <Card />
      <Footer />
    </main>
  )
}
