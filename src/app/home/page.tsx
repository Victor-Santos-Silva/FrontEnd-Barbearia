import Footer from '@/components/Footer/footer'
import Header from '@/components/Header/header'
import Image from 'next/image'

import banner from '@/../public/assets/banner.png'
import SobreNos from '../../components/SobreNos/sobreNos'

export default function Home () {
  return (
    <section>
      <Header />
      <Image src={banner} alt='Banner'/>
      <SobreNos />
      <Footer />
    </section>
  )
}
