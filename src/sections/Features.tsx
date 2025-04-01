import FeatureCard from "@/components/FeatureCard";
import Tag from "@/components/Tag"
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg"
import avatar2 from "@/assets/images/avatar-florence-shaw.jpg"
import avatar3 from "@/assets/images/avatar-lula-meyers.jpg"
import Image from "next/image";
import Key from "@/components/Keys";

const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];

export default function Features() {
    return <section className="py-24">
        <div className="container">
            <div className="flex justify-center">
                <Tag>Features</Tag>
            </div>
            <h2 className="text-6xl  font-medium text-center mt-6">Where power meets <span className="text-lime-400 lg:block">simplicity</span> </h2>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-3 ">
                <FeatureCard title="Real-time Collaboration" desc="Work together seamlessly with conflict-free team editing" className="md:col-span-2 lg:col-span-1">
                    <div className="flex aspect-video justify-center items-center ">
                        <div className=" border-blue-400 size-20 border-4 rounded-full  p-1 overflow-hidden z-50 bg-neutral-900">
                            <Image src={avatar1} alt="Avatar 1" className="border   rounded-full" />
                        </div>
                       
                        <div className=" border-purple-400 size-20 overflow-hidden  border-4 rounded-full p-1 -ml-6 z-30 bg-neutral-900">
                            <Image src={avatar3} alt="avatar2" className="border rounded-full" />
                        </div>
                        <div className=" border-orange-400 size-20 overflow-hidden bg-neutral-900 border-4 rounded-full p-1 z-40 -ml-6">
                            <Image src={avatar2} alt="avatar2" className="border rounded-full" />
                        </div>
                        <div className=" border-transparent size-20 overflow-hidden bg-neutral-900 border-4 rounded-full p-1 -ml-6">
                           
                            <div className=" size-full bg-neutral-700 rounded-full items-center justify-center inline-flex gap-1">
                                {Array.from({length:3}).map((_, i)=>(
                                    <span className="size-1.5 rounded-full bg-white" key={i}></span>
                                ))}

                            </div>
                        </div>
                        
                    </div>

                </FeatureCard>
                <FeatureCard title="Interactive Prototyping" desc="Engage your clients with prototypes that react to user actions" className="md:col-span-2 lg:col-span-1">
                    <div className="aspect-video flex items-center justify-center ">
                       <p className="text-4xl text-center font-extrabold text-white/20">We&apos;ve achieved <span className="block bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text font-bold">incredible</span> growth this year </p>
                    </div>
                    

                </FeatureCard>
                <FeatureCard title="Keyboard Quick Actions" desc="Powerful commands to help you create designs more quickly" className="md:col-span-2 md:col-start-2 lg:col-span-1">
                    <div className="aspect-video flex items-center justify-center gap-2">
                       <Key className="w-28" text="shift" />
                       <Key text="alt" />
                       <Key text="C" />
                    </div>
                </FeatureCard>
              
            </div>
            <div className="mt-8 flex flex-wrap  gap-3 justify-center items-center md:mt-14 lg:mt-8 ">
                {features.map((feature)=>(
                    <div key={feature} className="bg-neutral-900 border border-white/10 px-3 inline-flex py-1.5 rounded-2xl gap-3 items-center md:px-5 md:py-2">
                        <span className="size-5 inline-flex justify-center items-center  rounded-full bg-lime-400 text-neutral-950 text-xl">&#10038;</span>
                        <span className="font-medium md:text-lg">{feature}</span>
                    </div>
                ))}
            </div>
            

        </div>
    </section>;
}
