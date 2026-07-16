import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import styles from "@styles/AnimatedText.module.scss";

export const AnimatedText: React.FC<AnimatedTextProps> = ({ textData }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev < textData.length - 1 ? prev + 1 : 0));
        }, 3000);
        return () => clearInterval(interval);
    }, [textData.length]);

    return (
        <AnimatePresence mode="wait">
            <motion.span
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                className={styles.authorName}
                style={{ display: "inline-block" }}
            >
                {textData[index]}
            </motion.span>
        </AnimatePresence>
    );
};

interface AnimatedTextProps {
    textData: string[];
}
