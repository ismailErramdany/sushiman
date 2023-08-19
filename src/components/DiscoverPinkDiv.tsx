import checkkSVG from "../assets/check.svg";
import { RIGHT_Variants,LEFT_Variants } from "../animationVariants";
import {m} from "framer-motion";
interface Discoverprops {
    foodType:string,
    foodList: string[]
}
interface itemsProps {
    foodList: string[]
}
function Items({ foodList } : itemsProps) {
    return (
        // <ul className="md:grid max-sm:max-w-fit mx-auto md:grid-cols-2 gap-5 flex flex-col text-[var(--secondary-color)] capitalize">
        <ul className="gap-5 max-w-[400px] mx-auto flex flex-wrap text-[var(--secondary-color)] capitalize">
            {
                foodList.map((el,i) => {
                    return <li key={i} className="flex max-w-fit min-w-[calc(50%_-_10px)] gap-2 items-center">
                            <div className="w-8 h-8 bg-[var(--primary-color)] rounded-full grid place-items-center">
                                <img src={checkkSVG}width="13"height="10" alt="cheack icon"/>
                            </div>
                            <p className="font-medium">{el}</p>
                        </li>
                })
            }
        </ul>
    )
}
export default function DiscoverPinkDiv({foodList,foodType} : Discoverprops) {
    const title = "Japanese " + foodType;
    return (
        <div className="md:min-h-[100vh] py-12 p-6 md:p-0 max-h-[700px] grid place-items-center bg-[var(--color-creamson)]">
            <m.div variants={foodType == "Sushi" ? LEFT_Variants : RIGHT_Variants} initial="hidden" whileInView="show" className="max-md:text-center">
                <p className="text-[var(--primary-color)] font-semibold">What’s Trending / トレンド</p>
                <h1 className="font-bold sm:max-md:text-center text-5xl md:text-[62px] my-8 font-serif leading-tight">{title}</h1>
                <p className="text-[#845d5d] leading-relaxed text-lg mb-5">Feel the taste of the most delicious {foodType} here.</p>
                <Items foodList={foodList} />
            </m.div>
        </div>
    )
}