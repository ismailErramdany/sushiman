import { PropsWithChildren } from "react"
interface props {
    bgImg : string,
}
export default function DiscoverWhitzDiv({ bgImg,children } : PropsWithChildren<props>) {
    return (
        <div
            className="lg:grid place-items-center relative p-5 lg:p-0 h-full"
            // style={{
            //     backgroundImage:`url(${bgImg})`,
            //     backgroundSize:'cover'
            // }}
        >
            {children}
            <div className="w-full h-full absolute top-0 left-0 right-0 bg-center" style={{backgroundImage:`url(${bgImg})`,backgroundSize:'100% 100%'}}></div>
            {/* <img src={bgImg} alt="background img for " className="w-full h-full absolute top-0 left-0 right-0" /> */}
        </div>
    )
}