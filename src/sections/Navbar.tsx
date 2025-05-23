"use client"
import Image from "next/image";
import logoImage from "@/assets/images/logo.svg"
import Button from "@/components/Button";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";



const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
    <>
   
        <section className="py-4 lg:py-8 fixed w-full top-0 z-50">
            <div className="container max-w-5xl">
                <div className="border border-white/15 rounded-[27px] md:rounded-full bg-neutral-950/70 backdrop-blur ">
                    <div className="grid grid-cols-2 lg:grid-cols-3  p-2 items-center px-4 md:pr-2 ">
                        <div>
                            <Image src={logoImage} alt="logo"  className="h-9 md:h-auto w-auto" />
                            

                        </div>
                        <div className="hidden lg:flex justify-center">
                            <nav className="flex gap-6 font-medium">
                                {navLinks.map(link =>(
                                    <a href={link.href} key={link.label}>{link.label}</a>

                                ))}
                            </nav>
                        </div>
                        <div className="flex justify-end gap-4 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-menu cursor-pointer md:hidden" onClick={()=>setIsOpen(!isOpen)} >
                            <line x1="3" y1="6" x2="21" y2="6" className={twMerge("origin-left transition-transform duration-300  ", isOpen && "rotate-45 -translate-y-1")} ></line>
                    
                                    <line x1="3" y1="12" x2="21" y2="12" className={twMerge( "transition", isOpen && 'opacity-0')}></line>
                            <line x1="3" y1="18" x2="21" y2="18" className={twMerge("origin-left transition duration-300 ", isOpen && " -rotate-45 translate-y-1")} ></line>
                        
                
                            </svg>
                            <Button variant="secondary" className="hidden md:inline-flex items-center">Log In</Button>
                            <Button variant="primary" className="hidden md:inline-flex items-center">Sign Up</Button>
                            
                        
                    </div>

                    </div>
                    <AnimatePresence>

                    
                    {isOpen && (
                                <motion.div initial={{height:0}} animate={{height:"auto"}} exit={{height:0}} className="overflow-hidden">
                                    <div className="flex flex-col gap-2 items-center py-4 md:hidden">
                                            {navLinks.map((link)=>(

                                                    <a href={link.href} key={link.label} className="py-1 px-3 rounded-2xl  hover:bg-neutral-700" >{link.label}</a>

                                                ))}
                                                <div className="flex gap-4 ">
                                                    <Button variant="primary" className="hover:bg-lime-600 ">Login</Button>
                                                    <Button variant="secondary" className="hover:bg-neutral-900">Sign Up</Button>

                                                </div>

                                    </div>
                                
                                

                                </motion.div>
                            
                    ) }
                    </AnimatePresence>
                

                    
                </div>
                
            
            </div>
        </section>
        <div className="pb-[52px] md:pb-[64px] lg:pb-[129px]">

        </div>
    </>
    )
}
