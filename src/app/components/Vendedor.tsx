import Image from "next/image"
import Link from "next/link"
import { BiLogoWhatsapp } from 'react-icons/bi'
import Pessoa from './images/vendedor.png'
import path from "path"

interface Props{
    name: String,
}

export default function Vendedor(props: Props){
    return(
        <Link href="" className="my-4">
        <div className="min-w-512 bg-neutral-100 rounded-xl p-4">
            <Image src={Pessoa} alt="" className="mx-auto w-32 rounded-full border-2 border-red-600"></Image>
            <h1 className="font-bold text-xl w-full text-center text-neutral-800 mt-2">{props.name}</h1>
        </div>
        <div className="top-2 p-1 bg-green-500 text-white flex relative left-0 w-full rounded-md text-center px-5"><BiLogoWhatsapp className="relative my-auto text-lg"/><p className="relative text-right w-full">Whatsapp</p></div>
        </Link>
    )
}