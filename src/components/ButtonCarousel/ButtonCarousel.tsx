import React from 'react';
import { ArrowLeft } from '@iconos/ArrowLeft';
import { ArrowRight } from '@iconos/ArrowRight';
import styles from '@styles/ArrowButton.module.scss'

interface ButtonCarouselProps {
    handlePrev?:any;
    handleNext?:any;
    activeIndex?:number;
    right?:boolean;
    left?:boolean;
    className?:any;
    carouselStop:boolean;
}


export const ButtonCarousel: React.FC<ButtonCarouselProps> = ({handlePrev, handleNext, activeIndex, right = false, left = false, className, carouselStop}) => {
    
    const handleClick = () => {
        if(left && !carouselStop) {
            handlePrev();
        }else if(right && !carouselStop) {
            handleNext();
        }
    }
    
    return (
        <button onClick={handleClick} className={className} style={{display: `${carouselStop ? 'none' : 'inline-block'}`}}>
            {left && <ArrowLeft className={styles.ButtonFilter} />}
            {right && <ArrowRight className={styles.ButtonFilter} />}
        </button>
    );
};