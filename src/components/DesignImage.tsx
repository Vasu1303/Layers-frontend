import Image, {ImageProps, StaticImageData} from "next/image";
import { cva } from "class-variance-authority";


const classes=cva('absolute hidden lg:block',{
    variants:{
        type:{
            right: "-right-64 -top-16",
            left: "-left-32 top-16 "
        }
    }
    

})

export default function DesignImage(props:{type: "right" | "left", src:string | StaticImageData, alt:string } & ImageProps)
{
    const {type, src, alt,  ...otherProps} = props;
    return <Image src={src} alt={alt} className={classes({type})}{...otherProps} />
} 