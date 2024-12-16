import Image from "next/image"

import {Montserrat} from "next/font/google"

interface CardProd2 {
    image: any;     
    title : string; // Set height type to number
}

const montserrat = Montserrat({ subsets: ['latin'] })
export default function CardProduct2 (props : CardProd2) {
const { image , title } = props;
    return (
        <div className={montserrat.className}>
            <div className="w-[238px] h-[300px] ml-[77px]">
                    <Image src={image} alt={title} />
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
    )
}