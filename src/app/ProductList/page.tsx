import TopFooter from "../Components/TopFooter";
import Navbar from "../Components/Navbar";
import { Montserrat } from "next/font/google";
import { HiChevronRight } from "react-icons/hi";
import { MdWindow } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi";

import Cardprod1 from "@/app/Assets/Cardprod1.png"
import Cardprod2 from "@/app/Assets/Cardprod2.png"
import Cardprod3 from "@/app/Assets/Cardprod3.png"
import Cardprod4 from "@/app/Assets/Cardprod4.png"
import Cardprod5 from "@/app/Assets/Cardprod5.png"
import Prod1 from "@/app/Assets/Prod1.png"
import Prod2 from "@/app/Assets/Prod2.png"
import Prod3 from "@/app/Assets/Prod3.png"
import Prod4 from "@/app/Assets/Prod4.png"
import Prod5 from "@/app/Assets/Prod5.png"
import Prod6 from "@/app/Assets/Prod6.png"
import Prod7 from "@/app/Assets/Prod7.png"
import Prod8 from "@/app/Assets/Prod8.png"
import Prod9 from "@/app/Assets/Prod9.png"
import Prod10 from "@/app/Assets/Prod10.png"
import Prod11 from "@/app/Assets/Prod11.png"
import Prod12 from "@/app/Assets/Prod12.png"

import CardProduct from "../Components/Cardforproduct";
import CardProduct2 from "../Components/CardProd"
import Footer from "../Components/Footer";
import Logos from "../Components/Logos";

const montserrat = Montserrat({ subsets: ['latin'] })

export default function ProductList () {
    return (
        <div className={montserrat.className}>
            <TopFooter color="bg-[#23856D]"/>
            <Navbar left="left-[180px]" Marginleft="ml-44" itemml="ml-40"/>

            <div className="w-[1577px] h-[92px] py-6 bg-[#FAFAFA] flex items-center mt-24">
                <div className="w-[1049px] h-[44px] gap-[30px] flex items-center justify-evenly">
                    <div className="w-[510px] h-[32px]">
                        <h1 className="font-bold text-2xl tracking-[0.1px] text-center">Shop</h1>
                    </div>  

                    <div className="w-[509px] h-[44px] gap-[5px]">
                        <div className="w-[149px] h-[44px] py-[10px] gap-[15px] flex items-center ml-[700px]">
                            <a href="/" className="font-bold text-sm leading-[24px] tracking-[0.2px] text-[#252B42]">Home</a>
                            <HiChevronRight className="w-7 h-8 text-[#BDBDBD]"/>
                            <h1 className="font-bold text-sm leading-[24px] tracking-[0.2px] text-[#BDBDBD]">Shop</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-[1577px] h-[271px] bg-[#FAFAFA]">
                <div className="w-[1088px] h-[271px] left-[176px] absolute pb-12 flex gap-5 items-center justify-center ml-20">
                    <CardProduct image={Cardprod1} title="Card" width={205} height={223}/>
                    <CardProduct image={Cardprod2} title="Card" width={205} height={223}/>
                    <CardProduct image={Cardprod3} title="Card" width={205} height={223}/>
                    <CardProduct image={Cardprod4} title="Card" width={205} height={223}/>
                    <CardProduct image={Cardprod5} title="Card" width={205} height={223}/>
                </div>
            </div>

            <div className="w-[1577px] h-[98px] bg-[#FFFFFF]">
                <div className="w-[1050px] h-[98px] left-[270px] py-6 gap-20 absolute">
                    <div className="w-[1049px] h-[50px] flex items-center justify-between">
                        <div>
                            <h1 className="font-bold text-sm leading-6 tracking-[0.2px] text-[#252B42]">Showing all 12 results</h1>
                        </div>

                        <div className="w-[177px] h-[46px] px-[1px] gap-[15px] flex items-center">
                            <h1 className="font-bold text-sm leading-6 tracking-[0.2px]">Views:</h1>
                            <div className="w-[46px] h-[46px] rounded-[5px] flex items-center justify-center">
                                <MdWindow className="w-5 h-5"/>
                            </div>
                            <div className="w-[46px] h-[46px] rounded-[5px] flex items-center justify-center">
                                <FaTasks className="w-5 h-5"/>
                            </div>
                        </div>

                        <div className="w-[270px] h-[50px] px-[1px] gap-[15px] flex">
                            <div className="w-[150px] h-[50px] flex bg-[#DDDDDD] items-center justify-center rounded-[5px] border-[1px]">
                                <h1 className="font-normal text-[#737373] text-sm leading-7 tracking-[0.2px]">Popularity</h1>
                                <HiChevronDown className="w-6 h-6"/>
                            </div>
                            <div className="w-[141px] h-[50px] rounded-[5px] border-[1px] bg-[#23A6F0]">
                                <h1 className="font-bold text-[#FFFFFF] text-sm leading-6 tracking-[0.2px] text-center mt-3">Filter</h1>
                            </div>
                        </div>
                    </div>
                </div>      
            </div>

            <Logos />

            <Footer marginTop="100" color="bg-white"/>

            <div className="w-[1440px] h-[1778px] left-[120px] absolute mt-20">
                <div className="flex">
                    <CardProduct2 image={Prod1} title=""/>
                    <CardProduct2 image={Prod2} title=""/>
                    <CardProduct2 image={Prod3} title=""/>
                    <CardProduct2 image={Prod4} title=""/>
                </div>
                <div className="flex mt-48">
                    <CardProduct2 image={Prod5} title=""/>
                    <CardProduct2 image={Prod6} title=""/>
                    <CardProduct2 image={Prod7} title=""/>
                    <CardProduct2 image={Prod8} title=""/>
                </div>
                <div className="flex mt-48"> 
                    <CardProduct2 image={Prod9} title=""/>
                    <CardProduct2 image={Prod10} title=""/>
                    <CardProduct2 image={Prod11} title=""/>
                    <CardProduct2 image={Prod12} title=""/>
                </div>

                <div className="w-[313px] h-[74px] rounded-[6.73px] border-[1.35px] ml-[500px] mt-56 bg-[#BDBDBD]">
                    <a href="" className="w-[84px] h-[74px] border-[1px] p-[25px] bg-[#F3F3F3]
                    font-bold text-sm leading-[24px] tracking-[0.2px] text-center text-[#BDBDBD] absolute">First</a>

                    <a href="" className="w-[46px] h-[74px] border-[1px] py-[25px] px-5 bg-[#FFFFFF] hover:bg-[#23A6F0] hover:text-[#FFFFFF]
                    font-bold text-sm leading-[24px] tracking-[0.2px] text-center text-[#23A6F0] absolute ml-24">1
                    </a>

                    <a href="" className="w-[46px] h-[74px] border-[1px] py-[25px] px-5 bg-[#FFFFFF] hover:bg-[#23A6F0] hover:text-[#FFFFFF]
                    font-bold text-sm leading-[24px] tracking-[0.2px] text-center text-[#23A6F0] absolute ml-[130px]">2
                    </a>

                    <a href="" className="w-[46px] h-[74px] border-[1px] py-[25px] px-5 bg-[#FFFFFF] hover:bg-[#23A6F0] hover:text-[#FFFFFF]
                    font-bold text-sm leading-[24px] tracking-[0.2px] text-center text-[#23A6F0] absolute ml-[176px]">3
                    </a>

                    <a href="/Product1" className="w-[89px] h-[74px] border-[1px] p-[25px] bg-[#FFFFFF] hover:bg-[#23A6F0] hover:text-[#FFFFFF]
                    font-bold text-sm leading-[24px] tracking-[0.2px] text-center text-[#23A6F0] absolute ml-[222px]">Next</a>

                </div>
            </div>
        </div>
    )
}