import Footer from '@/components/footer'
import Header from '@/components/header'
import Image from 'next/image'

import banner from '@/../public/assets/banner.png'
import SobreNos from '../../components/sobreNos'
import Card from '@/components/serviços'

export default function Home () {
  return (
    <section>
      <Header />
      <Image src={banner} alt='Banner'/>
      <SobreNos />
      <Card />
      <Footer />
    </section>
  )
}
