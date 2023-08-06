import Image from 'next/image'
import Pessoa from './images/vendedor.png'

interface Props{
    name: String,
    content: String,
    cargo: String,
}

export default function Depoimento(props: Props){
    return(
        <div className="relative mx-auto w-11/12 bg-neutral-100 p-10 rounded-2xl">
            <Image src={Pessoa} alt="" className='relative mx-auto w-32 rounded-full border-2 border-zinc-300'></Image>
            <h1 className='w-full text-center font-bold text-2xl mt-6 text-neutral-800'>{props.name}</h1>
            <p className='mt-3'>{props.content}</p>
            <h6 className='text-center font-bold w-full mt-6'>{props.cargo}</h6>
        </div>
    )
}