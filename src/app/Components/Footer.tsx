
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import {Montserrat} from "next/font/google"

interface FooterMT {
    marginTop: number | string;
    color? : string;
}

const montserrat = Montserrat({ subsets: ['latin'] })
export default function Footer (props: FooterMT) {
    const { marginTop, color } = props;
    return (
        <div className={montserrat.className}>
            <div className={`w-[1576px] h-[488px] bottom-0 left-0  ${marginTop}`}>
                <div className={`w-[1576px] h-[142px] bg-[#FAFAFA] ${color}`}>
                    <div className="w-[1050px] h-[138px] left-[270px] py-10 absolute ">
                        <div className="w-[1049.5px] h-[58px] gap-[577.5px]">
                            <div className="w-[236px] h-[58px] gap-[10px] md:flex-row flex items-center sm:flex-col">
                                <h1 className="w-[108px] h-[32px] top-[13px] font-bold text-2xl tracking-[0.1px] text-[#252B42]">Bandage</h1>
                                <div className="flex items-center right-10 absolute gap-4">
                                    <FaFacebook className="w-6 h-6 cursor-pointer hover:opacity-60 text-[#23A6F0]" />
                                    <FaInstagram className="w-6 h-6 cursor-pointer hover:opacity-60 text-[#23A6F0]" />
                                    <FaTwitter className="w-6 h-6 cursor-pointer hover:opacity-60 text-[#23A6F0]" />
                                </div>
                            </div>
                        </div>
                    </div>      
                </div>

                <div className="w-[1576px] h-[272px] top-[142px]">
                    <div className="w-[1050px] h-[270px] left-[270px] absolute py-[50px]">
                        <div className="w-[1041px] h-[170px] gap-[30px] flex">
                            <div className="w-[148px] h-[170px] gap-[20px] flex flex-col">
                                <h1 className="w-[115px] h-[24px] font-bold text-base tracking-[0.1px]">
                                    Company Info
                                </h1>
                                <div className="w-[110px] h-[126px] flex flex-col gap-[10px]">
                                    <a href="" className="w-[80px] h-[24px] text-[#737373] text-sm leading-[24px] tracking-[0.2px] font-bold hover:opacity-60">About Us</a>
                                    <a href="" className="w-[50px] h-[24px] text-[#737373] text-sm leading-[24px] tracking-[0.2px] font-bold hover:opacity-60">Carrier</a>
                                    <a href="" className="w-[110px] h-[24px] text-[#737373] text-sm leading-[24px] tracking-[0.2px] font-bold hover:opacity-60">We Are Hiring</a>
                                    <a href="" className="w-[33px] h-[24px] text-[#737373] text-sm leading-[24px] tracking-[0.2px] font-bold hover:opacity-60">Blog</a>
                                </div>
                            </div>

                            <div className="w-[152px] h-[170px] gap-[20px] flex flex-col">
                                <h1 className="w-[115px] h-[24px] font-bold text-base tracking-[0.1px]">
                                    Legal
                                </h1>
                                <div className="w-[110px] h-[126px] flex flex-col gap-[10px]">
                                    <a href="" className="w-[80px] h-[24px] text-[#737373] text-sm leading-[24px] tracking-[0.2px] font-bold hover:opacity-60">About Us</a>
                                    <a href="" className="w-[50px] h-[24px] text-[#737373] text-sm leading-[24px] tracking-[0.2px] font-bold hover:opacity-60">Carrier</a>
                                    <a href="" className="w-[110px] h-[24px] text-[#737373] text-sm leading-[24px] tracking-[0.2px] font-bold hover:opacity-60">We Are Hiring</a>
                                    <a href="" className="w-[33px] h-[24px] text-[#737373] text-sm leading-[24px] tracking-[0.2px] font-bold hover:opacity-60">Blog</a>
                                </div>
                            </div>

                            <div className="w-[160px] h-[170px] gap-[20px] flex flex-col">
                                <h1 className="w-[115px] h-[24px] font-bold text-base tracking-[0.1px]">
                                    Features
                                </h1>
                                <div className="w-[160px] h-[126px] flex flex-col gap-[10px]">
                                    <a href="" className="w-[160px] h-[24px] text-[#737373] text-sm leading-[24px] tracking-[0.2px] font-bold hover:opacity-60">Business Marketing</a>
                                    <a href="" className="w-[110px] h-[24px] text-[#737373] text-sm leading-[24px] tracking-[0.2px] font-bold hover:opacity-60">User Analytic</a>
                                    <a href="" className="w-[80px] h-[24px] text-[#737373] text-sm leading-[24px] tracking-[0.2px] font-bold hover:opacity-60">Live Chat</a>
                                    <a href="" className="w-[160px] h-[24px] text-[#737373] text-sm leading-[24px] tracking-[0.2px] font-bold hover:opacity-60">Unlimited Support</a>
                                </div>
                            </div>

                            <div className="w-[160px] h-[170px] gap-[20px] flex flex-col">
                                <h1 className="w-[115px] h-[24px] font-bold text-base tracking-[0.1px]">
                                    Resources
                                </h1>
                                <div className="w-[160px] h-[126px] flex flex-col gap-[10px]">
                                    <a href="" className="w-[160px] h-[24px] text-[#737373] text-sm leading-[24px] tracking-[0.2px] font-bold hover:opacity-60">IOS & Android</a>
                                    <a href="" className="w-[140px] h-[24px] text-[#737373] text-sm leading-[24px] tracking-[0.2px] font-bold hover:opacity-60">Watch a Demo</a>
                                    <a href="" className="w-[80px] h-[24px] text-[#737373] text-sm leading-[24px] tracking-[0.2px] font-bold hover:opacity-60">Customers</a>
                                    <a href="" className="w-[160px] h-[24px] text-[#737373] text-sm leading-[24px] tracking-[0.2px] font-bold hover:opacity-60">API</a>
                                </div>
                            </div>

                            <div className="w-[321px] h-[131px] gap-[20px] flex flex-col">
                                <h1 className="w-[115px] h-[24px] font-bold text-base tracking-[0.1px]">
                                    Get In Touch
                                </h1>
                                <div className="w-[321px] h-[120px]">
                                    <div className="w-[321px] h-[58px] bg-[#E6E6E6] border-[1px] rounded-[5px] flex items-center absolute ">
                                        <h1 className="text-[#737373] text-sm leading-7 tracking-[0.2px] ml-[20px]">Your Email</h1>
                                        <a href="" className="w-[117px] h-[58px] left-[204px] absolute bg-[#23A6F0] flex items-center justify-center text-white
                                        font-normal text-sm leading-7 tracking-[0.2px] hover:opacity-45">Subscribe</a>
                                    </div>
                                    <h1 className="text-[#737373] text-sm leading-[28px] tracking-[0.2px] font-normal mt-16">Lore imp sum dolor Amit</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
                
                <div className={`w-[1572px] h-[74px] bg-[#FAFAFA] ${color}`}>
                    <div className="w-[1050px] h-[74px] left-[270px] py-[25px] absolute">
                        <h1 className="text-[#737373] font-bold text-sm leading-6 tracking-[0.2px]">Made With Love By Finland All Right Reserved </h1>
                    </div>
                </div>

            </div>
        </div>
    )
}