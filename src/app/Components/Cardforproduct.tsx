import Image from "next/image";

interface Cardprod {
    image: any;     
    title : string;
    width: number;   // Set width type to number
    height: number;  // Set height type to number  
}

export default function CardProduct (props : Cardprod ) {
    const { image , title, width, height } = props;
    return (
        <div className={` w-[205px] h-[223px] flex items-center justify-center`}>
            <Image src={image} alt={title} width={width} height={height}/>

            <div className="flex items-center flex-col absolute">
                <h1 className="w-[67px] h-[24px] font-bold text-base tracking-[0.2px] text-center text-white">CLOTHS</h1>
                <h1 className="w-[54px] h-5 font-normal text-sm tracking-[0.2px] text-center text-white">5 Items</h1>
            </div>
        </div>
    )
}