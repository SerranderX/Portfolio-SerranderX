import React, { Dispatch, SetStateAction, useState, useRef, useEffect } from 'react';
import styles from '@styles/Experience.module.scss';
import { motion } from 'framer-motion';
import { ArrowLeft } from '@iconos/ArrowLeft';
import { ArrowRight } from '@iconos/ArrowRight';
import { ExperienceItems } from '@interfaces/experienceItems.interface';
import { ExperienceIcons } from '@utils/Utils'
import { IconSkill } from '@components/IconSkill/IconSkill';

export const Experience = () => {
    const ulRef = useRef<HTMLUListElement>(null);
    const [experienceItems, setExperienceItems] = useState<ExperienceItems[]>(ExperienceIcons);
    const [childWidth, setChildWidth] = useState<number>(0);
    const [currentPosition, setCurrentPosition] = useState<number>(0);
    const [rightArrow, setRightArrow] = useState<boolean>(false);
     
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
        console.log(currentPosition)
        if(currentPosition - 1 > 0){
            setCurrentPosition(currentPosition - 1);
        } else {
            setCurrentPosition(0);
        }
    }

    const handleClickRight = () => {
        setRightArrow(true);
        if(currentPosition + 1 >= experienceItems.length){
            setCurrentPosition(0);
        } else {
            setCurrentPosition(currentPosition + 1);
        }
    }
    return (
        <section className={styles.container}>
            <article className={styles.content}>
                <h1>Experiencia</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quidem reprehenderit iure doloribus nobis sunt quisquam cumque commodi ut, alias fuga, quibusdam minima iusto. Dolor facilis blanditiis voluptas quisquam hic!</p>
            </article>
            <article className={styles.icons}>
                <div>
                    <button onClick={handleClickLeft}>
                        <ArrowLeft />
                    </button>
                </div>
                <ul ref={ulRef} style={{width: childWidth * 9}}>
                    {experienceItems.map((item:ExperienceItems, key:number) => 
                        <IconSkill key={key} index={key} Icon={item.icon} childWidth={childWidth} currentPosition={currentPosition} rightArrow={rightArrow}/>
                    )}
                </ul>
                <div>
                    <button onClick={handleClickRight}>
                        <ArrowRight />
                    </button>
                </div>
            </article>
        </section>
    );
};