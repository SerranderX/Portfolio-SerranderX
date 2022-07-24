import React from 'react';
import styles from '@styles/CarouselDots.module.scss';

interface CarouselDotsProps {
    setActiveIndex: any;
    activeIndex: any;
    numItem: number;
    carouselStop: boolean;
}

export const CarouselDots: React.FC<CarouselDotsProps> = ({setActiveIndex, activeIndex, numItem, carouselStop}) => {

    const handleDotsClick = (index: number) => {
        if(!carouselStop){
            setActiveIndex(index);
        }
    }

    return (
        <div className={styles.dotsContainer}>
            {new Array(numItem).fill("").map((_, i) => (
                <span
                    onClick={() => handleDotsClick(i)}
                    key={i}
                    className={`${styles.dot} ${(i === activeIndex) ? styles.active : styles.inactive}`}
                ></span>
            ))}
        </div>
    );
};