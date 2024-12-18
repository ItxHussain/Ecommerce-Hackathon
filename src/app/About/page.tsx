import EllipsePurp from "@/app/Assets/EllipsePurpSm.png"
import EllipsePnkSm from "@/app/Assets/EllipsePnkSm.png"
import EllipsePnkMd from "@/app/Assets/EllipsePnkMd.png"
import EllipsePnkLg from "@/app/Assets/EllipsePnkLg.png"
import Yllowgirl from "@/app/Assets/YllowImggrl.png"

import Tm1 from "@/app/Assets/Tm1.png"
import Tm2 from "@/app/Assets/Tm2.png"
import Tm3 from "@/app/Assets/Tm3.png"
import WorkBG from "@/app/Assets/WorkBG.png"
import MdaBG from "@/app/Assets/MdaBG.png"
import Image from "next/image"

import { FaPlay } from "react-icons/fa6";

import Navbar2 from "../Components/Navbar2"

import { Montserrat } from "next/font/google"
import TeamCard from "../Components/TeamCard"
import Logos from "../Components/Logos"
import Footer from "../Components/Footer"

const montserrat = Montserrat({ subsets: ['latin'] })
export default function About () {
    return (
        <div className={montserrat.className}>
            <div className="w-[1577px] h-[729px]">
                <Navbar2 />
                <div className="ml-[900px]">
                    <Image src={Yllowgirl} alt="Girl" className="absolute mt-[-70px]"/>
                    <Image src={EllipsePurp} alt="Ellipse" className="absolute mt-[400px] ml-[-10px]"/>
                    <Image src={EllipsePurp} alt="Ellipse" className="ml-[550px] mt-[120px] absolute" />
                    <Image src={EllipsePnkSm} alt="Ellipse" className="absolute mt-[240px] ml-[520px]"/>
                    <Image src={EllipsePnkMd} alt="Ellipse" className="absolute mt-[30px] ml-[-60px]"/>
                    <Image src={EllipsePnkLg} alt="Ellipse" className=" mt-[70px] ml-[20px]"/>
                </div>
                <div className="w-[1044px] h-[340px] gap-[30px] absolute left-[270px] top-[300px] flex flex-col">
                    <h1 className="font-bold text-base tracking-[0.1px] text-[#252B42]">ABOUT COMPANY</h1>
                    <h1 className="font-bold text-[58px] leading-[80px] tracking-[0.1px] text-[#252B42]">ABOUT US</h1>
                    <p  className="font-normal text-xl leading-[30px] tracking-[0.2px] text-[#737373]">We know how large objects will act, <br></br>
                    but things on a small scale</p>
                    <button className="w-[195px] h-[52px] bg-[#23A6F0] rounded-[5px] text-white font-bold text-sm leading-[22px] tracking-[0.2px]">Get Quote Now</button>
                </div>
            </div>

            <div className="w-[1577px] h-[236px] mt-28">
                <div className="w-[1228px] h-[188px] gap-[60px] flex items-center">
                    <div className="w-[394px] h-[140px] gap-6 flex flex-col ml-[270px]">
                        <h1 className="font-normal text-sm tracking-[0.2px] text-[#E74040]">Problems trying</h1>
                        <p className="font-bold text-2xl tracking-[0.1px] text-[#252B42]">Met minim Mollie non desert Alamo est sit cliquey dolor do <br></br>met sent.</p>
                    </div>
                    <p className="font-normal text-sm tracking-[0.2px] text-[#737373] w-[545px] h-[40px]">Problems trying to resolve the conflict between the two major realms of <br></br> Classical physics: Newtonian mechanics </p>
                </div>
            </div>

            <div className="w-[1577px] h-[264px]">
                <div className="w-[1050px] h-[264px] py-20 gap-[50px] flex items-center justify-between ml-[270px]">
                    <div>
                        <h1 className="font-bold text-[58px] leading-[80px] tracking-[0.2px] text-[#252B42]">15K</h1>
                        <p className="font-bold text-base leading-6 tracking-[0.1px] text-[#737373]">Happy Customers</p>
                    </div>

                    <div>
                        <h1 className="font-bold text-[58px] leading-[80px] tracking-[0.2px] text-[#252B42]">150K</h1>
                        <p className="font-bold text-base leading-6 tracking-[0.1px] text-[#737373]">Monthly Visitors</p>
                    </div>

                    <div>
                        <h1 className="font-bold text-[58px] leading-[80px] tracking-[0.2px] text-[#252B42]">15</h1>
                        <p className="font-bold text-base leading-6 tracking-[0.1px] text-[#737373]">Countries  Worldwide</p>
                    </div>

                    <div>
                        <h1 className="font-bold text-[58px] leading-[80px] tracking-[0.2px] text-[#252B42]">100+</h1>
                        <p className="font-bold text-base leading-6 tracking-[0.1px] text-[#737373]">Top Partners</p>
                    </div>
                </div>
            </div>

            <div className="w-[1577px] h-[764px]">
                <div className="w-[1050px] h-[764px] ml-[300px]">
                    <Image src={MdaBG} alt="Media" className=" rounded-2xl"/>
                    <button className="w-[92.6px] h-[92.6px] bg-[#23A6F0] flex items-center justify-center absolute rounded-full hover:opacity-60 mt-[-325px] ml-[425px]">
                        <FaPlay className="text-white h-6 w-6 " />
                    </button>
                </div>
            </div>

            <div className="w-[1577px] h-[826px] flex justify-center">
                <div className="w-[607px] h-[100px] flex flex-col gap-4">
                    <h1 className="font-bold text-[40px] leading-[50px] tracking-[0.2px] text-[#252B42] text-center">Meet Our Team</h1>
                    <p className="font-normal text-sm tracking-[0.2px] text-[#737373] text-center">Problems trying to resolve the conflict between <br></br>
                    the two major realms of Classical physics: Newtonian mechanics </p>
                    <div className="w-[1034px] h-[383px] flex gap-[30px] ml-[-190px] mt-24">
                        <TeamCard image={Tm1}/>
                        <TeamCard image={Tm2}/>
                        <TeamCard image={Tm3}/>
                    </div>
                </div>
            </div>

            <div className="w-[1577px] h-[479px] flex justify-center bg-[#FAFAFA] mt-[-130px]">
                <div className="w-[864px] h-[120px] flex flex-col items-center justify-center gap-10 absolute mt-[200px]">
                    <h1 className="font-bold text-[40px] leading-[50px] tracking-[0.2px] text-[#252B42] text-center">Big Companies Are Here</h1>
                    <p className="font-normal text-sm tracking-[0.2px] text-[#737373] text-center">Problems trying to resolve the conflict between <br></br>
                    the two major realms of Classical physics: Newtonian mechanics</p>
                    <div className="mt-6 ml-[-200px]">
                        <Logos />
                    </div>
                </div> 
            </div>

            <div className="w-[1577px] h-[636px] bg-[#2A7CC7] rounded-sm">
                <Image src={WorkBG} alt="BG" className="ml-[987px]"/>
                <div className="w-[1050px] h-[412px] flex-col justify-between">
                <div className="w-[1044px] h-[340px] gap-[30px] absolute left-[270px] top-[3450px] flex flex-col">
                    <h1 className="font-bold text-base leading-6 tracking-[0.1px] text-[#FFFFFF]">WORK WITH US</h1>
                    <h1 className="font-bold text-[40px] leading-[50px] tracking-[0.2px] text-[#FFFFFF]">Now Let’s grow Yours</h1>
                    <p  className="font-normal text-sm leading-[20px] tracking-[0.2px] text-[#FFFFFF]">The gradual accumulation of information about atomic and<br></br>
                         small-scale behavior during the first quarter of the 20th </p>
                    <button className="w-[132px] h-[52px] bg-transparent rounded-[5px] hover:bg-gradient-to-bl from-blue-300 to-purple-600
                    border-[1px] border-white text-white font-bold text-sm leading-[22px] tracking-[0.2px]">Button</button>
                </div>
                </div>
            </div>

            <Footer marginTop={0} color="bg-[#FFFFFF]"/>
        </div>
    )
}