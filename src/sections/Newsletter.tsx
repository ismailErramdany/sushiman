import subscribe_bg from "../assets/subscribe_bg.webp";
import { m } from "framer-motion";
import { scaleY_Variants,UP_Variants } from "../animationVariants";
export default function Newsletter() {
    return (
        <div id="services" className="p-8 md:p-16 text-center relative bg-cover sm:grid place-items-center" style={{backgroundImage:`url("${subscribe_bg}")`}}>
            <m.h1 variants={scaleY_Variants} initial="hidden" whileInView="show" className="font-serif text-5xl md:text-8xl font-semibold max-w-[750px] w-full text-white">
                Get offers stright to your inbox
            </m.h1>
            <m.div variants={UP_Variants} initial="hidden" whileInView="show">
                <p className="text-white text-lg text-opacity-70 my-12">Sign up for the Sushiman newsletter</p>
                <form onSubmit={(e) => e.preventDefault()} className="flex relative sm:gap-12 p-3 sm:p-5 bg-transparent rounded-full border border-[#ffffff80] items-center sm:justify-center mx-auto">
                    <input
                        type="text"
                        placeholder="Enter your Email address"
                        className="outline-none placeholder:text-white text-white placeholder:text-opacity-40 text-opacity-40 border-none bg-transparent p-1 md:p-3 max-sm:w-full"
                    />
                    <button type="submit" className="hidden sm:block px-6 sm:px-12 sm:py-5 rounded-full text-center bg-[#1f1e31] capitalize text-white">get started</button>
                </form>
                <button type="submit" className="py-4 rounded-full text-center bg-[#1f1e31] capitalize text-white block w-full mt-3 sm:hidden">get started</button>
            </m.div>
        </div>
    )
}
// max-md:text-xs max-md:aspect-[10/4]