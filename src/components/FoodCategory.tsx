interface props {
    img?:string,
    category:string
}
export default function FoodCategory({ img, category} : props) {
    return (
        <span className="bg-[#ffffff0d] rounded-full p-4 aspect-[10/4] flex items-center justify-center gap-3
            text-white capitalize border border-[#c47175] duration-150 transition-background hover:bg-white hover:text-[var(--primary-color)] cursor-pointer">
                {
                    img && <img loading="lazy" src={img} alt="plat" width="24" height="24" />
                }
                <p>{category}</p>
        </span>
    )
}