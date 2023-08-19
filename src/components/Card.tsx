import start from "../assets/star.svg";
import { UP_Variants } from "../animationVariants";
import { m } from "framer-motion";
import { useState } from "react";
interface Card_props {
    active:boolean,
    name:string,
    img:string,
    price:number,
    rating:number
}
export default function Card({ active,img,name,price,rating } : Card_props) {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const [isMobile,setIsMobile] = useState(mediaQuery.matches);
    
    mediaQuery.addEventListener("change",(e) => {
        setIsMobile(e.matches)
    });
    const ActiveCard = () => {
        return (
            <div className="bg-white w-full mx-auto max-w-[340px] rounded-[32px] md:rounded-[46px] p-6 md:p-10">
                <div className="max-w-[214px] max-h-[160px] w-full mx-auto">
                    <img loading="lazy" src={img} alt={`${name}'s picture`} width="214" height="160" />
                </div>
                <h1 className="text-3xl text-[#555555] font-semibold capitalize my-8 font-serif">{name}</h1>
                <div className="flex items-center text-white justify-between">
                    <div className="flex items-center">
                        <img loading="lazy" src={start} alt="stars' rating" width="28" height="28" className="mr-2" />
                        <p className="text-gray-600 text-2xl">{Number.isInteger(rating) ? rating + ".0" : rating}</p>
                    </div>
                        <span className="text-2xl text-black">{"$"+(Number.isInteger(price) ? price + ".00" : price) }</span>
                </div>
            </div>
        )
    }
    const UnActiveCard = () => {
        return (
            <div className="bg-[#ffffff0d] mx-auto max-w-[260px] w-full rounded-[40px] p-8 border border-[#c47175]">
                <div className="w-[110px] h-[84px] flex items-center justify-center mx-auto">
                    <img loading="lazy" src={img} alt={`${name}'s picture`} width="110" height="84" />
                </div>
                <h1 className="text-2xl text-white font-semibold capitalize my-8 font-serif">{name}</h1>
                <div className="flex items-center text-white justify-between">
                    <div className="flex items-center">
                        <img loading="lazy" src={start} alt="stars' rating" width="20" height="20"  className="mr-2" />
                        <p className="text-xl">{rating}</p>
                    </div>
                        <span className="text-xl">{"$"+(Number.isInteger(price) ? price + ".00" : price)}</span>
                </div>
            </div>
        )
    }
    if (isMobile) {
        return (
            <m.div variants={UP_Variants} initial="hidden" whileInView="show">
                {
                    active ? <ActiveCard />: <UnActiveCard />
                }
            </m.div>
        )
    }
    return active ? <ActiveCard />: <UnActiveCard />
}