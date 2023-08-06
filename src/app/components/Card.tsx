import Carro from '../images/carro.png'
import Image from 'next/image'

interface Props{
    brand: String;
    type: String;
    description: String;
    price: String;
}

export default function Card(props: Props) {
    return(
        <div className="relative z-50 w-80 p-6 bg-neutral-900 mx-auto rounded-xl">
            <div className='font-bold text-xl'><span className='text-white'>{props.brand}</span> <span className='color1'>{props.type}</span></div>
            <p className='font-bold text-neutral-500 text-xs'>{props.description}</p>
            <Image src={Carro} alt="" className='mt-6 w-12/12 mx-auto'/>
            <h1 className='w-full text-right mt-6 font-extrabold text-white text-2xl'>R$ {props.price}</h1>
        </div>
    )
}