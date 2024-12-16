import Image from "next/image";

import Hooli from "@/app/Assets/Hooli.png"
import Lyft from "@/app/Assets/Lyft.png"
import Capz from "@/app/Assets/Capz.png"
import Stripe from "@/app/Assets/Stripe.png"
import Aws from "@/app/Assets/Aws.png"
import Bot from "@/app/Assets/Bot.png"

export default function Logos () {
    return (
        <div className="w-[1050px] h-[175px] ml-[270px] flex py-[50px] gap-[90px]">
            <Image src={Hooli} alt="Logo" className="w-[100px]" />
            <Image src={Lyft} alt="Logo" className="w-[100px]" />
            <Image src={Capz} alt="Logo" className="w-[100px]" />
            <Image src={Stripe} alt="Logo" className="w-[100px]" />
            <Image src={Aws} alt="Logo" className="w-[100px]" />
            <Image src={Bot} alt="Logo" className="w-[100px]" />
        </div>
    )
}