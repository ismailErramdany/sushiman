import { DiscoverPinkDiv, DiscoverWhiteDiv } from "../components/index";
import japanese_sushiImg from "../assets/japanese_sushi.webp";
import japanese_drinkImg from "../assets/japanese_drinks.webp";
import sushiImg from "../assets/sushi-5.webp";
import drinkImg from "../assets/sushi-4.webp";
import { m } from "framer-motion";
import { LEFT_Variants, RIGHT_Variants } from "../animationVariants";
const DATA_ONE = { foodType: "Sushi", foodList: ["Make Sushi", "Uramaki Sushi", "Temaki Sushi", "Oshizushi", "Nigiri Sushi", "Inari Sushi"] };
const DATA_Two = { foodType: "Drinks", foodList: ["Oruncha", "Aojiru", "Aojiru", "Sakura Tea", "Ofukucha", "Mugicha"] };
export default function Discover() {
    return (
        <div id="food" className="grid lg:grid-cols-2">
            <DiscoverPinkDiv {...DATA_ONE} />
            <DiscoverWhiteDiv bgImg={japanese_sushiImg}>
                <m.img loading="lazy" variants={RIGHT_Variants} initial="hidden" whileInView="show" src={sushiImg} alt="product IMG" width="260" height="280" className="md:w-[260px] max-lg:float-left w-[50%] max-w-full object-cover" />
            </DiscoverWhiteDiv>
            <DiscoverWhiteDiv bgImg={japanese_drinkImg}>
                <m.img loading="lazy" variants={LEFT_Variants} initial="hidden" whileInView="show" src={drinkImg} alt="product IMG" width="260" height="280" className="md:w-[260px] w-[50%] max-lg:float-right max-w-full object-cover" />
            </DiscoverWhiteDiv>
            <DiscoverPinkDiv {...DATA_Two} />
        </div>
    );
}