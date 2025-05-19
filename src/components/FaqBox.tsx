import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
interface props {
    question: string;
    answer: string;
    state: boolean;
    className?: string;
}
export default function FaqBox({ question, answer, state, className }: props) {
    return (
        <div
            className={twMerge(
                "bg-neutral-900  h-auto border border-white/10 rounded-2xl p-6",
                className
            )}
        >
            <div className="flex items-center  justify-between">
                <h3 className="font-medium">{question}</h3>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className={twMerge(
                        "feather feather-plus flex-shrink-0 text-lime-400 ",
                        state === true
                            ? "rotate-45 transition duration-300"
                            : ""
                    )}
                >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
            </div>
            <AnimatePresence>
                {state && (
                    <motion.div 
                    initial={{
                        height: 0,
                        marginTop: 0,

                    }}
                    animate={{
                        height: 'auto',
                        marginTop: 12,

                    }}
                    exit={{
                        height:0,
                        marginTop:0

                    }}
                        className={twMerge("mt-6 overflow-hidden", state !== true && "hidden")}
                    >
                        <p className="text-white/50">{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
