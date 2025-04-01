import logo from "@/assets/images/logo.svg"

import Image from "next/image";
import Link from "next/link";
const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
    return (
        <section className="py-24">
            <div className="container">
                <div className="flex flex-col gap-6 md:flex-row justify-between items-center">
                    <div className="flex justify-center">
                        <Image  src={logo} alt="logo" />
                    </div>
                    <div>
                        <nav className="flex gap-6">
                            {footerLinks.map((footerlink)=>(
                          
                                <Link key={footerlink.label} href={footerlink.href} className="text-white/50 text-sm" >{footerlink.label}</Link>

                           
                            ))}

                        </nav>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}
