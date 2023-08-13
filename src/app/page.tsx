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
import Link from 'next/link'

import { LiaFacebook } from 'react-icons/lia'
import { LiaInstagram } from 'react-icons/lia'
import { LiaWhatsapp } from 'react-icons/lia'

export default function Home() {
  const slidercars1: SwiperProps = {
    spaceBetween: 50,
    slidesPerView: 1,
    navigation: true,
    pagination: {
      clickable: true,
    }
  }
  const slidercars2: SwiperProps = {
    spaceBetween: 50,
    slidesPerView: 2,
    navigation: true,
    pagination: {
      clickable: true,
    }
  }
  const slidercars3: SwiperProps = {
    spaceBetween: 50,
    slidesPerView: 3,
    navigation: true,
    pagination: {
      clickable: true,
    }
  }
  const slidercars4: SwiperProps = {
    spaceBetween: 50,
    slidesPerView: 4,
    navigation: true,
    pagination: {
      clickable: true,
    }
  }
  const slidercars5: SwiperProps = {
    spaceBetween: 50,
    slidesPerView: 5,
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
    <div className="">
      <div className='z-50 relative px-12 h-80 mt-10'>
        <Image src={Onda} alt='' className='max-h-40 w-full absolute bottom-0 left-0'></Image>
        <div className='max1 mx-auto xl:relative'>
          <div className='relative lg:top-8 lg:left-10 md:ml-8'>
            <h1 className='md:text-4xl font-extrabold text-3xl'>A LOJA DO <br /> CARRO BAIXO</h1>
            <p className='md:text-base text-sm font-semibold text-zinc-800 max-w-lg pt-2'>Nossa revenda de carros baixos é o ponto de encontro dos apaixonados por customização e velocidade.</p>
          </div>
          <Image src={Front} alt='' className='min1 lg:carrolg w-6/12 max-w-lg lg:right-24 md:right-4 absolute xl:-bottom-56 -bottom-14 -right-20' />
        </div>
      </div>
      <div className='relative z-0 bg-black pt-24 pb-6'>
        <p className='font-extrabold text-white w-full text-center text-xl mb-2 mt-10'>CARROS EM DESTAQUE</p>
        <div className='flex sm:hidden md:hidden lg:hidden xl:hidden'>
          <Slider settings={slidercars1}>
            <SwiperSlide><Card brand="VOLKSWAGEN" type="FOX" price="62.900" description="1.6 MSI TOTAL FLEX XTREME 4P MANUAL" /></SwiperSlide>
            <SwiperSlide><Card brand="VOLKSWAGEN" type="FOX" price="62.900" description="1.6 MSI TOTAL FLEX XTREME 4P MANUAL" /></SwiperSlide>
            <SwiperSlide><Card brand="VOLKSWAGEN" type="FOX" price="62.900" description="1.6 MSI TOTAL FLEX XTREME 4P MANUAL" /></SwiperSlide>
            <SwiperSlide><Card brand="VOLKSWAGEN" type="FOX" price="62.900" description="1.6 MSI TOTAL FLEX XTREME 4P MANUAL" /></SwiperSlide>
            <SwiperSlide><Card brand="VOLKSWAGEN" type="FOX" price="62.900" description="1.6 MSI TOTAL FLEX XTREME 4P MANUAL" /></SwiperSlide>
            <SwiperSlide><Card brand="VOLKSWAGEN" type="FOX" price="62.900" description="1.6 MSI TOTAL FLEX XTREME 4P MANUAL" /></SwiperSlide>
          </Slider></div>
        <div className='hidden sm:flex md:hidden lg:hidden xl:hidden'>
          <Slider settings={slidercars2}>
            <SwiperSlide><Card brand="VOLKSWAGEN" type="FOX" price="62.900" description="1.6 MSI TOTAL FLEX XTREME 4P MANUAL" /></SwiperSlide>
            <SwiperSlide><Card brand="VOLKSWAGEN" type="FOX" price="62.900" description="1.6 MSI TOTAL FLEX XTREME 4P MANUAL" /></SwiperSlide>
            <SwiperSlide><Card brand="VOLKSWAGEN" type="FOX" price="62.900" description="1.6 MSI TOTAL FLEX XTREME 4P MANUAL" /></SwiperSlide>
            <SwiperSlide><Card brand="VOLKSWAGEN" type="FOX" price="62.900" description="1.6 MSI TOTAL FLEX XTREME 4P MANUAL" /></SwiperSlide>
            <SwiperSlide><Card brand="VOLKSWAGEN" type="FOX" price="62.900" description="1.6 MSI TOTAL FLEX XTREME 4P MANUAL" /></SwiperSlide>
            <SwiperSlide><Card brand="VOLKSWAGEN" type="FOX" price="62.900" description="1.6 MSI TOTAL FLEX XTREME 4P MANUAL" /></SwiperSlide>
          </Slider></div>
        <div className='hidden sm:hidden md:flex lg:hidden xl:hidden'>
          <Slider settings={slidercars2}>
            <SwiperSlide><Card brand="VOLKSWAGEN" type="FOX" price="62.900" description="1.6 MSI TOTAL FLEX XTREME 4P MANUAL" /></SwiperSlide>
            <SwiperSlide><Card brand="VOLKSWAGEN" type="FOX" price="62.900" description="1.6 MSI TOTAL FLEX XTREME 4P MANUAL" /></SwiperSlide>
            <SwiperSlide><Card brand="VOLKSWAGEN" type="FOX" price="62.900" description="1.6 MSI TOTAL FLEX XTREME 4P MANUAL" /></SwiperSlide>
            <SwiperSlide><Card brand="VOLKSWAGEN" type="FOX" price="62.900" description="1.6 MSI TOTAL FLEX XTREME 4P MANUAL" /></SwiperSlide>
            <SwiperSlide><Card brand="VOLKSWAGEN" type="FOX" price="62.900" description="1.6 MSI TOTAL FLEX XTREME 4P MANUAL" /></SwiperSlide>
            <SwiperSlide><Card brand="VOLKSWAGEN" type="FOX" price="62.900" description="1.6 MSI TOTAL FLEX XTREME 4P MANUAL" /></SwiperSlide>
          </Slider></div>
        <div className='hidden sm:hidden md:hidden lg:flex xl:hidden'>
          <Slider settings={slidercars3}>
            <SwiperSlide><Card brand="VOLKSWAGEN" type="FOX" price="62.900" description="1.6 MSI TOTAL FLEX XTREME 4P MANUAL" /></SwiperSlide>
            <SwiperSlide><Card brand="VOLKSWAGEN" type="FOX" price="62.900" description="1.6 MSI TOTAL FLEX XTREME 4P MANUAL" /></SwiperSlide>
            <SwiperSlide><Card brand="VOLKSWAGEN" type="FOX" price="62.900" description="1.6 MSI TOTAL FLEX XTREME 4P MANUAL" /></SwiperSlide>
            <SwiperSlide><Card brand="VOLKSWAGEN" type="FOX" price="62.900" description="1.6 MSI TOTAL FLEX XTREME 4P MANUAL" /></SwiperSlide>
            <SwiperSlide><Card brand="VOLKSWAGEN" type="FOX" price="62.900" description="1.6 MSI TOTAL FLEX XTREME 4P MANUAL" /></SwiperSlide>
            <SwiperSlide><Card brand="VOLKSWAGEN" type="FOX" price="62.900" description="1.6 MSI TOTAL FLEX XTREME 4P MANUAL" /></SwiperSlide>
          </Slider></div>
        <div className='maximolarguracarros mx-auto hidden sm:hidden md:hidden lg:hidden xl:flex'>
          <Slider settings={slidercars4}>
            <SwiperSlide><Card brand="VOLKSWAGEN" type="FOX" price="62.900" description="1.6 MSI TOTAL FLEX XTREME 4P MANUAL" /></SwiperSlide>
            <SwiperSlide><Card brand="VOLKSWAGEN" type="FOX" price="62.900" description="1.6 MSI TOTAL FLEX XTREME 4P MANUAL" /></SwiperSlide>
            <SwiperSlide><Card brand="VOLKSWAGEN" type="FOX" price="62.900" description="1.6 MSI TOTAL FLEX XTREME 4P MANUAL" /></SwiperSlide>
            <SwiperSlide><Card brand="VOLKSWAGEN" type="FOX" price="62.900" description="1.6 MSI TOTAL FLEX XTREME 4P MANUAL" /></SwiperSlide>
            <SwiperSlide><Card brand="VOLKSWAGEN" type="FOX" price="62.900" description="1.6 MSI TOTAL FLEX XTREME 4P MANUAL" /></SwiperSlide>
            <SwiperSlide><Card brand="VOLKSWAGEN" type="FOX" price="62.900" description="1.6 MSI TOTAL FLEX XTREME 4P MANUAL" /></SwiperSlide>
          </Slider></div>
      </div>
      <Image src={Onda2} alt='' className='relative md:maximage w-full max-h-10'></Image>
      <div className='maxpage mx-10 2xl:mx-auto gradient m-8 rounded-xl my-20'>
        <div className='p-10 rounded-xl bg-white'>
          <div className=''>
            <h1 className='text-2xl font-extrabold mb-8'>SOBRE NÓS</h1>
            <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eget tortor vel consectetur. Sed quis lectus eu mauris laoreet efficitur non et libero. Ut vel nisi id nisl venenatis fermentum. Curabitur euismod suscipit purus, id facilisis neque malesuada nec. Vivamus et risus in neque tempor bibendum vel a dui. Duis egestas justo non est tincidunt, in eleifend tortor malesuada. Nunc vulputate justo quam, sit amet bibendum mauris elementum id. Vestíbulo id interdum leo. Suspendisse eu elit nec mi facilisis cursus et a arcu.</p>
            <Link href="#"><div className='w-48 h-11 bg-black text-white font-semibold mt-8 pt-2 pl-4 rounded-md hover:bg-white hover:text-black transition duration-1000 border-2 border-black'>Saiba Mais</div></Link>
          </div>
        </div></div>
      <h1 className='relative font-extrabold text-black w-full text-2xl text-center mt-8'>FALE COM NOSSOS <br /> VENDEDORES</h1>
      <div className='vendedores mx-auto relative flex flex-wrap justify-around mt-4 mb-10'>
        <Vendedor name="Rafael" />
        <Vendedor name="Willian" />
        <Vendedor name="Lucas" />
      </div>
      <div className='divider relative bg-black w-11/12 mx-auto mb-10'></div>
      <h1 className='font-extrabold relative text-black text-2xl text-center'>ALGUNS <br /> DEPOIMENTOS</h1>
      <div className='maxdepoimentos mx-auto maxpage'>
        <Slider settings={sliderdepoimentos}>
          <SwiperSlide><Depoimento name="Rafael" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eget tortor vel consectetur. Sed quis lectus eu mauris laoreet efficitur non et libero. Ut vel nisi id nisl venenatis fermentum. Curabitur euismod suscipit purus, id facilisis neque malesuada nec. Vivamus et risus in neque tempor bibendum vel a dui. Duis egestas justo non eston." cargo="Vendedor da TMotors" /></SwiperSlide>
          <SwiperSlide><Depoimento name="Rafael" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eget tortor vel consectetur. Sed quis lectus eu mauris laoreet efficitur non et libero. Ut vel nisi id nisl venenatis fermentum. Curabitur euismod suscipit purus, id facilisis neque malesuada nec. Vivamus et risus in neque tempor bibendum vel a dui. Duis egestas justo non eston." cargo="Vendedor da TMotors" /></SwiperSlide>
        </Slider>
      </div>
      <footer className="pt-16 relative bg-blueGray-200 pb-6 mt-28 bg-black text-neutral-400">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl fonat-semibold text-blueGray-700 text-white font-semibold">Vamos manter contato!</h4>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                Encontre-nos em qualquer uma dessas plataformas.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6 flex">
                  <LiaFacebook className="text-5xl transition duration-1000 hover:text-white"></LiaFacebook>
                  <LiaInstagram className="text-5xl transition duration-1000 hover:text-white"></LiaInstagram>
                  <LiaWhatsapp className="text-5xl transition duration-1000 hover:text-white"></LiaWhatsapp>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="text-white block uppercase text-blueGray-500 text-sm font-semibold mb-2">LINKS ÚTEIS</span>
                  <ul className="list-unstyled">
                    <li>
                      <a className="transition duration-500 hover:text-white text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/presentation?ref=njs-profile">About Us</a>
                    </li>
                    <li>
                      <a className="transition duration-500 hover:text-white text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://blog.creative-tim.com?ref=njs-profile">Blog</a>
                    </li>
                    <li>
                      <a className="transition duration-500 hover:text-white text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.github.com/creativetimofficial?ref=njs-profile">Github</a>
                    </li>
                    <li>
                      <a className="transition duration-500 hover:text-white text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">Free Products</a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="text-white block uppercase text-blueGray-500 text-sm font-semibold mb-2">OUTROS RECURSOS</span>
                  <ul className="list-unstyled">
                    <li>
                      <a className="transition duration-500 hover:text-white text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile">MIT License</a>
                    </li>
                    <li>
                      <a className="transition duration-500 hover:text-white text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/terms?ref=njs-profile">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a className="transition duration-500 hover:text-white text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/privacy?ref=njs-profile">Privacy Policy</a>
                    </li>
                    <li>
                      <a className="transition duration-500 hover:text-white text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/contact-us?ref=njs-profile">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © <span id="get-current-year">2023</span><a href="https://www.creative-tim.com/product/notus-js" className="text-blueGray-500 hover:text-gray-800" target="_blank"> TMOTORS </a>
                <a href="https://www.creative-tim.com?ref=njs-profile" className="text-blueGray-500 hover:text-blueGray-800">por Diovani de Oliveira</a>.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
