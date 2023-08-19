import sushi_1 from "../assets/sushi-3.webp"
import sushi_2 from "../assets/sushi-2.webp"
import arrow_up from "../assets/arrow-up-right.svg"
import{m}from "framer-motion";
import{RIGHT_Variants,LEFT_Variants}from "../animationVariants"
export default function AboutUs() {
    return (
        <div id="about-us" className="flex">
            <div className="md:w-[calc(50vw_-_70px)] hidden md:flex items-center justify-between flex-col">
                <div className="p-12 w-full py-16 relative">
                    <div className="absolute top-0 left-0 right-0 w-full h-full bg-cover bg-[100% 100%] abouts-one"></div>
                    <m.img loading="lazy" src={sushi_1} variants={LEFT_Variants} initial="hidden" whileInView="show" alt="china food" className="w-52 aspect-square" />
                </div>
                <div className="relative w-full">
                    <button className="bg-black text-white capitalize font-semibold px-8 py-5 float-right m-0
                        flex items-center justify-center gap-8 rounded-full rounded-ee-none rounded-se-none
                    ">
                        <span>learn more</span>
                        <img src={arrow_up} alt="learn more" className="w-3 h-3" />
                    </button>
                    <hr className="w-full h-3 -z-10 absolute top-1/2 left-0 -translate-y-1/2 bg-[var(--color-creamson)]" />
                </div>
                <div className="p-12 w-full py-16 relative">
                    <div className="absolute top-0 left-0 right-0 w-full h-full bg-cover bg-[100% 100%] abouts-two"></div>
                    <m.img loading="lazy" src={sushi_2} variants={LEFT_Variants} initial="hidden" whileInView="show" alt="china food" className="mr-5" width="208" height="139" />
                </div>
            </div>
            <div className="flex-stretch max-sm:text-center relative md:w-[calc(50vw_+_70px)] py-12 p-6 sm:p-16 bg-[var(--color-creamson)]">
                <m.div variants={RIGHT_Variants} initial="hidden" whileInView="show">
                    <p className="text-[var(--primary-color)] font-semibold">About Us / 私たちに関しては</p>
                    <h1 className="font-bold sm:max-md:text-center text-5xl sm:text-6xl md:text-[62px] my-8 font-serif leading-tight md:w-[90%]">Our mission is to bring true Japanese flavours to you</h1>
                    <p className="text-[#845d5d] sm:max-md:text-center leading-relaxed text-lg">We will continue to provide the experience of Omotenashi, the Japanese mindset of hospitality, with our shopping and dining for our customers.</p>
                </m.div>
            </div>
        </div>
    )
}