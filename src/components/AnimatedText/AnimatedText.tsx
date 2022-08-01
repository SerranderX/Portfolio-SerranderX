import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "@styles/AnimatedText.module.scss";


interface AnimatedTextProps {
    textData: string[];
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({textData}) => {
  const [text, setText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setText(text < textData.length - 1 ? text + 1 : 0);
    }, 5000);
    return () => clearInterval(interval);
  });


  return (
      <span className="cd-words-wrapper">
        {textData.map((txt:string, i:number) => (
          <b key={i} className={text === i ? "is-visible" : "is-hidden"}>
            {txt}
          </b>
        ))}
      </span>
  );
};