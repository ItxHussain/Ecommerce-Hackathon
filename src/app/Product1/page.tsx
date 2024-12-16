import Image from "next/image"
import {Montserrat} from "next/font/google"
import TopFooter from "../Components/TopFooter"
import Navbar from "../Components/Navbar"
import { HiChevronRight } from "react-icons/hi"
import { HiChevronLeft } from "react-icons/hi"
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";


import SinProd1 from "@/app/Assets/SinProd1.png"
import SinProd2 from "@/app/Assets/Sinprod2.png"
import SinProd3 from "@/app/Assets/Sinprod3.png"
import HrLine from "@/app/Assets/HrLine.png"
import Bckgrnd from "@/app/Assets/bckgrnd.png"
import BestSellerProd from "../Components/BestSellerProd"

import Bst17 from "@/app/Assets/Bst17.png"
import Bst28 from "@/app/Assets/Bst28.png"
import Bst3 from "@/app/Assets/Bst3.png"
import Bst4 from "@/app/Assets/Bst4.png"
import Bst5 from "@/app/Assets/Bst5.png"
import Bst6 from "@/app/Assets/Bst6.png"
import Logos from "../Components/Logos"
import Footer from "../Components/Footer"


const montserrat = Montserrat({ subsets: ['latin'] })

export default function Product1 () {
    return (
        <div className={montserrat.className}>
            <TopFooter color="bg-[#23856D]"/>
            <Navbar left="left-[160px]" Marginleft="ml-44"/>
            <div className="w-[1577px] h-[92px] py-6 bg-[#FAFAFA]">
                <div className="w-[509px] h-[44px] gap-[5px] ml-[270px]">
                    <div className="w-[509px] h-[44px] gap-[5px]">
                        <div className="w-[149px] h-[44px] py-[10px] gap-[15px] flex items-center mt-[100px]">
                            <a href="/" className="font-bold text-sm leading-[24px] tracking-[0.2px] text-[#252B42] mb-10">Home</a>
                            <HiChevronRight className="w-7 h-8 text-[#BDBDBD] mb-10"/>
                            <a href="/ProductList" className="font-bold text-sm leading-[24px] tracking-[0.2px] text-[#BDBDBD] mb-10">Shop</a>
                        </div>
                    </div>
                </div>

                <div className="w-[1577px] h-[598px] bg-[#FAFAFA]">
                    <div className="w-[1050px] h-[598px] ml-[270px] py-12 flex gap-5">
                        <div className="w-[510px] h-[550px] rounded-[5px]">
                            <Image src={SinProd1} alt="Prod" className="overflow-hidden"/>
                            <HiChevronLeft href="/" className="absolute w-16 h-20 text-white top-[500px] ovr"/>
                            <HiChevronRight href="/" className="absolute w-16 h-20 text-white top-[500px] ml-[450px] "/>
                            <div className="flex gap-5 mt-5">
                                <Image src={SinProd2} alt="Prod" />
                                <Image src={SinProd3} alt="Prod" />
                            </div>
                        </div>      

                        <div className="w-[510px] h-[471px] mt-[11px] ml-6">
                            <h1 className="w-[156px] h-[30px] font-normal text-xl leading-[30px] tracking-[0.2px] text-[#252B42]">Floating Phone</h1>
                            <div className="flex gap-2 mt-2 items-center">
                                <FaStar className="w-5 h-5 text-[#F3CD03]"/>
                                <FaStar className="w-5 h-5 text-[#F3CD03]"/>
                                <FaStar className="w-5 h-5 text-[#F3CD03]"/>
                                <FaStar className="w-5 h-5 text-[#F3CD03]"/>
                                <FaRegStar className="w-5 h-5 text-[#F3CD03]" />
                                <h1 className="w-[100px] h-[24px] font-bold text-sm leading-[24px] tracking-[0.2px] text-[#737373] ml-1">10 Reviews</h1>
                            </div> 

                            <h1 className="w-[108px] h-[32px] font-bold text-2xl tracking-[0.1px] mt-7">$1,139.33</h1>
                            
                            <div className="flex w-[170px] h-[24px] gap-[5px] mt-2">
                                <h1 className="w-[100px] h-[24px] font-bold text-sm leading-6 tracking-[0.2px]  text-[#737373]">Availability  :</h1>
                                <h1 className="w-[80px] h-[24px] font-bold text-sm leading-6 tracking-[0.1px] text-[#23A6F0]">In Stock </h1>
                            </div>        

                            <h1 className="w-[464px] h-[24px] font-normal text-sm leading-5 tracking-[0.2px] mt-10 text-[#737373]">Met minim Mollie non desert Alamo est sit cliquey dolor 
                            do met sent. RELIT official consequent door ENIM RELIT Mollie. 
                            Excitation venial consequent sent nostrum met.</h1>

                            <Image src={HrLine} alt="Line" className="w-[445px] border-[1px] text-[#BDBDBD] mt-20"/>
                            
                            <div className="flex gap-3 mt-6">
                                <div className="w-[30px] h-[30px] bg-[#23A6F0] rounded-full"></div>
                                <div className="w-[30px] h-[30px] bg-[#2DC071] rounded-full"></div>
                                <div className="w-[30px] h-[30px] bg-[#E77C40] rounded-full"></div>
                                <div className="w-[30px] h-[30px] bg-[#252B42] rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>  

                <div className="w-[1577px] h-[572px]">
                    <div className="w-[1572px] h-[91px] bg-[#FFFFFF]">
                        <div className="w-[1051px] h-[72px] mt-[10px] ml-[270px] flex items-center justify-center gap-16">
                            <a href="" className="w-[86px] h-[24px] font-bold text-sm leading-6 tracking-[0.2px] text-center text-[#737373]">Description</a>
                            <a href="" className="w-[172px] h-[24px] font-bold text-sm leading-6 tracking-[0.2px] text-center text-[#737373]">Additional Information</a>
                            <a href="" className="w-[62px] h-[24px] font-bold text-sm leading-6 tracking-[0.2px] text-center flex
                            text-[#737373] gap-2">Reviews <h1 className="text-[#23856D]">(0)</h1></a>
                        </div>
                    </div>

                    <Image src={HrLine} alt="Line" className="border-[1px] w-[1049px] ml-[270px] text-[#ECECEC] opacity-60"/>

                    <div className="w-[1577px] h-[499px] mt-[50px] gap-[50px]">
                        <div className="w-[1350px] h-[499px] pt-6 pb-12 gap-[30px] flex">
                            <div className="w-[330px] h-[385px] bg-[#C4C4C433] ml-80">
                                <Image src={Bckgrnd} alt="background" className="w-[316px] h-[372px] rounded-[5.39px]"/>
                            </div>

                            <div className="w-[332px] h-[427px] rounded-[9px] pb-[25px] gap-[30px]">
                                <h1 className="font-bold text-2xl tracking-[0.1px]">the quick fox jumps over </h1>
                                <p className="font-normal text-sm tracking-[0.2px] mt-9 text-[#737373]">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                                <p className="font-normal text-sm tracking-[0.2px] mt-7 text-[#737373]">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                                <p className="font-normal text-sm tracking-[0.2px] mt-7 text-[#737373]">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                            </div>

                            <div className="w-[332px] h-[367px] ">
                                <h1 className="font-bold text-2xl tracking-[0.1px] ml-2">the quick fox jumps over</h1>
                                <p className="flex items-center font-normal text-sm tracking-[0.2px] leading-5 mt-7 text-[#737373]"><HiChevronRight className="mr-2 h-6 w-6 text-[#737373]"/>the quick fox jumps over the lazy dog</p>
                                <p className="flex items-center font-normal text-sm tracking-[0.2px] leading-5 mt-4 text-[#737373]"><HiChevronRight className="mr-2 h-6 w-6 text-[#737373]"/>the quick fox jumps over the lazy dog</p>
                                <p className="flex items-center font-normal text-sm tracking-[0.2px] leading-5 mt-4 text-[#737373]"><HiChevronRight className="mr-2 h-6 w-6 text-[#737373]"/>the quick fox jumps over the lazy dog</p>
                                <p className="flex items-center font-normal text-sm tracking-[0.2px] leading-5 mt-4 text-[#737373]"><HiChevronRight className="mr-2 h-6 w-6 text-[#737373]"/>the quick fox jumps over the lazy dog</p>
                                <h1 className="font-bold text-2xl tracking-[0.1px] mt-7 ml-2">the quick fox jumps over</h1>
                                <p className="flex items-center font-normal text-sm tracking-[0.2px] leading-5 mt-4 text-[#737373]"><HiChevronRight className="mr-2 h-6 w-6 text-[#737373]"/>the quick fox jumps over the lazy dog</p>
                                <p className="flex items-center font-normal text-sm tracking-[0.2px] leading-5 mt-4 text-[#737373]"><HiChevronRight className="mr-2 h-6 w-6 text-[#737373]"/>the quick fox jumps over the lazy dog</p>
                                <p className="flex items-center font-normal text-sm tracking-[0.2px] leading-5 mt-4 text-[#737373]"><HiChevronRight className="mr-2 h-6 w-6 text-[#737373]"/>the quick fox jumps over the lazy dog</p>

                            </div>
                        </div>  
                    </div>

                    <div className="w-[1577px] h-[1086px] bg-[#FAFAFA]">
                        <div className="w-[1124px] h-[1086px] ml-[270px] py-12 gap-6 flex-col">
                            <h1 className="w-[299px] h-[32px] font-bold text-2xl tracking-[0.1px]">BESTSELLER PRODUCTS</h1>
                            <Image src={HrLine} alt="Line" className="border-[1px] w-[1042px] h-[2px] text-[#ECECEC] opacity-60 mt-7"/>
                            <div className="w-[1049px] h-[442px] flex gap-[30px]">
                                <BestSellerProd image={Bst17} title="BestSeller"/>
                                <BestSellerProd image={Bst28} title="BestSeller" />
                                <BestSellerProd image={Bst3} title="BestSeller" />
                                <BestSellerProd image={Bst4} title="BestSeller" />
                            </div>  
                            <div className="w-[1049px] h-[442px] flex gap-[30px]">
                                <BestSellerProd image={Bst5} title="BestSeller"/>
                                <BestSellerProd image={Bst6} title="BestSeller" />
                                <BestSellerProd image={Bst17} title="BestSeller" />
                                <BestSellerProd image={Bst28} title="BestSeller" />
                            </div>  
                        </div>
                    </div>
                    
                    <Logos />
                    <Footer marginTop={100} color="bg-[#FFFFFF]"/>
                </div>
            </div>
        </div>
    )
}