
import {  HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";


export default function tag(props:HTMLAttributes<HTMLDivElement>){
    const {className, children, ...otherProps } = props;
    return ( 
        <div className={twMerge("inline-flex gap-2 justify-center  border border-lime-400 text-lime-400 px-3 py-1 rounded-full items-center uppercase ", className)}{...otherProps}>
            <span className="">&#10038;</span>
            <span className="text-sm">{children}</span>
        </div>
    )

}