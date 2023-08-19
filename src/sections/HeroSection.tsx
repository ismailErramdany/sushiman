import playCircle from "../assets/play-circle.svg";
import user from "../assets/client-img.webp"
import{m}from "framer-motion";
import{UP_Variants,RIGHT_Variants}from "../animationVariants";
export default function HeroSection() {
    return (
        <div className="flex relative max-md:text-center max-md:flex-col">
            <div className="w-full md:w-[calc(50vw_-_70px)] md:min-h-[calc(100vh_+_250px)] bg-[var(--primary-color)]">
                <m.div
                    initial="hidden"
                    animate="show"
                    variants={UP_Variants}
                >
                    <div style={{backgroundSize:'100% 100%'}} className="bg-hero-section bg-center max-md:w-full max-md:h-[calc(100vh_-_100px)] md:aspect-[0.966] translate-y-[100px] md:translate-y-[150px] md:translate-x-[50px] md:scale-x-125 md:scale-y-125 relative z-10"></div>
                </m.div>
            </div>
            <div className="flex-stretch relative md:w-[calc(50vw_+_70px)] flex justify-between flex-col pt-[130px] bg-[var(--color-creamson)]">
                <m.div
                    initial="hidden"
                    animate="show"
                    variants={RIGHT_Variants}
                    className="px-6 md:px-16"
                >
                    <h1 className="font-bold text-6xl md:text-[80px] font-serif md:w-[90%] leading-tight">Feel the taste of Japanese food</h1>
                    <p className="m-0 md:ml-8 my-8 font-sans leading-relaxed font-medium text-[#845d5d] text-lg md:text-base md:w-[80%] md:text-[var(--secondary-color)]">Feel the taste of the most popular Japanese food from anywhere and anytime.</p>
                    <div className="md:ml-8 flex flex-wrap gap-3 capitalize">
                        <button type="button" className="text-white max-md:mx-auto font-semibold px-12 py-4 capitalize rounded-full bg-black">order now</button>
                        <div className="text-[#020202] flex max-md:mx-auto gap-4 items-center">
                            <img loading="lazy" src={playCircle}alt="play cirlce"width="56"height="56"/>
                            <p>how to order</p>
                        </div>
                    </div>
                </m.div>
                <m.div 
                    variants={UP_Variants}
                    initial="hidden"
                    whileInView={{...UP_Variants.show,transition:{duration:0.5}}}
                    className="bg-white p-5 mt-10 flex max-md:flex-col max-md:items-center"
                >
                    <div className="md:w-1/2 w-full flex flex-col sm:flex-row items-center max-md:justify-center gap-2 text-6xl max-md:pb-4 max-md:mb-2 max-md:border-b-2 md:border-r-2 font-light border-gray-300">
                        <p className="font-serif">24k+</p>
                        <p className="text-gray-600 text-base">Happy Customers</p>
                    </div>
                    <div className="md:w-1/2 flex flex-col sm:flex-row gap-3 items-center">
                        <img loading="lazy" src={user}alt="user" height="64" width="64" className="ml-5 rounded-full"/>
                        <p className="text-gray-800 text-sm">"This is the best Japanese food delivery service that ever existed."</p>
                    </div>
                </m.div>
            </div>
            <div className="absolute max-md:hidden top-[100vh] left-4 text-9xl text-white font-semibold -translate-y-1/2 flex flex-col gap-3">
                <m.div variants={UP_Variants} initial="hidden" animate="show">日</m.div>
                <m.div variants={UP_Variants} initial="hidden" animate="show">本</m.div>
                <m.div variants={UP_Variants} initial="hidden" animate="show">食</m.div>
            </div>
        </div>
    )
}