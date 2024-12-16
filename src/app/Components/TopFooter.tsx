import React from "react"

import { PhoneIcon } from "@heroicons/react/24/outline"
import { EnvelopeIcon } from "@heroicons/react/24/outline"
import { FaInstagram } from "react-icons/fa"
import { RiYoutubeLine } from "react-icons/ri"
import { FaFacebook } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"

import {Montserrat} from "next/font/google"

interface TPFOOT {
    color : string;    
}

const montserrat = Montserrat({ subsets: ['latin'] })

export default function TopFooter (props: TPFOOT) {
    const { color } = props
    return (
        <div className={`${color} w-[1577px] h-[56px] md:flex items-center justify-between sm:hidden`} >
            <div className="w-[415px] h-[46px] gap-[10px] flex items-center justify-between">

                <div className="w-[148px] h-[44px] rounded-[5px] p-[10px] gap-[5px] ml-10 flex items-center">
                    <PhoneIcon className="text-white w-6 h-6"/>
                    <div className={montserrat.className}>
                        <h1 className="text-white font-bold text-sm leading-6 tracking-[0.2px] w-[104px] h-[24px]
                        flex items-center">(225) 555-0118</h1>
                    </div>
                </div>

                <div className="w-[310px] h-11 rounded-[5px] p-[10px] gap-[5px]">
                    <div className="flex items-center gap-4">
                        <EnvelopeIcon className="text-white w-6 h-6 ml-5"/>
                        <div className={montserrat.className}>
                            <button className="text-white font-bold text-sm leading-6 tracking-[0.2px]">Michelle.rivera@example.com</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="w-[332px] h-[44px] p-[10px] gap-[10px]">
                <div className={montserrat.className}>
                    <h1 className="text-white w-[322px] h-[24px] flex items-center font-bold
                    text-sm leading-6 tracking-[0.2px]">Follow Us  and get a chance to win 80% off</h1>
                </div>
            </div>

            <div className="w-[233px] h-[46px] gap-[10px] p-[10px] flex items-center">
                <div className={montserrat.className } >
                    <div className="flex items-center gap-2">
                        <h1 className="text-white font-bold text-sm leading-6 tracking-[0.2px]">Follow Us  :</h1>
                        <div className="flex items-center gap-3">
                            <FaInstagram  className="text-white w-6 h-6" />
                            <RiYoutubeLine className="text-white w-6 h-6" />
                            <FaFacebook  className="text-white w-6 h-6" />
                            <FaTwitter  className="text-white w-6 h-6" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}