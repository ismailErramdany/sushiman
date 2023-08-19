import searchIcon from "../assets/search.svg";
import menu from "../assets/menu.svg";
import{m}from "framer-motion";
import{DOWN_Variants}from "../animationVariants";
export default function Navbar(){
    return(
    <m.nav
        variants={DOWN_Variants}
        initial='hidden'
        animate="show"
        className="absolute z-20 top-0 left-0 right-0 w-full p-5 md:pl-12 flex justify-between items-start md:items-center bg-transparent">
            <p className="text-lg sm:text-2xl font-semibold uppercase text-white font-serif">SUSHIMAN</p>
            <ul className="text-[var(--secondary-color)]  font-sans uppercase font-medium cursor-pointer hidden md:flex gap-16 items-center">
                <li className="py-2"><a href="#menu">menu</a></li>
                <li className="py-2"><a href="#food">food</a></li>
                <li className="py-2"><a href="#services">services</a></li>
                <li className="py-2"><a href="#about-us">about us</a></li>
                <li className="mr-3">
                    <img src={searchIcon}alt="search"width="21"height="21"/>
                </li>
            </ul>
            <button className="bg-transparent flex flex-col items-end md:hidden group">
                <img src={menu}alt="menu" className="w-10 h-10 invert"/>
            <div className="hidden group-focus:flex group-hover:flex flex-col items-end cursor-auto">
                <span className="w-0 h-0 border-8 -translate-x-[12px] border-b-[var(--color-creamson)] border-transparent"></span>
                <ul className="text-[var(--secondary-color)] absolute left-5 max-xs:translate-y-4 xs:left-0 max-xs:pe-5 max-xs:w-[calc(100vw_-_40px)] text-start max-md:rounded xs:relative bg-[var(--color-creamson)] max-md:pe-16 p-5 font-sans uppercase font-medium">
                    <li className="py-2 hover:translate-x-4 duration-150"><a className="cursor-pointer" href="#menu">menu</a></li>
                    <li className="py-2 hover:translate-x-4 duration-150"><a className="cursor-pointer" href="#food">food</a></li>
                    <li className="py-2 hover:translate-x-4 duration-150"><a className="cursor-pointer" href="#services">services</a></li>
                    <li className="py-2 hover:translate-x-4 duration-150"><a className="cursor-pointer" href="#about-us">about us</a></li>
                </ul>
            </div>
            </button>
    </m.nav>)
}
// position: absolute;
//     left: 20px;
//     padding: 20px;
//     width: calc(100vw - 60px);
//     transform: translateY(16px);