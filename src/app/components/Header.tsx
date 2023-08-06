import Image from "next/image"
import Logo from "../images/logo.png"
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import { HiOutlineUser } from 'react-icons/hi'

export default function Header() {
    return(
        <div className="mx-auto w-11/12 rounded-full h-20 py-6 flex justify-between">
            <HiOutlineMenuAlt2 className="text-4xl my-auto"/>
            <Image src={Logo} alt="" className="h-12 w-32 my-auto"/>
            <HiOutlineUser className="text-4xl my-auto"/>
        </div>
    )
}