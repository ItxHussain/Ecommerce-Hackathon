import { Montserrat } from "next/font/google"
import { HiArrowRight } from "react-icons/hi"

const montserrat = Montserrat({ subsets: ['latin'] })


export default function Navbar2 () {
    return (
        <div className={montserrat.className}>
            <div className="w-[1322px] h-[91px] flex items-center justify-between"> 
                <div className="w-[187px] h-[58px] mt-[17px] ml-[180px] flex items-center">
                    <a href="/" className="font-bold text-2xl tracking-[0.1px]">Bandage</a>
                </div>

                <div className="w-[815px] h-[58px] mt-4 ml-[250px] flex items-center justify-between">
                    <div className="w-[275px] h-[24px] mt-[17px] gap-[21px] flex items-center justify-between">
                        <a href="/" className="font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]">Home</a>
                        <a href="/ProductList" className="font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]">Product</a>
                        <a href="" className="font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]">Pricing</a>
                        <a href="" className="font-bold text-sm leading-6 tracking-[0.2px] text-[#737373]">Contact</a>
                    </div>

                    <div className="w-[300px] h-[52px] mt-[3px] ml-[280px] gap-[45px] flex items-center justify-center">
                        <button className="font-bold text-sm leading-[22px] tracking-[0.2px] text-[#23A6F0]">Login</button>
                        <button className="w-[214px] h-[52px] bg-[#23A6F0] rounded-[5px] ">
                            <h1 className="font-bold text-sm leading-[22px] tracking-[0.2px] text-[#FFFFFF] flex items-center justify-center gap-5">Become a member
                                 <HiArrowRight className="h-4 w-4"/></h1>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}