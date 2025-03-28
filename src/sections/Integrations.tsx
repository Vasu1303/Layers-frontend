import Tag  from "@/components/Tag";
import figmaIcon from "@/assets/images/figma-logo.svg";
import notionIcon from "@/assets/images/notion-logo.svg";
import slackLogo from "@/assets/images/slack-logo.svg";
import relumeLogo from "@/assets/images/relume-logo.svg";
import framerLogo from "@/assets/images/framer-logo.svg";
import githubLogo from "@/assets/images/github-logo.svg";
import Image from "next/image";
import IntegrationCard from "@/components/IntergrationaCard";

const integrations = [
    { name: "Figma", icon: figmaIcon, description: "Figma is a collaborative interface design tool." },
    { name: "Notion", icon: notionIcon, description: "Notion is an all-in-one workspace for notes and docs." },
    { name: "Slack", icon: slackLogo, description: "Slack is a powerful team communication platform." },
    { name: "Relume", icon: relumeLogo, description: "Relume is a no-code website builder and design system." },
    { name: "Framer", icon: framerLogo, description: "Framer is a professional website prototyping tool." },
    { name: "GitHub", icon: githubLogo, description: "GitHub is the leading platform for code collaboration." },
];

export type IntegrationTypes = typeof integrations;

export default function Integrations() {
    return <section className="py-24 overflow-hidden">
        <div className="container">
            <div className="grid lg:grid-cols-2 items-center lg:gap-16">

                <div>
                    <Tag>Integeration</Tag>
                    <h2 className="text-6xl mt-6 font-medium">Plays well with <span className="text-lime-400">others</span> </h2>
                    <p className="text-white/50 mt-4 text-lg">Layers seamlessly connect with your favorite tools, making it easy to plug into any workflow and collaborate across any platforms.</p>
                </div>
                <div>
                    <div className="h-[400px] lg:h-[800px]  mt-8 lg:mt-0 overflow-hidden grid md:grid-cols-2 gap-4 masked-element-to-top ">
                        <IntegrationCard integrations={integrations} />
                        <IntegrationCard integrations={integrations.slice().reverse()} />

                    

                
                        
                    </div>
                </div>
                
                
            </div>
        </div>

    </section>;
}
