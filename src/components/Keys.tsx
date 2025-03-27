import { twMerge } from "tailwind-merge";


export default function Key(props:{text:string, className?:string}){
    const {text, className} = props;
    return (
        <div className= {twMerge("bg-neutral-300  size-14 inline-flex items-center justify-center px-6 py-3 rounded-2xl text-xl text-neutral-950 font-medium", className       )                   }>
                {text}
        </div>

    )
    
}