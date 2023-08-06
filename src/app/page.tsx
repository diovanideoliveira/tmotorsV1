"use client"

import Image from 'next/image'
import Front from './images/front.png'
import Card from './components/Card'
import Onda from './images/onda.png'
import Onda2 from './images/onda2.png'
import Sobrenos from './images/sobrenos.png'
import Slider from './components/slider/Slider'
import { SwiperSlide, SwiperProps } from 'swiper/react'
import Vendedor from './components/Vendedor'
import Depoimento from './components/Depoimento'

export default function Home() {
  const slidercars: SwiperProps = {
    spaceBetween: 50,
    slidesPerView: 1,
    navigation: true,
    pagination: {
      clickable: true,
    }
  }
  const sliderdepoimentos: SwiperProps = {
    spaceBetween: 50,
    slidesPerView: 1,
    navigation: true,
    pagination: {
      clickable: true,
    }
  }
  return (
    <>
      <div className='z-0 relative px-7 h-80 mt-10'>
        <Image src={Onda} alt='' className='max-h-40 w-full absolute bottom-0 left-0'></Image>
        <h1 className='font-extrabold text-3xl'>A LOJA DO <br /> CARRO BAIXO</h1>
        <p className='text-sm font-semibold text-zinc-800 w-11/12 pt-2'>Nossa revenda de carros baixos é o ponto de encontro dos apaixonados por customização e velocidade.</p>
        <Image src={Front} alt='' className='w-72 absolute bottom-2 -right-3' />
      </div>
      <div className='relative z-50 bg-black pt-24 pb-6'>
        <p className='font-extrabold text-white w-full text-center text-xl mb-2 mt-10'>CARROS EM DESTAQUE</p>
        <Slider settings={slidercars}>
          <SwiperSlide><Card brand="VOLKSWAGEN" type="FOX" price="62.900" description="1.6 MSI TOTAL FLEX XTREME 4P MANUAL" /></SwiperSlide>
          <SwiperSlide><Card brand="VOLKSWAGEN" type="FOX" price="62.900" description="1.6 MSI TOTAL FLEX XTREME 4P MANUAL" /></SwiperSlide>
          <SwiperSlide><Card brand="VOLKSWAGEN" type="FOX" price="62.900" description="1.6 MSI TOTAL FLEX XTREME 4P MANUAL" /></SwiperSlide>
          <SwiperSlide><Card brand="VOLKSWAGEN" type="FOX" price="62.900" description="1.6 MSI TOTAL FLEX XTREME 4P MANUAL" /></SwiperSlide>
          <SwiperSlide><Card brand="VOLKSWAGEN" type="FOX" price="62.900" description="1.6 MSI TOTAL FLEX XTREME 4P MANUAL" /></SwiperSlide>
          <SwiperSlide><Card brand="VOLKSWAGEN" type="FOX" price="62.900" description="1.6 MSI TOTAL FLEX XTREME 4P MANUAL" /></SwiperSlide>
        </Slider>
      </div>
      <Image src={Onda2} alt='' className='w-full max-h-10'></Image>
      <div className='w-full p-10 mt-6'>
        <h1 className='color1 font-extrabold text-2xl mb-3'>SOBRE NÓS</h1>
        <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eget tortor vel consectetur. Sed quis lectus eu mauris laoreet efficitur non et libero. Ut vel nisi id nisl venenatis fermentum. Curabitur euismod suscipit purus, id facilisis neque malesuada nec. Vivamus et risus in neque tempor bibendum vel a dui. Duis egestas justo non est tincidunt, in eleifend tortor malesuada. Nunc vulputate justo quam, sit amet bibendum mauris elementum id. Vestíbulo id interdum leo. Suspendisse eu elit nec mi facilisis cursus et a arcu.</p>
        <Image src={Sobrenos} alt='' className='rounded-xl mt-6'></Image>
      </div>
      <h1 className='font-extrabold color1 w-full text-2xl text-center mt-8'>FALE COM NOSSOS <br /> VENDEDORES</h1>
      <div className='w-10/12 mx-auto relative flex flex-wrap justify-around mt-4 mb-10'>
        <Vendedor name="Rafael"/>
        <Vendedor name="Willian"/>
        <Vendedor name="Lucas"/>
      </div>
      <div className='divider bg-black w-11/12 mx-auto mb-10'></div>
      <h1 className='font-extrabold color1 text-2xl text-center'>ALGUNS <br /> DEPOIMENTOS</h1>
      <Slider settings={sliderdepoimentos}>
        <SwiperSlide><Depoimento name="Rafael" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eget tortor vel consectetur. Sed quis lectus eu mauris laoreet efficitur non et libero. Ut vel nisi id nisl venenatis fermentum. Curabitur euismod suscipit purus, id facilisis neque malesuada nec. Vivamus et risus in neque tempor bibendum vel a dui. Duis egestas justo non eston." cargo="Vendedor da TMotors"/></SwiperSlide>
        <SwiperSlide><Depoimento name="Rafael" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eget tortor vel consectetur. Sed quis lectus eu mauris laoreet efficitur non et libero. Ut vel nisi id nisl venenatis fermentum. Curabitur euismod suscipit purus, id facilisis neque malesuada nec. Vivamus et risus in neque tempor bibendum vel a dui. Duis egestas justo non eston." cargo="Vendedor da TMotors"/></SwiperSlide>
      </Slider>
    </>
  )
}
