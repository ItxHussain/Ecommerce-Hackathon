
interface TeamCard {
    image: any;
}

import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

import Image from "next/image";
import {Montserrat} from "next/font/google"

const montserrat = Montserrat({ subsets: ['latin'] })
export default function TeamCard (props : TeamCard) {
    const { image } = props;
    return (
        <div className={montserrat.className}>
            <div className="w-[316px] h-[383px] flex flex-col ">
                <div className="w-[316] h-[231px]">
                    <Image src={image} alt="TeamMember" className="rounded-sm"/>
                </div>
                <div className="w-[316px] h-[152px] p-[30px] gap-[10px] flex flex-col items-center">
                    <h1 className="w-[83px] h-[24px] font-bold text-base tracking-[0.1px] text-center text-[#252B42]">Username</h1>
                    <h3 className="w-[77px] h-[24px] font-bold text-sm leading-6 tracking-[0.2px] text-center text-[#737373]">Profession</h3>
                    <div className="flex items-center justify-center gap-5">
                        <FaFacebook className="text-[#23A6F0] h-6 w-6"/>
                        <FaInstagram className="text-[#23A6F0] h-6 w-6"/>
                        <FaTwitter className="text-[#23A6F0] h-6 w-6"/>
                    </div>
                </div>
            </div>
        </div>
    )
}