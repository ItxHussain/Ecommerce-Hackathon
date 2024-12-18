import Image from "next/image"
import {Montserrat} from "next/font/google"
interface BestSellerProd {
    image: any ;     
    title : string; // Set height type to number
}

const montserrat = Montserrat({ subsets: ['latin'] })
export default function BestSellerProd (props : BestSellerProd) {
const { image , title } = props;
    return (
        <div className={montserrat.className}>
            <div className="w-[238px] h-[300px] mt-7">
                    <Image src={image} alt={title} />
                    <div className="w-[239px] h-[188px] px-[25px] pt-[25px] pb-[35px] gap-[10px] ">
                        <h1 className="text-[#252B42] font-bold text-base tracking-[0.1px] ">Graphic Design</h1>
                        <h1 className="text-[#737373] font-bold text-sm leading-[24px] tracking-[0.2px] mt-4">English Department</h1>
                        <div className="flex items-center py-[5px] px-[3px] gap-[5px] mt-4">
                            <h1 className="text-[#BDBDBD] text-base font-bold tracking-[0.1px]">$16.48</h1>
                            <h1 className="text-[#23856D] text-base font-bold tracking-[0.1px]">$6.48</h1>
                        </div>
                    </div>
            </div>
        </div>
    )
}