import Button from "@/components/Button";
import designExample1Image from "@/assets/images/design-example-1.png"
import designExample2Image from "@/assets/images/design-example-2.png"

import DesignImage from "@/components/DesignImage";
import Pointer from "@/components/Pointer";



export default function Hero() {
    return <section className="py-24 overflow-x-clip">
        <div className="container relative">

            {/* ---------- Made myself a reusable component -------- */}

            {/* <div className="absolute -left-32 top-16 hidden lg:block">
                <Image src={designExample1Image} alt="Image1" />

            </div>
            <div className="absolute -right-64 -top-16">
                <Image src={designExample2Image} alt="Image2" />
            </div> */}
            <DesignImage src={designExample1Image} type="left" alt="hero" />
            <DesignImage src={designExample2Image} type="right" alt="right hero" />
            <div className="absolute top-96 left-56 hidden lg:block">
                <Pointer name="vasu" color="red" />
               
            </div>
            <div className="absolute -top-4 right-80 hidden lg:block">
                <Pointer name="Kritagya"  />
               
            </div>
            
            <div className="flex justify-center">
                <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950     font-semibold ">✨ $7.5M seed round raised</div>

            </div>
            
            <h1 className="mt-6 text-6xl font-medium text-center md:text-7xl lg:text-8xl">Impactful design, created effortlessly</h1>
            <p className="mt-8 text-center text-xl text-white/50 max-w-2xl mx-auto">Design tools shouldn&apos;t slow you down. Layers combines powerful features with an intuitive interface that keeps you in your creative flow.</p>
            

            <form action="" className="flex border border-white/15  rounded-full  p-2 mt-8 w-full max-w-lg mx-auto ">
                <input type="email" name="" id="" placeholder="Enter your email" className="bg-transparent px-4 min-w-0 flex-1" />
                
                <Button variant="primary" type="submit" className="whitespace-nowrap " >Sign Up</Button>
            </form>

          
            

        </div>
            
    </section>
}
