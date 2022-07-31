import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft } from '@iconos/ArrowLeft';
import { ArrowRight } from '@iconos/ArrowRight';
import { IconSkill } from '@components/IconSkill/IconSkill';
import { ExperienceItems } from '@interfaces/experienceItems.interface';

interface CarouselProps {
    items: Array<ExperienceItems>;
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
    const [ulWidth, setUlWidth] = useState<number>(resizeVisibleElements(childWidth, visibleItems));

    useEffect(() => {
        if(autoPlay){
            const intervalInst = setInterval(() => {
                handleClickRight();
            }, interval);

            return () => clearInterval(intervalInst);
        }
    }, [currentPosition, autoPlay]);

    useEffect(() => {
        setUlWidth(resizeVisibleElements(childWidth, visibleItems));
    }, [childWidth, visibleItems]);

    useEffect(() => {
        const children = ulRef?.current?.children;
        
        if (children) {
            const childrenLength = children.length;
            if(childrenLength > 0){
                const childWidth = children[0].clientWidth;
                setChildWidth(childWidth);
            }
        }
    },[ulRef, visibleItems]);

    const handleClickLeft = () => {
        if(currentPosition <= 0){
            setCurrentPosition((items.length - 1) - visibleItems);
        } else {
            setCurrentPosition(currentPosition - 1);
        }
    }

    const handleClickRight = () => {
        if(currentPosition + 1 >= (items.length - visibleItems)){
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
                {items.map((item:ExperienceItems, key:number) => 
                    <IconSkill Item={item} key={item.name} index={key} xPosition={xPosition()} />
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