import { twMerge } from "tailwind-merge";

interface FeatureProps{
    title:string,
    desc:string,
    children?:React.ReactNode,
    className?:string
}

export default function FeatureCard(FeatureProps:FeatureProps){
    const {title, desc, children, className} = FeatureProps;
    return (
        <div className={twMerge("bg-neutral-900 h-auto border border-white/10 rounded-3xl   p-6 ", className)}>
           <div className="aspect-video">{children}</div>
            <div>
                <h3 className="text-3xl font-medium mt-6">{title}</h3>
                <p className="text-white/50 mt-2 ">{desc}</p>
            </div>

        </div>
    )



}