import React, { SVGProps, useEffect, useState } from 'react';
import styles from '@styles/Experience.module.scss';
import { ExperienceIcons } from '@utils/Utils'
import { Carousel } from '@components/Carousel/Carousel';
import { WindowSize } from '@interfaces/windowSize.interface';
interface ExperienceProps {
    windowDimenions:WindowSize
}

const adjustVisibleItems = (width:number, moreThan:number, firstValue:number, SecondValue:number):number => {
    return width > moreThan ? firstValue : SecondValue;
}

export const Experience: React.FC<ExperienceProps> = ({windowDimenions}) => {
    const [experienceItems, setExperienceItems] = useState<Array<(props: SVGProps<SVGSVGElement>) => JSX.Element>>(ExperienceIcons.map(item => item.icon));
    const [visibleItemsAdjust, setVisibleItemsAdjust] = useState<number>(adjustVisibleItems(windowDimenions.winWidth, 1300, 9, 7));

    useEffect(() => {
        const visibleItemsToAdjust = adjustVisibleItems(windowDimenions.winWidth, 1300, 9, 7)
        if(visibleItemsToAdjust !== visibleItemsAdjust){
            setVisibleItemsAdjust(visibleItemsToAdjust);
        }
    }, [windowDimenions]);

    return (
        <section className={styles.container}>
            <article className={styles.content}>
                <h1>Experiencia</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quidem reprehenderit iure doloribus nobis sunt quisquam cumque commodi ut, alias fuga, quibusdam minima iusto. Dolor facilis blanditiis voluptas quisquam hic!</p>
            </article>
            <Carousel items={experienceItems} visibleItems={visibleItemsAdjust} containerClass={styles.icons} autoPlay={true} interval={2000}/>
        </section>
    );
};