import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from '@iconos/ArrowLeft';
import { ArrowRight } from '@iconos/ArrowRight';
import { ExperienceItems } from '@interfaces/experienceItems.interface';
import { IconSkill } from '@components/IconSkill/IconSkill';

interface CarouselProps {
    items: Array<any>;
    containerClass?: string;
    visibleItems: number;
    autoPlay?: boolean;
    interval?: number;
}

const resizeVisibleElements = (childWidth:number, visibleElements:number): number => {
    return childWidth * visibleElements;
}

export const Carousel: React.FC<CarouselProps> = ({ items, visibleItems, containerClass, autoPlay, interval }) => {
    const ulRef = useRef<HTMLUListElement>(null);
    const [childWidth, setChildWidth] = useState<number>(0);
    const [currentPosition, setCurrentPosition] = useState<number>(0);
    const [rightArrow, setRightArrow] = useState<boolean>(false);
    const [visibleElements, setVisibleElements] = useState<number>(visibleItems);
    const [ulWidth, setUlWidth] = useState<number>(resizeVisibleElements(childWidth, visibleElements));
    const [intervalInstance, setintervalInstance] = useState<any>(null);

    useEffect(() => {
        if(autoPlay){
            const intervalInst = setInterval(() => {
                handleClickRight();
            }, interval);

            return () => clearInterval(intervalInst);
        }
    }, [currentPosition]);

    useEffect(() => {
        setUlWidth(resizeVisibleElements(childWidth, visibleElements));
    }, [childWidth, visibleElements]);

    useEffect(() => {
        const children = ulRef?.current?.children;

        if (children) {
            const childrenLength = children.length;
            if(childrenLength > 0){
                const childWidth = children[0].clientWidth;
                setChildWidth(childWidth);
            }
        }
    },[ulRef]);

    const handleClickLeft = () => {
        setRightArrow(false);
        if(currentPosition - 1 <= 0){
            setCurrentPosition(0);
        } else {
            setCurrentPosition(currentPosition - 1);
        }
    }

    const handleClickRight = () => {
        setRightArrow(true);
        if(currentPosition + 1 >= (items.length - visibleElements)){
            setCurrentPosition(0);
        } else {
            setCurrentPosition(currentPosition + 1);
        }
    }

    const xPosition = () => {
        if(currentPosition > 0){
            return (currentPosition * childWidth) * -1;
        }
        return 0;
    }

    return (
        <article className={containerClass}>
            <div>
                <button onClick={handleClickLeft}>
                    <ArrowLeft />
                </button>
            </div>
            <ul ref={ulRef} style={{ width: ulWidth}}>
                {items.map((item:(props:any) => JSX.Element, key:number) => 
                    <IconSkill Item={item} key={key} index={key} xPosition={xPosition()}/>
                )}
            </ul>
            <div>
                <button onClick={handleClickRight}>
                    <ArrowRight />
                </button>
            </div>
        </article>
    );
};