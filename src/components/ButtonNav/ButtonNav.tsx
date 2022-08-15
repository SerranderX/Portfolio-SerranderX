import React, { LegacyRef, MutableRefObject } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from '@iconos/ArrowRight';
import styles from '@styles/ButtonNav.module.scss';

interface ButtonNavProps {
    showHeader: Boolean;
    showFooter: Boolean;
}

const variants = {
    show: {opacity: [0, 1], rotate: -90, y: 0 },
    hidden: {opacity: [1, 0], rotate: 0, y: 200 },
}

export const ButtonNav: React.FC<ButtonNavProps> = ({showHeader, showFooter}) => {

    const handleButton = () => {
        window.location.href = '#header';
    }

    return (
        <motion.button 
            initial="hidden"
            animate={(showHeader || showFooter) ? "hidden" : "show"}
            exit="hidden"
            variants={variants}
            onClick={handleButton}
            transition={{duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98]}}
            className={`${styles['button-nav']}`} 
            whileTap={{scale: [1, 0.80, 1]}}>
            <ArrowRight />
        </motion.button>
    );
};