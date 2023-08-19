import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
export default function Footer(){
    return(
        <footer className="p-5 flex justify-between items-center max-md:flex-col">
            <div className="font-serif text-xl md:text-3xl font-semibold uppercase">
                <span className="text-[var(--primary-color)]">sushi</span>
                <span>man</span>
            </div>
            <nav className="flex gap-y-4 my-4 md:my-0 gap-x-8 md:gap-8 max-md:flex-wrap items-center justify-center uppercase text-[#121212] font-medium">
                <a href="#menu">Menu</a>
                <a href="#food">Food</a>
                <a href="#services">Services</a>
                <a href="#about-us">About us</a>
            </nav>
            <nav className="flex items-center gap-8 max-w-fit">
                <a href="#" className="bg-black grid place-items-center p-2 w-10 h-10 rounded-full">
                    <img loading="lazy" src={facebook}alt="facebook's icon" height="16" width="12"/>
                </a>
                <a href="#" className="bg-black grid place-items-center p-2 w-10 aspect-square rounded-full">
                    <img loading="lazy" src={instagram}alt="instagram's icon"width="20"height="20"/>
                </a>
                <a href="#" className="bg-black grid place-items-center p-2 w-10 aspect-square rounded-full">
                    <img loading="lazy" src={twitter}alt="twitter's icon"width="19"height="16"/>
                </a>
            </nav>
        </footer>
    )
}