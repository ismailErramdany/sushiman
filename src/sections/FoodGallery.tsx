import bg from "../assets/popular_bg.webp";
import arrow_right from "../assets/arrow-right.svg";
import sushi6 from "../assets/sushi-6.webp"
import sushi7 from "../assets/sushi-7.webp"
import sushi8 from "../assets/sushi-8.webp"
import sushi9 from "../assets/sushi-9.webp"
import sushi10 from "../assets/sushi-10.webp"
import sushi11 from "../assets/sushi-11.webp"
import sushi12 from "../assets/sushi-12.webp"
import{FoodCategory,Card}from "../components/index"
import{m}from "framer-motion"
import{UP_Variants,scaleY_Variants}from "../animationVariants";
export default function FoodGallery(){
    const CATEGORIES = [
        {
            category:'all'
        },
        {
            img:sushi9,
            category:'sushi'
        },
        {
            img:sushi8,
            category:'ramen'
        },
        {
            img:sushi7,
            category:'udon'
        },
        {
            img:sushi6,
            category:'dango'
        },
        {
            category:'all'
        },
    ]
    const FOOD = [
        {
            active:false,
            name:'Chezu Sushi',
            rating:4.7,
            price:13.00,
            img:sushi12
        },
        {
            active:true,
            name:'Original Sushi',
            rating:5,
            price:19.00,
            img:sushi11
        },
        {
            active:false,
            name:'Ramen Legendo',
            rating:4.9,
            price:21.00,
            img:sushi10
        },
    ]
    return(
    <div id="menu" className="px-6 py-12 md:px-12 md:max-lg:px-5 lg:p-20 text-center bg-cover" style={{backgroundImage:`url(${bg})`}}>
        <header><m.h1 variants={scaleY_Variants}initial="hidden" whileInView="show" className="font-serif text-white text-3xl md:text-6xl font-medium">Popular Food/人気</m.h1></header>
        <m.div variants={UP_Variants}initial ="hidden" whileInView="show">
            <div className="mx-auto flex items-center max-md:flex-wrap justify-center gap-3 my-12">{CATEGORIES.map((el,i)=><FoodCategory{...el} key={i} />)}</div>
            <div className="flex flex-col lg:flex-row gap-12 mx-auto lg:items-end justify-center">{FOOD.map((el,i)=><Card{...el} key={i} />)}</div>
        </m.div>
        <m.footer className="grid place-items-center mt-20" variants={UP_Variants}initial ="hidden" whileInView="show">
            <button
                className="bg-black text-white capitalize font-semibold px-8 py-5 float-right m-0 mb-5
                        flex items-center justify-center gap-8 rounded-full
                    "
            >
                <span>explore more</span><img loading="lazy" src={arrow_right}alt="learn more" className="w-3 h-3" />
            </button>
        </m.footer>
    </div>)
}