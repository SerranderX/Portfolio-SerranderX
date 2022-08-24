import React from 'react';
import { ButtonProps } from '@interfaces/buttona.interface';
import { motion } from 'framer-motion';
import styles from '@styles/button.module.scss';

export const Button: React.FC<ButtonProps> = ({text, classes = "", containerClass, handleButton, variants = {}, stateVariants = null, variantsKeys = null, whileHover = undefined}) => {

    const handleClick = (e: any) => {
        handleButton(e)
    }

    return (
        <div className={`${styles.container} ${containerClass && containerClass}`}>
            <motion.button 
                className={`${classes} ${classes === "" && styles.button}`}
                onClick={handleClick}
                variants={variants}
                animate={variantsKeys != null ? stateVariants ? variantsKeys[0] : variantsKeys[1] : {}}
                whileHover={whileHover}
                whileTap={{scale: 0.95}}
            >{text}</motion.button>
        </div>
    );
};