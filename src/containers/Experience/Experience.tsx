import React, { SVGProps, useContext, useEffect, useState } from 'react';
import styles from '@styles/Experience.module.scss';
import { ExperienceIcons } from '@utils/Utils'
import { Carousel } from '@components/Carousel/Carousel';
import { WindowSize } from '@interfaces/windowSize.interface';
import { ExperienceItems } from '@interfaces/experienceItems.interface';
import { AppContext } from '@context/AppContext';

interface ExperienceProps {
    windowDimenions:WindowSize
}

const adjustVisibleItems = (width:number, moreThan:number, firstValue:number, SecondValue:number):number => {
    return width > moreThan ? firstValue : SecondValue;
}

export const Experience: React.FC<ExperienceProps> = ({windowDimenions}) => {
    const [experienceItems, setExperienceItems] = useState<ExperienceItems[]>(ExperienceIcons);
    const [visibleItemsAdjust, setVisibleItemsAdjust] = useState<number>(adjustVisibleItems(windowDimenions.winWidth, 1300, 9, 6));
    const { lenguageState: { lenguageSelectedData: {data: { experience }} } } = useContext(AppContext);

    useEffect(() => {
        const visibleItemsToAdjust = adjustVisibleItems(windowDimenions.winWidth, 1300, 9, 6)
        if(visibleItemsToAdjust !== visibleItemsAdjust){
            setVisibleItemsAdjust(visibleItemsToAdjust);
        }
    }, [windowDimenions]);

    return (
        <section className={styles.container} id="experience">
            <article className={styles.content}>
                <h1>{experience.title}</h1>
                <p>{experience.description}</p>
            </article>
            <Carousel items={experienceItems} visibleItems={visibleItemsAdjust} containerClass={styles.icons} autoPlay={true} interval={3000} />
        </section>
    );
};