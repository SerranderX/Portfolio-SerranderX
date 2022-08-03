import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "@styles/AnimatedText.module.scss";

export const titleNameVariants = {
    enter: {
        opacity: [0, 0.5, 1],
        y: 0,
        display: "inline-block",
    },
    exit: {
        opacity: [1, 0.5, 0],
        y: -50,
        display: "none",
    },
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({ textData }) => {
    const [text, setText] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setText(text < textData.length - 1 ? text + 1 : 0);
        }, 3000);
        return () => clearInterval(interval);
    }, [text]);

    return (
        <>
            {textData.map((txt: string, i: number) => {
                return (
                    <motion.span
                        variants={titleNameVariants}
                        key={`${i}-${txt}`}
                        animate={text === i ? "enter" : "exit"}
                        transition={{
                            duration: 0.3,
                            ease: [0.04, 0.62, 0.23, 0.98],
                        }}
                        className={styles.authorName}
                    >
                        {txt}
                    </motion.span>
                )
        })}
        </>
    );
};
interface AnimatedTextProps {
    textData: string[];
}
