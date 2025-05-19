"use client"
import Button from "@/components/Button";
import designExample1Image from "@/assets/images/design-example-1.png"
import designExample2Image from "@/assets/images/design-example-2.png"


import Pointer from "@/components/Pointer";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";
import cursor from "@/assets/images/cursor-you.svg"



export default function Hero() {
    const [leftDesignScope, leftDesignAnimate] = useAnimate();
    const [leftPointerScope, leftPointerAnimate] = useAnimate();
    const [rightDesignScope, rightDesignAnimate]  = useAnimate()
    const [rightPointerScope, rightPointerAnimate] = useAnimate();
    useEffect(()=>{
        leftDesignAnimate([
            [leftDesignScope.current, {opacity: 1}, {duration: 0.5}],
            [leftDesignScope.current, {y:0, x:0}, {duration: 0.5}],

        ])
        leftPointerAnimate([
            [leftPointerScope.current, {opacity:1}, {duration:0.5}],
            [leftPointerScope.current, {y:0, x:-100}, {duration: 0.5}],
            [leftPointerScope.current, {x:0, y:[0, 16, 0]}, {duration: 0.5}]

        ])
        rightDesignAnimate([
            [rightDesignScope.current, {opacity:1}, {duration:0.5, delay:1.5}],
            [rightDesignScope.current, {y:0, x:0}, {duration:0.5}]
        ])
        rightPointerAnimate([
            [rightPointerScope.current , {opacity:1}, {duration:0.5 , delay: 1.5}],
            [rightPointerScope.current, {y:0, x:175}, {duration: 0.5}],
            [rightPointerScope.current, {x:0, y:[0, 30, 0]}, {duration: 0.5}]

        ])
        
    }, []);

    return <section className="py-24 overflow-x-clip" style={{
        cursor: `url(${cursor.src}) 0 0, auto`
    }} >
        <div className="container relative">

            {/* ---------- Made myself a reusable component -------- */}

            <motion.div ref={leftDesignScope} initial={{opacity:0, y:100, x:-100}} drag className="absolute -left-32 top-16 hidden lg:block">
                <Image draggable="false" src={designExample1Image} alt="Image1" />

            </motion.div>
            {/* <motion.div ref={leftDesignScope} initial={{opacity:0 , y:100, x:-100}} >
                <DesignImage src={designExample1Image} type="left" alt="hero" />

                </motion.div> */}

            <motion.div drag ref={leftPointerScope} initial={{opacity: 0, y: 100, x:-200}} className="absolute top-96 left-56 hidden lg:block">
                <Pointer  name="vasu" color="red" />

            </motion.div>
            {/* <DesignImage src={designExample2Image} type="right" alt="right hero" /> */}
            <motion.div  ref={rightDesignScope} drag initial={{opacity:0, y:100, x:100 }} className="absolute -right-64 -top-16 hidden lg:block">
                <Image draggable="false" src={designExample2Image} alt="Image2" />
            </motion.div>
            <motion.div drag ref={rightPointerScope} initial={{opacity:0, y:100, x:275}} className="absolute -top-4 right-80 hidden lg:block">
                <Pointer name="Kritagya"  />

            </motion.div>

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
