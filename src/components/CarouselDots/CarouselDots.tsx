import React, { useEffect } from 'react';
import styles from '@styles/CarouselDots.module.scss';

interface CarouselDotsProps {
    setActiveIndex: any;
    activeIndex: any;
    numItem: number;
    carouselStop: boolean;
    resetPosition: boolean;
    setResetPosition: (resetPosition:boolean) => void;
}

export const CarouselDots: React.FC<CarouselDotsProps> = ({setActiveIndex, activeIndex, numItem, carouselStop, resetPosition, setResetPosition}) => {

    const handleDotsClick = (index: number) => {
        if(!carouselStop){
            setActiveIndex(index);
        }
    }

    useEffect(() => {
        if(resetPosition){
            handleDotsClick(0);
            setResetPosition(!resetPosition);
        }
    }, [resetPosition]);

    return (
        <div className={styles.dotsContainer}>
            {new Array(numItem).fill("").map((_, i) => (
                <span
                    onClick={() => handleDotsClick(i)}
                    key={`${i}-dot`}
                    className={`${styles.dot} ${(i === activeIndex) ? styles.active : styles.inactive}`}
                ></span>
            ))}
        </div>
    );
};