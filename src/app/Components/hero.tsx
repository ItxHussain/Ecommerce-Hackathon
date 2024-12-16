import Image from "next/image"
import Heroimg from "@/app/Assets/heroimg.jpg"
import grap1 from "@/app/Assets/grap1.png"
import grap2 from "@/app/Assets/grap2.png"
import grap3 from "@/app/Assets/grap3.png"
import grap4 from "@/app/Assets/grap4.png"
import grap5 from "@/app/Assets/grap5.png"
import grap6 from "@/app/Assets/grap6.png"
import grap7 from "@/app/Assets/grap7.png"
import grap8 from "@/app/Assets/grap8.png"
import vita from "@/app/Assets/vitaback.png"
import asian from "@/app/Assets/asianback.png"
import FeaRaod from "@/app/Assets/FeaRoad.png"
import FeaCar from "@/app/Assets/FeaCar.png"
import FeaUmb from "@/app/Assets/FeaUmb.png"

import React from "react"
import { LuAlarmClock } from "react-icons/lu"
import { VscGraphLine } from "react-icons/vsc";
import { HiChevronRight } from "react-icons/hi2"

import Men from "@/app/Assets/Mens.png"
import Women from "@/app/Assets/Womens.png"
import Accessories from "@/app/Assets/Accessories.png"
import Kids from "@/app/Assets/Kids.png"

import {Montserrat} from "next/font/google"

const montserrat = Montserrat({ subsets: ['latin'] })
export default function HeroPage () {
    return (
        <div className={montserrat.className}>
            <div className="w-[1576px] h-[716px] mt-[75px] left-[1px] rounded-[5px] border-[1px] ">
                <Image src={Heroimg} alt="IMG" className="w-[1590px]"/>

                <div className="w-[1044px] h-[427px] pt-12 pb-12 gap-[30px] absolute left-[197.5px] top-56">

                    <div className="w-[599px] h-[331px] gap-[35px] absolute pt-32">
                        <div className={montserrat.className}>
                            <h1 className="w-[122px] h-[24px] font-bold text-base leading-6 tracking-[0.1px] absolute text-white">
                            SUMMER 2020
                            </h1>
                            <h1 className="font-bold text-[58px] leading-[80px] tracking-[0.2px] text-white w-[568px] h-[80px] pt-12">
                            NEW COLLECTION
                            </h1>
                            <h1 className="text-xl leading-[30px] tracking-[0.2px] font-normal text-white pt-16 w-[350px] h-[60px]">
                            We know how large objects will act, 
                            but things on a small scale.
                            </h1>

                            
                            <a href="" className="bg-[#2DC071] px-10 py-[15px] gap-[10px] rounded-[5px] w-[221px] h-[62px] mt-28 flex items-center justify-center">
                                <h1 className="font-bold text-2xl leading-8 tracking-[0.1px] text-white">SHOP NOW</h1>
                            </a>
                            
                        </div>

                    </div>

                </div>

                {/* ~~~ 2nd CARD ~~~*/}

                <div className="w-[1050px] h-[770px] left-[272px] pt-20 pb-20 gap-12 absolute">
                    <div className="w-[950px] h-[62px] gap-[10px]">
                        <h1 className="text-center font-bold text-2xl tracking-[0.1px]">EDITOR’S PICK</h1>
                        <h1 className="text-center font-normal text-sm tracking-[0.2px] text-[#737373] mt-3">Problems trying to resolve the conflict between </h1>
                    </div>

                    <div className="grid grid-cols-3 absolute top-48">
                        <div className="w-[1050px] h-[500px] gap-[30px] grid grid-cols-3">
                            
                            <Image src={Men} alt="men" className="w-[510px] h-[500px] row-span-2 absolute"/>
                            <div className="bg-white w-[170px] h-12 top-[426px] left-[31px] absolute flex items-center justify-center">
                                <h1 className="font-bold text-base tracking-[0.1px]">MEN</h1>
                            </div>

                            <Image src={Women} alt="women" className="w-[240px] h-[500px] row-span-2 absolute left-[535px]"/>
                            <div className="bg-white w-[136px] h-12 top-[426px] left-[550px] absolute flex items-center justify-center">
                                <h1 className="font-bold text-base tracking-[0.1px]">WOMEN</h1>
                            </div>

                            <div className="w-[240px] h-[500px] absolute left-[800px]">

                                <Image src={Accessories} alt="accessories" className="w-[240px] h-[242px]"/>
                                <div className="bg-white w-[170px] h-12 top-[175px] left-[15px] absolute flex items-center justify-center">
                                    <h1 className="font-bold text-base tracking-[0.1px]">ACCESSORIES</h1>
                                </div>

                                <Image src={Kids} alt="kids" className="w-[240px] h-[242px] mt-4"/>
                                <div className="bg-white w-[120px] h-12 top-[426px] left-[15px] absolute flex items-center justify-center">
                                    <h1 className="font-bold text-base tracking-[0.1px]">KIDS</h1>
                                </div>
                            </div>
                        </div>
 
                    </div>
                </div>


                {/* ~~~ 3rd CARD ~~~*/}

                <div className="w-[1124px] h-[1652px] left-[195px] py-20 gap-20 grid-cols-1 items-center justify-center absolute ">
                    <div className="w-[692px] h-[102px] grid-cols-1 items-center top-[800px] absolute">
                        <h1 className="w-[191px] h-[30px] font-normal text-xl leading-[30px] tracking-[0.2px] text-center text-[#737373]
                        absolute left-[500px]">Featured Products</h1>
                        <h1 className="w-[299px] h-[32px] font-bold text-2xl tracking-[0.1px] absolute left-[465px] top-12">BESTSELLER PRODUCTS</h1>
                        <h1 className="w-[347px] h-[20px] font-normal text-sm tracking-[0.2px] absolute left-[435px] top-24 text-[#737373]">Problems trying to resolve the conflict between </h1>
                    </div>

                    <div className="w-[1049px] h-[615px] gap-[30px] grid grid-cols-4 justify-between mt-[930px]">
                        <div className="w-[238px] h-[615px] ml-[77px]">
                            <Image src={grap1} alt="graphic Design" />
                            <div className="w-[239px] h-[188px] px-[25px] pt-[25px] pb-[35px] gap-[10px] ">
                                <h1 className="text-[#252B42] font-bold text-base tracking-[0.1px] text-center">Graphic Design</h1>
                                <h1 className="text-[#737373] font-bold text-sm leading-[24px] tracking-[0.2px] text-center mt-4">English Department</h1>
                                <div className="flex items-center py-[5px] px-[3px] gap-[5px] justify-center mt-4">
                                    <h1 className="text-[#BDBDBD] text-base font-bold tracking-[0.1px]">$16.48</h1>
                                    <h1 className="text-[#23856D] text-base font-bold tracking-[0.1px]">$6.48</h1>
                                </div>
                                <div className="flex items-center justify-center gap-[6.08px] mt-2">
                                    <div className="w-4 h-4 bg-[#23A6F0] rounded-full"></div>
                                    <div className="w-4 h-4 bg-[#23856D] rounded-full"></div>
                                    <div className="w-4 h-4 bg-[#E77C40] rounded-full"></div>
                                    <div className="w-4 h-4 bg-[#252B42] rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        <div className="w-[238px] h-[615px] ml-[77px]">
                            <Image src={grap2} alt="graphic Design" />
                            <div className="w-[239px] h-[188px] px-[25px] pt-[25px] pb-[35px] gap-[10px] ">
                                <h1 className="text-[#252B42] font-bold text-base tracking-[0.1px] text-center">Graphic Design</h1>
                                <h1 className="text-[#737373] font-bold text-sm leading-[24px] tracking-[0.2px] text-center mt-4">English Department</h1>
                                <div className="flex items-center py-[5px] px-[3px] gap-[5px] justify-center mt-4">
                                    <h1 className="text-[#BDBDBD] text-base font-bold tracking-[0.1px]">$16.48</h1>
                                    <h1 className="text-[#23856D] text-base font-bold tracking-[0.1px]">$6.48</h1>
                                </div>
                                <div className="flex items-center justify-center gap-[6.08px] mt-2">
                                    <div className="w-4 h-4 bg-[#23A6F0] rounded-full"></div>
                                    <div className="w-4 h-4 bg-[#23856D] rounded-full"></div>
                                    <div className="w-4 h-4 bg-[#E77C40] rounded-full"></div>
                                    <div className="w-4 h-4 bg-[#252B42] rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        <div className="w-[238px] h-[615px] ml-[77px]">
                            <Image src={grap3} alt="graphic Design" />
                            <div className="w-[239px] h-[188px] px-[25px] pt-[25px] pb-[35px] gap-[10px] ">
                                <h1 className="text-[#252B42] font-bold text-base tracking-[0.1px] text-center">Graphic Design</h1>
                                <h1 className="text-[#737373] font-bold text-sm leading-[24px] tracking-[0.2px] text-center mt-4">English Department</h1>
                                <div className="flex items-center py-[5px] px-[3px] gap-[5px] justify-center mt-4">
                                    <h1 className="text-[#BDBDBD] text-base font-bold tracking-[0.1px]">$16.48</h1>
                                    <h1 className="text-[#23856D] text-base font-bold tracking-[0.1px]">$6.48</h1>
                                </div>
                                <div className="flex items-center justify-center gap-[6.08px] mt-2">
                                    <div className="w-4 h-4 bg-[#23A6F0] rounded-full"></div>
                                    <div className="w-4 h-4 bg-[#23856D] rounded-full"></div>
                                    <div className="w-4 h-4 bg-[#E77C40] rounded-full"></div>
                                    <div className="w-4 h-4 bg-[#252B42] rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        <div className="w-[238px] h-[615px] ml-[77px]">
                            <Image src={grap4} alt="graphic Design" />
                            <div className="w-[239px] h-[188px] px-[25px] pt-[25px] pb-[35px] gap-[10px] ">
                                <h1 className="text-[#252B42] font-bold text-base tracking-[0.1px] text-center">Graphic Design</h1>
                                <h1 className="text-[#737373] font-bold text-sm leading-[24px] tracking-[0.2px] text-center mt-4">English Department</h1>
                                <div className="flex items-center py-[5px] px-[3px] gap-[5px] justify-center mt-4">
                                    <h1 className="text-[#BDBDBD] text-base font-bold tracking-[0.1px]">$16.48</h1>
                                    <h1 className="text-[#23856D] text-base font-bold tracking-[0.1px]">$6.48</h1>
                                </div>
                                <div className="flex items-center justify-center gap-[6.08px] mt-2">
                                    <div className="w-4 h-4 bg-[#23A6F0] rounded-full"></div>
                                    <div className="w-4 h-4 bg-[#23856D] rounded-full"></div>
                                    <div className="w-4 h-4 bg-[#E77C40] rounded-full"></div>
                                    <div className="w-4 h-4 bg-[#252B42] rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        <div className="w-[238px] h-[615px] ml-[77px]">
                            <Image src={grap5} alt="graphic Design" />
                            <div className="w-[239px] h-[188px] px-[25px] pt-[25px] pb-[35px] gap-[10px] ">
                                <h1 className="text-[#252B42] font-bold text-base tracking-[0.1px] text-center">Graphic Design</h1>
                                <h1 className="text-[#737373] font-bold text-sm leading-[24px] tracking-[0.2px] text-center mt-4">English Department</h1>
                                <div className="flex items-center py-[5px] px-[3px] gap-[5px] justify-center mt-4">
                                    <h1 className="text-[#BDBDBD] text-base font-bold tracking-[0.1px]">$16.48</h1>
                                    <h1 className="text-[#23856D] text-base font-bold tracking-[0.1px]">$6.48</h1>
                                </div>
                                <div className="flex items-center justify-center gap-[6.08px] mt-2">
                                    <div className="w-4 h-4 bg-[#23A6F0] rounded-full"></div>
                                    <div className="w-4 h-4 bg-[#23856D] rounded-full"></div>
                                    <div className="w-4 h-4 bg-[#E77C40] rounded-full"></div>
                                    <div className="w-4 h-4 bg-[#252B42] rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        <div className="w-[238px] h-[615px] ml-[77px]">
                            <Image src={grap6} alt="graphic Design" />
                            <div className="w-[239px] h-[188px] px-[25px] pt-[25px] pb-[35px] gap-[10px] ">
                                <h1 className="text-[#252B42] font-bold text-base tracking-[0.1px] text-center">Graphic Design</h1>
                                <h1 className="text-[#737373] font-bold text-sm leading-[24px] tracking-[0.2px] text-center mt-4">English Department</h1>
                                <div className="flex items-center py-[5px] px-[3px] gap-[5px] justify-center mt-4">
                                    <h1 className="text-[#BDBDBD] text-base font-bold tracking-[0.1px]">$16.48</h1>
                                    <h1 className="text-[#23856D] text-base font-bold tracking-[0.1px]">$6.48</h1>
                                </div>
                                <div className="flex items-center justify-center gap-[6.08px] mt-2">
                                    <div className="w-4 h-4 bg-[#23A6F0] rounded-full"></div>
                                    <div className="w-4 h-4 bg-[#23856D] rounded-full"></div>
                                    <div className="w-4 h-4 bg-[#E77C40] rounded-full"></div>
                                    <div className="w-4 h-4 bg-[#252B42] rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        <div className="w-[238px] h-[615px] ml-[77px]">
                            <Image src={grap7} alt="graphic Design" />
                            <div className="w-[239px] h-[188px] px-[25px] pt-[25px] pb-[35px] gap-[10px] ">
                                <h1 className="text-[#252B42] font-bold text-base tracking-[0.1px] text-center">Graphic Design</h1>
                                <h1 className="text-[#737373] font-bold text-sm leading-[24px] tracking-[0.2px] text-center mt-4">English Department</h1>
                                <div className="flex items-center py-[5px] px-[3px] gap-[5px] justify-center mt-4">
                                    <h1 className="text-[#BDBDBD] text-base font-bold tracking-[0.1px]">$16.48</h1>
                                    <h1 className="text-[#23856D] text-base font-bold tracking-[0.1px]">$6.48</h1>
                                </div>
                                <div className="flex items-center justify-center gap-[6.08px] mt-2">
                                    <div className="w-4 h-4 bg-[#23A6F0] rounded-full"></div>
                                    <div className="w-4 h-4 bg-[#23856D] rounded-full"></div>
                                    <div className="w-4 h-4 bg-[#E77C40] rounded-full"></div>
                                    <div className="w-4 h-4 bg-[#252B42] rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        <div className="w-[238px] h-[615px] ml-[77px]">
                            <Image src={grap8} alt="graphic Design" />
                            <div className="w-[239px] h-[188px] px-[25px] pt-[25px] pb-[35px] gap-[10px] ">
                                <h1 className="text-[#252B42] font-bold text-base tracking-[0.1px] text-center">Graphic Design</h1>
                                <h1 className="text-[#737373] font-bold text-sm leading-[24px] tracking-[0.2px] text-center mt-4">English Department</h1>
                                <div className="flex items-center py-[5px] px-[3px] gap-[5px] justify-center mt-4">
                                    <h1 className="text-[#BDBDBD] text-base font-bold tracking-[0.1px]">$16.48</h1>
                                    <h1 className="text-[#23856D] text-base font-bold tracking-[0.1px]">$6.48</h1>
                                </div>
                                <div className="flex items-center justify-center gap-[6.08px] mt-2">
                                    <div className="w-4 h-4 bg-[#23A6F0] rounded-full"></div>
                                    <div className="w-4 h-4 bg-[#23856D] rounded-full"></div>
                                    <div className="w-4 h-4 bg-[#E77C40] rounded-full"></div>
                                    <div className="w-4 h-4 bg-[#252B42] rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/*4th Card*/}

                <div className="w-[1575px] h-[711px] bg-[#23856D] absolute top-[3200px]">
                    <div className="w-[1036px] h-[711px] flex items-center justify-center left-[209px] absolute">
                        <div className="w-[1049px] h-[599px] gap-[30px] flex items-center justify-end">
                            <Image src={vita} alt="background" className=""/>
                        </div>

                    <div className="w-[509px] h-[432px] pt-[60px] gap-[30px] absolute left-0">
                        <h1 className="w-[142px] h-[24px] font-normal text-xl leading-[30px] tracking-[0.2px] absolute text-white">
                            SUMMER 2020
                        </h1>
                        <h1 className="font-bold text-[58px] leading-[80px] tracking-[0.2px] text-white w-[568px] h-[80px] pt-12">
                        Vita Classic Product
                        </h1>
                            <h1 className="text-xl leading-[30px] tracking-[0.2px] font-normal text-white pt-16 w-[420px] h-[60px] mt-20">
                            We know how large objects will act, We know how are objects will act, We know
                        </h1>
                        <div className="flex items-center">
                            <h1 className="text-white font-bold text-2xl tracking-[0.1px] mt-28">$16.48</h1>
                            <a href="" className="bg-[#2DC071] px-10 py-[15px] gap-[10px] rounded-[5px] w-[200px] h-[52px] mt-28 flex items-center justify-center ml-5">
                                <h1 className="font-bold text-xl leading-[22px] tracking-[0.2px] text-white w-[304px] h-[22px]">ADD TO CART</h1>
                            </a>
                        </div>
                    </div>

                    </div>
                </div>

                <div className="w-[1575px] h-[682px] absolute top-[3900px]">
                    <div className="w-[1036px] h-[711px] flex items-center justify-center left-[209px] absolute">
                        <div className="w-[1049px] h-[599px] gap-[30px] flex items-center justify-end">
                            <Image src={asian} alt="background" className=""/>
                        </div>

                    <div className="w-[573px] h-[326px]  gap-[30px] pl-32 ">
                        <h1 className="w-[122px] h-[24px] font-normal text-base leading-[24px] tracking-[0.1px] absolute text-[#BDBDBD]">
                            SUMMER 2020
                        </h1>
                        <h1 className="font-bold text-[40px] leading-[50px] tracking-[0.2px] text-[#252B42] w-[568px] h-[80px] pt-12">
                        Part of the Neural Universe
                        </h1>
                            <h1 className="text-xl leading-[30px] tracking-[0.2px] font-normal text-[#737373] pt-16 w-[420px] h-[60px] mt-20">
                            We know how large objects will act, but things on a small scale.
                        </h1>
                        <div className="flex items-center gap-5">
                            <a href="" className="bg-[#2DC071] px-10 py-[15px] gap-[10px] rounded-[5px] w-[200px] h-[52px] mt-28 flex items-center justify-center ">
                                <h1 className="font-bold text-xl leading-[22px] tracking-[0.2px] text-white w-[304px] h-[22px]">ADD TO CART</h1>
                            </a>

                            <a href="" className="border-[#2DC071] border-[1px] px-10 py-[15px] gap-[10px] rounded-[5px] w-[195px] h-[52px] mt-28 flex items-center justify-center ">
                                <h1 className="font-bold text-xl leading-[22px] tracking-[0.2px] text-[#2DC071] w-[193px] h-[22px]">READ MORE</h1>
                            </a>
                        </div>
                    </div>

                    </div>
                </div>

                {/*5th Card*/}

                <div className="w-[1575px] h-[1044px] mt-[3750px]  ">
                    <div className="w-[692px] h-[102px] grid-cols-1 items-center left-[200px] absolute">
                        <h1 className="w-[114px] h-[24px] font-normal text-sm leading-[25px] tracking-[0.2px] text-center text-[#23A6F0]
                        absolute left-[500px]">Practice Advice</h1>
                        <h1 className="w-[320px] h-[50px] font-bold text-[40px] tracking-[0.2px] leading-[50px] absolute left-[400px] top-12 text-[#252B42]">Featured Posts</h1>
                        <h1 className="w-[469px] h-[40px] font-normal text-sm tracking-[0.2px] absolute left-[320px] top-32 text-[#737373] text-center">Problems trying to resolve the conflict between <br></br>
                        the two major realms of Classical physics: Newtonian mechanics </h1>
                    </div>

                    <div className="w-[1045px] h-[606px] gap-[30px] absolute left-[250px] grid grid-cols-3 items-center mt-56">
                        <div className="w-[328px] h-[606px] shadow-md">
                            <Image src={FeaRaod} alt="Road" />
                            <div className="w-[348px] h-[306px] pt-[25px] px-[25px] pb-[35px] gap-[10px]">
                                <div className="w-[159px] h-[16px] gap-[15px] flex items-center ">
                                    <h1 className="text-[#8EC2F2] font-normal text-xs tracking-[0.2px] w-[45px] h-[16px]">Google</h1>
                                    <h1 className="text-[#737373] font-normal text-xs tracking-[0.2px] w-[56px] h-[16px]">Trending</h1>
                                    <h1 className="text-[#737373] font-normal text-xs tracking-[0.2px] w-[28px] h-[16px]">New</h1>
                                </div>
                                <h1 className="text-[#252B42] font-normal text-xl leading-[30px] tracking-[0.2px] w-[247px] h-[60px] mt-4">Loudest à la Madison #1 <br></br>
                                (L'integral)</h1>

                                <h1 className="text-[#737373] font-normal text-sm tracking-[0.2px] w-[280px] h-[60px] mt-4">We focus on ergonomics and meeting 
                                you where you work. It's only a 
                                keystroke away.</h1>

                                <div className="w-[298px] h-[46px] justify-between flex ">
                                    <div className="flex items-center mt-4">
                                        <LuAlarmClock className="w-4 h-4 text-[#23A6F0]"/>
                                        <p className="text-[#737373] font-normal text-xs tracking-[0.2px] w-[97px] h-[16px] ml-3">22 April 2021</p>
                                        <div className="w-[125px] h-4 gap-[5px] flex items-center ml-16">
                                            <VscGraphLine className="text-[#23856D] "/>
                                            <p className="text-[#737373] font-normal text-xs tracking-[0.2px] w-[100px] h-[16px] ">10 comments</p>
                                        </div>    
                                    </div>
                                </div>

                                <button className="flex items-center w-[144px] h-[24px] gap-[10px] mt-6">
                                    <h1 className="text-[#737373] font-bold text-sm leading-[24px] tracking-[0.2px] w-[85px] h-6">Learn More</h1>
                                    <HiChevronRight className="w-5 h-5 text-[#23A6F0]" />
                                </button>
                            </div>
                        </div>

                        <div className="w-[328px] h-[606px] shadow-md">
                            <Image src={FeaCar} alt="Car" />
                            <div className="w-[348px] h-[306px] pt-[25px] px-[25px] pb-[35px] gap-[10px]">
                                <div className="w-[159px] h-[16px] gap-[15px] flex items-center ">
                                    <h1 className="text-[#8EC2F2] font-normal text-xs tracking-[0.2px] w-[45px] h-[16px]">Google</h1>
                                    <h1 className="text-[#737373] font-normal text-xs tracking-[0.2px] w-[56px] h-[16px]">Trending</h1>
                                    <h1 className="text-[#737373] font-normal text-xs tracking-[0.2px] w-[28px] h-[16px]">New</h1>
                                </div>
                                <h1 className="text-[#252B42] font-normal text-xl leading-[30px] tracking-[0.2px] w-[247px] h-[60px] mt-4">Loudest à la Madison #1 <br></br>
                                (L'integral)</h1>

                                <h1 className="text-[#737373] font-normal text-sm tracking-[0.2px] w-[280px] h-[60px] mt-4">We focus on ergonomics and meeting 
                                you where you work. It's only a 
                                keystroke away.</h1>

                                <div className="w-[298px] h-[46px] justify-between flex ">
                                    <div className="flex items-center mt-4">
                                        <LuAlarmClock className="w-4 h-4 text-[#23A6F0]"/>
                                        <p className="text-[#737373] font-normal text-xs tracking-[0.2px] w-[97px] h-[16px] ml-3">22 April 2021</p>
                                        <div className="w-[125px] h-4 gap-[5px] flex items-center ml-16">
                                            <VscGraphLine className="text-[#23856D] "/>
                                            <p className="text-[#737373] font-normal text-xs tracking-[0.2px] w-[100px] h-[16px] ">10 comments</p>
                                        </div>    
                                    </div>
                                </div>

                                <button className="flex items-center w-[144px] h-[24px] gap-[10px] mt-6">
                                    <h1 className="text-[#737373] font-bold text-sm leading-[24px] tracking-[0.2px] w-[85px] h-6">Learn More</h1>
                                    <HiChevronRight className="w-5 h-5 text-[#23A6F0]" />
                                </button>
                            </div>
                        </div>

                        <div className="w-[328px] h-[606px] shadow-md">
                            <Image src={FeaUmb} alt="Umbrella" />
                            <div className="w-[348px] h-[306px] pt-[25px] px-[25px] pb-[35px] gap-[10px]">
                                <div className="w-[159px] h-[16px] gap-[15px] flex items-center ">
                                    <h1 className="text-[#8EC2F2] font-normal text-xs tracking-[0.2px] w-[45px] h-[16px]">Google</h1>
                                    <h1 className="text-[#737373] font-normal text-xs tracking-[0.2px] w-[56px] h-[16px]">Trending</h1>
                                    <h1 className="text-[#737373] font-normal text-xs tracking-[0.2px] w-[28px] h-[16px]">New</h1>
                                </div>
                                <h1 className="text-[#252B42] font-normal text-xl leading-[30px] tracking-[0.2px] w-[247px] h-[60px] mt-4">Loudest à la Madison #1 <br></br>
                                (L'integral)</h1>

                                <h1 className="text-[#737373] font-normal text-sm tracking-[0.2px] w-[280px] h-[60px] mt-4">We focus on ergonomics and meeting 
                                you where you work. It's only a 
                                keystroke away.</h1>

                                <div className="w-[298px] h-[46px] justify-between flex ">
                                    <div className="flex items-center mt-4">
                                        <LuAlarmClock className="w-4 h-4 text-[#23A6F0]"/>
                                        <p className="text-[#737373] font-normal text-xs tracking-[0.2px] w-[97px] h-[16px] ml-3">22 April 2021</p>
                                        <div className="w-[125px] h-4 gap-[5px] flex items-center ml-16">
                                            <VscGraphLine className="text-[#23856D] "/>
                                            <p className="text-[#737373] font-normal text-xs tracking-[0.2px] w-[100px] h-[16px] ">10 comments</p>
                                        </div>    
                                    </div>
                                </div>

                                <button className="flex items-center w-[144px] h-[24px] gap-[10px] mt-6">
                                    <h1 className="text-[#737373] font-bold text-sm leading-[24px] tracking-[0.2px] w-[85px] h-6">Learn More</h1>
                                    <HiChevronRight className="w-5 h-5 text-[#23A6F0]" />
                                </button>
                            </div>
                        </div>
                    </div>


                </div>






            </div>
        </div>
    )
}